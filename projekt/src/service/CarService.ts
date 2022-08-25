import { AxiosInstance } from "axios";
import { CarType } from "../App";
import { defaultAxiosInstatnstace } from "./Api";

type addCarRequest = {
  Name: string;
  Year: string;
};
export type Car = {
  id: number;
  Name: string;
  Year: string;
}

// export default async function getCar() {
//   const data = await defaultAxiosInstatnstace.get("car/", {auth:{username:'ainhoa', password:'ronaldo'}}).catch((error) =>{throw error})
//  console.log("after fetch");
//  console.log(data);
//  return data["data"];
// }

const CarService = (api: AxiosInstance = defaultAxiosInstatnstace) => ({
  getCarById: async (carId: number) => {
      const data = await api.get(`/cars/${carId}` , {auth:{username:'ainhoa', password:'ronaldo'}}).catch((error) =>{throw error});
      return data['data'];
  },
  getCar: async () => {
      const data = await api.get<CarType[]>(`/cars`, {auth:{username:'ainhoa', password:'ronaldo'}}).catch((error) =>{throw error});
      return data['data'];
  },
  createCar: async (params: addCarRequest) => {
    const res = await defaultAxiosInstatnstace.post("/cars", params);
    if (res && res.status === 200) {
      console.log("car successfully created");
    }
  },
  removeCar: async (id: number) => {
    const res = await api.delete(`/cars/${id}`)
    if (res && res.status === 200) {
      console.log("car successfully created");
    }
  },
  updateCar:async (params: Car) => {
    const res = await defaultAxiosInstatnstace.put(`/cars/${params.id}`, params);
    if(res && res.status === 200) {
      console.log("car successfully updated");
  }
}});
export default CarService;