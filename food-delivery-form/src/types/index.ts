export type CheckoutFormType = {
  paymentMethod: "";
  deliveryIn: number;
};
export type DeliveryAddressFormType = {
  streetAddress: "";
  landmark: "";
  city: "";
  state: "";
};

export type FoodDeliveryFormType = {
  foodItems: OrderedFoodItemType[];
  address: DeliveryAddressFormType;
} & FoodDeliverMasterFormType &
  CheckoutFormType;

export type FoodType = {
  foodId: number;
  name: string;
  price: number;
};

export type FoodDeliverMasterFormType = {
  orderId:number;
  orderNo: number;
  customerName: string;
  mobile: string;
  email: string;
  gTotal: number;
  placedOn:Date;
};

export type OrderedFoodItemType = {
  foodId: number;
  price: number;
  quantity: number;
  totalPrice: number;
};
export type SelectOptionType =
  | string
  | { value: string; text: string }
  | { value: number; text: string };



  