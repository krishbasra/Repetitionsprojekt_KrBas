import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import CarService from "../service/CarService";

export default function Createpage(){
    const{id}=useParams();
    const navigate = useNavigate();
 
const formik = useFormik({
    initialValues: {
      Name: "",
      Year: "",
    },
    onSubmit: (values) => {
      handleSubmit(values.Name, values.Year);
    },
  });
  const handleSubmit = (Name:string, Year:string)=>{
    CarService().createCar({Name:Name, Year:Year})
      .then((response: any) => {
        console.log("response",response)
        navigate("/cars")
      })
      .catch((e: any) => {
        postMessage(e.response.data);
      });
    }
return(<form onSubmit={formik.handleSubmit}>
    <div>
      <h1>New Car</h1>
      <label htmlFor="Name">Name</label>
      <input
        id="Name"
        name="Name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Name}
      />
    </div>
    <div>
      <label htmlFor="Year">Year</label>
      <input
        id="Year" 
        name="Year"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Year}
      />
    </div>
    <button type="submit">Submit</button>
  </form>
)
}
