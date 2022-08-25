import Createpage from "./pages/Createpage";
import Updatepage from "./pages/Updatepage";
import "./App.css";
import Detailpage from "./pages/Detailpage";
import Homepage from "./pages/Homepage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";


export type CarType = {
  carName: string;
  carId : number;
  carYear: number;

};

function App() {
  

  return (
<BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Login/>}/> */}
      <Route path="/cars" element={<Homepage/>}/>
      <Route path="/cars/:id" element={<Detailpage/>}/>
      <Route path="/cars/create" element={<Createpage/>}/>
      <Route path="/cars/update/:id" element={<Updatepage/>}/>
    </Routes>
</BrowserRouter>


    
  //   <div className="App">
  //     {/* <Homepage></Homepage> */}
  //     {/*<Detailpage></Detailpage> */}
  //     {/* {car.map((c) => <div>{c.Name} </div>) } */}
  //     {/* <Loginpage2></Loginpage2> */}
  //     <Login/>
  //  </div>
  );
}

export default App;
