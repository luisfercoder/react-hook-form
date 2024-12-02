import { useFormContext, useFormState } from "react-hook-form";
import { FoodDeliverMasterFormType } from "../../../types";
import { TextField } from "../../../controls/TextField";
import { getRenderCount } from "../../../utils/getRenderCount";

export const FoodDeliverMaster = () => {
  const { register } = useFormContext<FoodDeliverMasterFormType>();

  const { errors } = useFormState<FoodDeliverMasterFormType>({
    name: ["orderNo", "customerName", "mobile", "email"],
  });

  const RenderCount = getRenderCount();
  return (
    <>
      <RenderCount></RenderCount>
      <div className="row mb-2">
        <div className="col">
          <TextField label="#Order No." disabled {...register("orderNo")} />
        </div>
        <div className="col">
          <TextField
            label="Mobile"
            {...register("mobile", {
              required: "This field is required.",
            })}
            error={errors.mobile}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <TextField
            label="Customer Name"
            {...register("customerName", {
              required: "This field is required.",
            })}
            error={errors.customerName}
          />
        </div>
        <div className="col">
          <TextField
            type="email"
            label="Email"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Incorrect email format.",
              },
            })}
            error={errors.email}
          />
        </div>
      </div>
    </>
  );
};