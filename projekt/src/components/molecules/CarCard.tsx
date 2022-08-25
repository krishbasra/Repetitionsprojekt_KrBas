import React, { useEffect, useState } from "react";
import { Card, CardActions, CardContent } from "@mui/material";
import DetailButton from "../atoms/DetailButton";
import CarService from "../../service/CarService";
import { CarType } from "../../App";
import { useNavigate } from "react-router-dom";
function CarCard() {
  const cardstyle = {
    display: "block",
    width: "22vw",
  };

  const [car, setCar] = useState<CarType[]>([]);

  useEffect(() => {
    CarService()
      .getCar()
      .then((result: CarType[]) => {
        console.log(result);
        setCar(result);
      });
  }, []);
  const navigate= useNavigate();
  const handleClick = (CarId: number) => {
    navigate("/cars/" + CarId);
  };
  return (
    <div>
     
      {car.map((c) => (
        <div>
          <Card style={cardstyle}>
            {" "}
            <CardContent> <p>Name: </p>{c.carName} </CardContent>{" "}
            <CardActions>
              {/* <DetailButton onClick={()=>handleClick(c.carId)}></DetailButton> */}
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CarCard;
 