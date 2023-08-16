import { PowerInputSharp } from "@mui/icons-material";
import { Typography } from "@mui/material"
import { useEffect, useState } from "react";


const Text=(props:any)=>{
    const [title,setTitle]=useState("");
    useEffect(()=>{
     setTitle(props.title);
    })
    return (<Typography sx={{color:props.color}} variant={props.variant} component={props.component}>{title}</Typography>);
}

Text.prototype={
    color: String,
    variant:String ,
    title: String
}

Text.defaultProps = {
    color: "grey",
    title: 'text',
    variant:"",
    component:""
   }
   

export default Text;