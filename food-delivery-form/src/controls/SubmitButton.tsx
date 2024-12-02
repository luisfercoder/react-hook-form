import { Control, useFormState } from "react-hook-form";
import { getRenderCount } from "../utils/getRenderCount";

type SubmitButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  control?:Control<any,any>
};
const RenderCount = getRenderCount();

export default function SubmitButton (props: SubmitButtonType)  {
  const {
    className = "btn-light",
    value,
    control = undefined,
    ...other
  } = props;

  let isSubmitting = undefined;
  if(control)({isSubmitting}= useFormState({control}))

  return (<>
  <RenderCount></RenderCount>
    <button
    type="submit"
    className={`btn ${className}`}
    disabled={isSubmitting == undefined ? false : isSubmitting}
    {...other}
  >
    {isSubmitting === undefined || isSubmitting === false ? (
      value
    ) : (
      <>
      <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status" className="ms-1">{value}</span>
        {/* <span
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span role="status" className="ms-1">{value}</span> */}
      </>
    )}
  </button>
  </>
  );
};
