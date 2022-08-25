
import React from 'react';
import {Button} from '@mui/material';

type Prop = {
   onClick: Function
}

function DetailButton(prop: Prop) {

    return (
       <div>
    <Button variant="outlined" color="secondary" onClick={() => prop.onClick}>Details</Button>
       </div>
    )
}

export default DetailButton; 
