import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginFormData } from "../../../utils/api/auth/auth.type";
import { useAppDispatch } from "../../../redux/hook";
import { useLoginUserMutation } from "../../../utils/api/auth/auth.api";
import { cleannerError } from "../../../utils/Utils";
import { onSetUserToken } from "../../../redux/slice/User.slice";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


function UseLoginForm(close?: () => void) {
    let loginSchema = z.object({
        email: z.email({ pattern: z.regexes.email })
            .nonempty("Saisissez votre email"),
        password: z.string()
            .nonempty("Saisissez votre mot de passe")
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
        setError,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [loginUser, { isLoading, isSuccess, error, isError, data }] =
        useLoginUserMutation();

    React.useEffect(() => {
        if (isSuccess) {
            // console.log("data login", data);
            if (data?.token) {
                console.log(data);
                dispatch(
                    onSetUserToken({
                        user: data?.user,
                        token: data?.token,
                        expires_in: data?.expires_in,
                    })
                );
                toast.success(data?.message)
                !!close && close();
            } else {
                toast.error("erreur survenue")
            }
        }
        const err = error as any;

        if (isError) {
            // console.log("error", err);
            setError("email", {
                message: err?.data?.message
                    ? err?.data?.message
                    : err?.status < 500
                        ? "Email ou mot de passe incorrect"
                        : `Une erreur de statut ${err?.status} est survenue.`,
            });

            setTimeout(() => {
                cleannerError(errors, clearErrors);
            }, 3000);
        }
    }, [error, isError, isSuccess, navigate]);
    React.useEffect(() => {
        cleannerError(errors, clearErrors);
    }, [errors]);

    const onSubmit = async (data: LoginFormData) => {
        await loginUser(data);
    };

    return {
        register,
        errors: errors,
        onSubmit: handleSubmit(onSubmit),
        isLoading,
    };
}

export default UseLoginForm;
