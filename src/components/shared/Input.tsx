import React, { InputHTMLAttributes, useState } from "react";
import { FieldError } from "react-hook-form";
import ReactQuill from "react-quill";
import ErrorMessage from "./ErrorMessage";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import makeAnimated from "react-select/animated";

export const animatedComponents = makeAnimated();

type InputPropsType = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: any;
    customClass?: string;
    customClassInput?: string;
    customClassLabel?: string;
    customClassContainer?: string;
};

type InputTextPropsType = {
    label?: string;
    error?: string | FieldError;
    customClass?: string;
    customClassInput?: string;
    customClassLabel?: string;
    onChange: (val: string) => void;
    value: string;
    name?: string;
    id?: string;
    required?: boolean;
    readOnly?: boolean;
    placeholder?:string
};



export function FormError({ error }: { error?: string | FieldError | any }) {
    const message =
        typeof error === "string" ? error : error ? error.message : error;
    if (!message) return null;

    return <ErrorMessage message={message} />;
}



export const Input = React.forwardRef<
    HTMLInputElement, 
    InputPropsType
>(
    (props, ref) => {
        const {
            name,
            error,
            id,
            label,
            required,
            readOnly,
            customClassInput,
            customClassLabel,
            customClassContainer,
            ...rest
        } = props;
        return (
            <>
                <div
                    className={
                        customClassContainer ? customClassContainer : "mb-2"
                    }
                >
                    {label && (
                        <label
                            htmlFor={id}
                            className={`form-label custom-form-label ${customClassLabel}`}
                            aria-labelledby={id}
                        >
                            {label}
                            {required && (
                                <span
                                    className="text-danger"
                                    style={{ fontSize: 15 }}
                                >
                                    *
                                </span>
                            )}
                        </label>
                    )}
                    <input
                        className={`form-control custom-form-control 
                            ${customClassInput}
                            ${!!error ? 'border-danger' : ''}
                        `}
                        name={name}
                        id={id}
                        ref={ref}
                        readOnly={readOnly || false}
                        {...rest}
                        onWheel={(event) => event.currentTarget.blur()}
                    />
                    {<FormError error={error} />}
                </div>
            </>
        );
    }
);



export const InputQuill = React.forwardRef<
    HTMLInputElement,
    InputTextPropsType
>((props, ref) => {
    const {
        name,
        error,
        id,
        label,
        required,
        readOnly,
        customClassInput,
        customClassLabel,
        value,
        onChange,
        ...rest
    } = props;
    return (
        <>
            <div className="mb-3">
                {label && (
                    <label
                        htmlFor={id}
                        className={`form-label custom-form-label ${customClassLabel}`}
                        aria-labelledby={id}
                    >
                        {label}
                        {required && (
                            <span
                                className="text-danger"
                                style={{ fontSize: 15 }}
                            >
                                *
                            </span>
                        )}
                    </label>
                )}
                <ReactQuill
                    className={`${customClassInput}`}
                    // name={name}
                    id={id}
                    // ref={ref}
                    readOnly={readOnly || false}
                    {...rest}
                    theme="snow"
                    value={value}
                    onChange={(val:string) => onChange(val)}
                />
                {<FormError error={error} />}
            </div>
        </>
    );
});


export const InputPassword = React.forwardRef<HTMLInputElement, InputPropsType>(
    (props, ref) => {
        const { 
            name, 
            error, 
            id, 
            label, 
            required, 
            readOnly, 
            customClassInput,
            customClassLabel,
            ...rest 
        } = props;
        const [showPassword, setShowPassword] = useState<boolean>(false);
        return (
            <>
                <label
                    htmlFor={id}
                    className={`form-label custom-form-label ${customClassLabel}`}
                    aria-labelledby={id}
                >
                    {label}
                    {required && (
                        <span className="text-danger" style={{ fontSize: 24 }}>
                            *
                        </span>
                    )}
                </label>
                <div className="input-group custom-input-group position-relative mb-1">
                    <input
                        className={`form-control custom-form-control ${customClassInput}
                            ${!!error ? 'border-danger' : ''}    
                        `}
                        name={name}
                        id={id}
                        ref={ref}
                        readOnly={readOnly || false}
                        type={showPassword ? "text" : "password"}
                        {...rest}
                    />
                    <span
                        className="icon__wrapper eye_icon__wrapper"
                        id="__icon_wrapper"
                        onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                        }
                    >
                        {showPassword ? (
                            <FaEye className="show_password__icon" />
                        ) : (
                            <FaEyeSlash className="hide_password__icon" />
                        )}
                    </span>
                </div>
                {<FormError error={error} />}
            </>
        );
    }
);


