import { ChangeEvent, SyntheticEvent, useState } from "react";
import { getRenderCount } from "../utils/getRenderCount";

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};
type FoodDeliveryFormErrorsType = {
  customerName: string;
  mobile: string;
};
const RenderCount = getRenderCount();

export const TypicalForm = () => {
  const [values, setValues] = useState<FoodDeliveryFormType>({
    customerName: "",
    mobile: "",
  });
  const [errors, setErrors] = useState<FoodDeliveryFormErrorsType>({
    customerName: "",
    mobile: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateFormData = () => {
    let temErrors: FoodDeliveryFormErrorsType = {
      customerName: "",
      mobile: "",
    };
    if (values.customerName == "")
      temErrors.customerName = "Customer name is required";
    if (values.mobile == "") temErrors.mobile = "Mobile number is required";
    setErrors(temErrors);

    return Object.values(temErrors).every((x) => x == "");
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFormData()) console.log("form data", values);
    else console.log("form is invalid");
  };

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <RenderCount></RenderCount>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="customerName"
          className="form-control"
          placeholder="Customer name"
          value={values.customerName}
          onChange={handleInputChange}
        />
        <label>Customer name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          name="mobile"
          className="form-control"
          placeholder="5552324234"
          value={values.mobile}
          onChange={handleInputChange}
        />
        <label>Mobile</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
