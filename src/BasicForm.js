import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema=yup.object({
  email:yup.string().email().required(),
  password:yup.string().min(5,"Need a bigger Password💡").max(12,"Password is too big").required(),
})

export function BasicForm() {

  const {handleSubmit,values,handleChange,handleBlur,touched,errors}=useFormik({
    initialValues:{email:"anusha",password:"abc",},
    validationSchema:formValidationSchema,
    onSubmit:(values)=>{
      console.log("onSubmit",values);
    }
  });
  return (
    <div>
      <h1>Basic Form</h1>
      <form onSubmit={handleSubmit}>
      <input value={values.email}
       type="email"
       placeholder='Enter email'
       name="email"
       onChange={handleChange}
       onBlur={handleBlur}>
       </input>
       {errors.email && touched.email?errors.email:""}
      <input value={values.password}
       type="password" 
       placeholder='Enter password'
       name="password"
       onChange={handleChange}
       onBlur={handleBlur}>
       </input>
       {errors.password && touched.password?errors.password:""}
      <button type="submit">Submit</button>

      </form>
      
    </div>

  );
}
