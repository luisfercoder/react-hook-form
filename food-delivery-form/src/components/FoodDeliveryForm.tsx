import { useForm } from "react-hook-form";

type FoodDeliveryFormType={
  customerName :string;
  mobile:string;
}

export const FoodDeliveryForm1 = () => {
 const {register, handleSubmit}= useForm<FoodDeliveryFormType>()
 
  const onSubmit=(formData:FoodDeliveryFormType)=>{
    console.log('form data',formData)
  }
  const onError= errors=>{
    console.log("validation data",errors)
  }
   

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit,onError)}>
      <div className="form-floating mb-3">
       <input 
       type="text" 
       className="form-control" 
       placeholder="Customer name"
       {...register('customerName',{required:"Customer Name is required"})}
       />
      <label >Customer name</label>
      </div>

      <div className="form-floating mb-3">
       <input 
       type="text" 
       className="form-control" 
       placeholder="5552324234"
       {...register('mobile',{required:"Mobile is required"})}/>
      <label >Mobile</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
