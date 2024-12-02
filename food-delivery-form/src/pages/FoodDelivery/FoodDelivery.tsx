import {
  useForm,
  FieldErrors,
  UseFormReturn,
  FormProvider,
} from "react-hook-form";
import { getRenderCount } from "../../utils/getRenderCount";
import { FoodDeliveryFormType } from "../../types";
import { CheckoutForm } from "./components/CheckoutForm";
import { DeliveryAddressForm } from "./components/DeliveryAddressForm";
import { FoodDeliverMaster } from "./components/FoodDeliverMaster";
import SubmitButton from "../../controls/SubmitButton";
import OrderedFoodItems from "./components/OrderedFoodItems";
import { createOrder, fetchLastOrder } from "../../db";
import { FormLoader } from "../common/FormLoader";
const RenderCount = getRenderCount();
const id: number = 0;

const defaultValues: FoodDeliveryFormType = {
  orderId: 0,
  orderNo: new Date().valueOf(),
  customerName: "",
  mobile: "",
  email: "",
  placedOn: new Date(),
  gTotal: 0,
  paymentMethod: "",
  deliveryIn: 0,
  foodItems: [{ foodId: 0, price: 0, quantity: 0, totalPrice: 0 }],
  address: {
    streetAddress: "",
    landmark: "",
    city: "",
    state: "",
  },
};

export const FoodDeliveryForm = () => {
  const methods: UseFormReturn<FoodDeliveryFormType> =
    useForm<FoodDeliveryFormType>({
      mode: "onChange",
      defaultValues: async():Promise<FoodDeliveryFormType> => {
        if (id === 0) return new Promise (resolve => resolve(defaultValues))
        else {
          const tempOrder = await fetchLastOrder();
          return new Promise (resolve => resolve(tempOrder ? tempOrder : defaultValues))
        }
      },
    });

  const { handleSubmit, control, resetField } = methods;

  const onSubmit = async (formData: FoodDeliveryFormType) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    formData.orderId = 1;
    formData.placedOn = new Date();
    createOrder(formData);
    console.log("submited form date", formData);
  };

  const onError = (err: FieldErrors) => {
    console.log("validation errors", err);
  };

  const onDemo = () => {
   resetField("email",{
    keepError:true,
    defaultValue:"abc@gmail.com"
   })
  }

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <RenderCount />
      <FormLoader control={control}/>
      <FormProvider {...methods}>
        <FoodDeliverMaster />
        <div>list of ordered food items</div>
        <OrderedFoodItems />
        <CheckoutForm />
        <DeliveryAddressForm />
      </FormProvider>
      <SubmitButton value="Submit" control={control} />
      <button className="btn btn-secondary ms-2" onClick={onDemo} type="button">
        Demo
      </button>
    </form>
  );
};
