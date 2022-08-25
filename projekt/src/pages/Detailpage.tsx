import { Button, Card } from '@mui/material';
import { Create, Delete} from "@mui/icons-material";
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CarService from '../service/CarService';
function Detailpage() {
    const{carId}=useParams();
    const [car,setCar] = React.useState(
        {
            carId,
    carName: "",
    carYear: "",
        }
    );
    const navigate = useNavigate();
    useEffect(()=>{
        if(carId== undefined){
            return;
        }
        CarService().getCarById(parseInt(carId))
        .then((Response: any) =>{
            setCar(Response);
        } )
        .catch((error: any) => {
            console.log(error);
    });
},[]);
return(
    <div>
        <Card>
        <p>Id: {carId}</p>
        <p>Name: {car?.carName}</p>
        <p>Year: {car?.carYear}</p>
        </Card>
 <div>
 <Button
      className="delete"
      variant="outlined"
      color="error"
      size="medium"
      onClick={() => {
        if (carId == undefined) {return;}
        CarService().removeCar(parseInt(carId))
          .then((response: any) => {
            navigate("/cars");
          })
          .catch((error: any) => {
          });
      }}
    >
      <Delete />
      Delete
    </Button>
 </div>
 <div>
 <Button
      className="creat"
      variant="outlined"
      color="success"
      size="medium"
      onClick={() => {
        if (carId == undefined) {return;}
        CarService(). removeCar(parseInt(carId))
          .then((response: any) => {
            navigate("/cars/create");
          })
          .catch((error: any) => {
          });
      }}
    >
      <Create />
      Create
    </Button>
 </div>
 <div>
 <Button
      className="create"
      variant="outlined"
      color="success"
      size="medium"
      onClick={() => {
        if (carId == undefined) {return;}
        navigate("/cars/update/" + carId);
      }}
    >
      <Create />
      update
    </Button>
 </div>
    </div>
    
    )
}

export default Detailpage; 