import React, { ComponentProps, forwardRef, InputHTMLAttributes, useState } from "react"

import { cn } from "@/lib/utils"
import { FieldError } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import ErrorMessage from "../shared/ErrorMessage";
import { Eye, EyeOff } from 'lucide-react';


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


// function Input({ className, type, ...props }: ComponentProps<"input">) {
  
//   return (
//     <div>
//       <Label htmlFor="email" className="mb-2">
//         Email
//       </Label>
//       <input
//         type={type}
//         data-slot="input"
//         className={cn(
//           "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
//           "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
//           "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
//           className
//         )}
//         {...props}
//       />
//     </div>
//   )
// }


const Input = forwardRef<
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
                    customClassContainer ? customClassContainer : "mb-[1rem]"
                  }
                >
                  {label && (
                    <Label 
                      htmlFor={id} 
                      className={`block mb-2 text-sm text-gray-800 custom-form-label ${customClassLabel}`}
                      aria-labelledby={id}
                    >
                      {label}
                      {required && (
                        <span
                          className="text-red-500"
                          style={{ fontSize: 15 }}
                        >
                          *
                        </span>
                      )}
                    </Label>
                  )}
                  <input
                    data-slot="input"
                    name={name}
                    className={cn(
                      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                      "custom-form-control",
                      customClassInput,
                      !!error ? 'border-red-600' : ''
                    )}
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


const InputPassword = forwardRef<HTMLInputElement, InputPropsType>(
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
                  data-slot="input"
                  name={name}
                  className={cn(
                    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                    "custom-form-control",
                    customClassInput, 
                    !!error ? 'border-red-600' : ''
                  )}
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
                      <Eye className="show_password__icon stroke-neutral-400" />  
                  ) : (
                      <EyeOff className="hide_password__icon stroke-neutral-400" />
                  )}
                </span>
              </div>
              {<FormError error={error} />}
            </>
        );
    }
);



export { Input, InputPassword }
