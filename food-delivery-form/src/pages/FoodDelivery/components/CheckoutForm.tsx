import { useFormContext, useFormState, useWatch } from "react-hook-form";
import { Select } from "../../../controls/Select";
import { CheckoutFormType, SelectOptionType } from "../../../types";
import { getRenderCount } from "../../../utils/getRenderCount";
import { useEffect } from "react";

const paymentOptions: SelectOptionType[] = [
  { value: "", text: "Select" },
  { value: "online", text: "Paid Online" },
  { value: "COD", text: "Cash On Delivery" },
];

const deliveryOptions: SelectOptionType[] = [
  { value: 0, text: "Select" },
  { value: 30, text: "Half an hour" },
  { value: 60, text: "1 hour" },
  { value: 120, text: "2 hour" },
  { value: 180, text: "3 hour" },
];

const RenderCount = getRenderCount();


export const CheckoutForm = () => {
  const {
    register,
  } = useFormContext<CheckoutFormType>();

  const { errors } = useFormState<CheckoutFormType>({
    name: ["paymentMethod", "deliveryIn"],
  });

  const paymentMethod = useWatch({name:"paymentMethod"})
  useEffect(()=>{
    if(paymentMethod == 'online') alert("please verify the transaction.")
  },[paymentMethod])

  return (
    <>
    <RenderCount></RenderCount>
      <div className="text-start fw-bold mt-4 mb-2">Checkout Details</div>
      <div className="row mb-2">
        <div className="col">
          <Select
            label="Payment Method"
            options={paymentOptions}
            {...register("paymentMethod", {
              required: "This field is required.",
            })}
            error={errors.paymentMethod}
          />
        </div>
        <div className="col">
          <Select
            label="Delivery Within"
            options={deliveryOptions}
            {...register("deliveryIn",{
              valueAsNumber:true,
            })}
            error={errors.deliveryIn}
          />
        </div>
      </div>
    </>
  );
};
