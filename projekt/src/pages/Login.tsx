import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
// import AuthService from '../service/AuthService';

// export default function Login() {
//     let navigate = useNavigate();
//     const formik = useFormik({
//       initialValues: {
//         email: "",
//         password: "",
//       },
//       onSubmit: (values) => {
//         handleSubmit(values.email, values.password);
//       },
//     });
//     const handleSubmit = (email:string,password:string)=>{
//       AuthService().login({email,password})
//         .then((response: any) => {
//           console.log("response",response)
//           localStorage.setItem("token", "Bearer " + response.data["accessToken"]);
//           navigate("/cars")
//         })
//         .catch((e: any) => {
//           postMessage(e.response.data);
//         });
//       }

//   return (
//        <form onSubmit={formik.handleSubmit}>
//       <div>
//         <h1>Login</h1>
//         {/* First Name */}
//         <label htmlFor="email">email: </label>
//         <input
//           id="email"
//           name="email"
//           type="text"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//         /> 
//       </div>
//       <div>
//         <label htmlFor="password">password: </label>
//         <input
//           id="password"
//           name="password"
//           type="text"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }
