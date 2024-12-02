import { useForm } from "react-hook-form";
import { getRenderCount } from "../utils/getRenderCount";

type FoodDeliveryFormType = {
  orderNo: number;
  customerName: string;
  mobile: string;
  email: string;
};
const RenderCount = getRenderCount();
export const DefaultValuesToEntireForm = () => {
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>({
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: "",
      mobile: "",
      email: "",
    },
  });

  const onSubmit = (formData: FoodDeliveryFormType) => {
    console.log("form data", formData);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <RenderCount></RenderCount>
      <div className="row mb-2">
        <div className="col">
          <div className="form-floating ">
            <input
              type="text"
              className="form-control"
              placeholder="#order No."
              disabled
              {...register("orderNo")}
            />
            <label>#Order No.</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="5552324234"
              {...register("mobile")}
            />
            <label>Mobile</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-floating ">
            <input
              type="text"
              className="form-control"
              placeholder="Customer name"
              {...register("customerName", { value: "Fernando" })}
            />
            <label>Customer name</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              {...register("email")}
            />
            <label>Email</label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
