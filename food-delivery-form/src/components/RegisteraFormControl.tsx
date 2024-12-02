import { useForm } from "react-hook-form";
import { getRenderCount } from "../utils/getRenderCount";

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};
const RenderCount = getRenderCount();
export const RegisteraFormControl = () => {
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>();

  const onSubmit = (formData: FoodDeliveryFormType) => {
    console.log("form data", formData);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <RenderCount></RenderCount>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Customer name"
          {...register("customerName", { value: "Fernando" })}
        />
        <label>Customer name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="5552324234"
          {...register("mobile")}
        />
        <label>Mobile</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
