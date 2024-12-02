import { ForwardedRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { SelectOptionType } from "../types";

type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: FieldError | undefined;
  options: SelectOptionType[];
};
export const Select = forwardRef(
  (props: SelectFieldProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const { className = "", label, options, error, ...other } = props;
    return (
      <div className="form-floating">
        <select className={`form-select ${className}`} {...other} ref={ref}>
          {options.map((x, indx) => (
            <option key={indx} value={typeof x == "string" ? x : x.value}>
              {typeof x == "string" ? x : x.text}
            </option>
          ))}
        </select>
        {label && <label>{label}</label>}
        {error && <div className="error-feedback">{error.message}</div>}
      </div>
    );
  }
);
