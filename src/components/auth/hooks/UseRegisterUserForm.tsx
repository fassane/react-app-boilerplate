import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormData } from "../../../utils/api/auth/auth.type";
import { useRegisterUserMutation } from "../../../utils/api/auth/auth.api";
import { 
    cleannerError, 
    countCharacters, 
    countLowercase, 
    countNumber, 
    countSpecial, 
    countUppercase 
} from "../../../utils/Utils";
import toast from "react-hot-toast";


function UseRegisterUserForm(close?: () => void) {
    let registerSchema = z.object({
        first_name: z.string().nonempty("Saisissez votre prénom"),
        last_name: z.string().nonempty("Saisissez votre nom"),
        email: z.email({ pattern: z.regexes.email })
            .nonempty("Saisissez votre email"),
        password: z.string().nonempty("Saisissez votre mot de passe"),
        password_confirmation: z.string(),
    }).refine(data => data?.password === data?.password_confirmation, {
        message: "Les mots de passe doivent correspondre",
        path: ["password_confirmation"]
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
        setValue
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [haveMinUppercase, setHaveMinUppercase] = useState(false);
    const [haveMinLowercase, setHaveMinLowercase] = useState(false);
    const [haveMinNumber, setHaveMinNumber] = useState(false);
    const [haveMinCharacter, setHaveMinCharacter] = useState(false);
    const [haveMinSpecialCharacter, setHaveMinSpecialCharacter] = React.useState(false);
    const handlePasswordChange = (e: any) => {
        var password = e.target.value;
        setPassword(password);
        if (countUppercase(password)) {
            setHaveMinUppercase(true);
        } else {
            setHaveMinUppercase(false);
        }
        if (countLowercase(password)) {
            setHaveMinLowercase(true);
        } else {
            setHaveMinLowercase(false);
        }
        if (countNumber(password)) {
            setHaveMinNumber(true);
        } else {
            setHaveMinNumber(false);
        }
        if (countCharacters(password)) {
            setHaveMinCharacter(true);
        } else {
            setHaveMinCharacter(false);
        }
        if (countSpecial(password)) {
            setHaveMinSpecialCharacter(true);
        } else {
            setHaveMinSpecialCharacter(false);
        }
        setValue("password", e.target.value);
    };

    const [registerUser, { isLoading, isSuccess, error, isError, data }] =
        useRegisterUserMutation();

    React.useEffect(() => {
        if (isSuccess) {
            if (data?.success === true) {
                toast.success(data?.message);
                navigate("/login");
                !!close && close();
            } else {
                toast.error("Erreur survenue")
            }
        }
        const err = error as any;
        if (isError) {
            console.log("error", err);
            if (
                err?.data?.email?.includes("email is already in use")
            ) {
                toast.error("Cet email est déjà associé à un compte.")
            } else {
                toast.error(err?.message);
            }
        }
    }, [error, isError, isSuccess, navigate]);
    React.useEffect(() => {
        cleannerError(errors, clearErrors);
    }, [errors]);

    const onSubmit = async (data: any) => {
        console.log("data register", data);
        await registerUser(data);
    };

    return {
        register,
        errors: errors,
        onSubmit: handleSubmit(onSubmit),
        isLoading,
        handlePasswordChange,
        haveMinCharacter,
        haveMinLowercase,
        haveMinNumber,
        haveMinSpecialCharacter,
        haveMinUppercase,
        password
    };
}

export default UseRegisterUserForm;
