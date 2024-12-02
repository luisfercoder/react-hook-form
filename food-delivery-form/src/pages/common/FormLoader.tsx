import { useFormState } from "react-hook-form";

export const FormLoader = (props: any) => {
  const { control } = props;
  const { isLoading } = useFormState({ control });
  return isLoading == false || <div className="loader"></div>;
};
