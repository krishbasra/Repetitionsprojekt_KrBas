import React from 'react';
import {Button, TextField} from '@mui/material';
import CarCard from '../components/molecules/CarCard';
import CreateButton from '../components/atoms/CreateButton';
import CarService from '../service/CarService';
import { useNavigate } from 'react-router-dom';
import { Create } from '@mui/icons-material';
import DetailCard from '../components/molecules/DetailCard';


function Homepage() {
    return (
       <div>
<h1>Homepage Cars</h1>
<CarCard/>
       </div>
    )
}

export default Homepage; 


