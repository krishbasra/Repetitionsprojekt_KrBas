import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import CarService from "../service/CarService";

export default function Updatepage(){
  const{id}=useParams();
  const navigate = useNavigate();

const formik = useFormik({
  initialValues: {
      id: "",
    Name: "",
    Year: "",
  },
  onSubmit: (values) => {
    handleSubmit(parseInt(values.id),values.Name, values.Year);
  console.log("hier",values);
  },
});
const handleSubmit = (id:number,Name:string,Year:string)=>{
  CarService().updateCar({id:id,Name:Name,Year:Year})
    .then((response: any) => {
      console.log("response",response)
      navigate("/cars/")
    })
    .catch((e: any) => {
      postMessage(e.response.data);
    });
  }
return(<form onSubmit={formik.handleSubmit}>
  <div>
    <h1>updated your Car</h1>
    <label htmlFor="id">id</label>
    <input
      id="id"
      name="id"
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.id}
    />
  </div>
  <div>
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