import { ForwardedRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";

type TextFieldProps = React.IframeHTMLAttributes<HTMLInputElement> & {
  type?: string;
  className?: string;
  label?: string;
  error?: FieldError | undefined;
};
export const TextField = forwardRef(
  (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { type = "text", className = "", label, error, ...other } = props;
    return (
      <div className={label ? "form-floating " : ""}>
        <input
          type={type}
          className={`form-control ${className}`}
          placeholder={label}
          ref={ref}
          {...other}
        />
        {label && <label>{label}</label>}
        {error && <div className="error-feedback">{error.message}</div>}
      </div>
    );
  }
);
