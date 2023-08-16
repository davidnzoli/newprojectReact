import { Button } from "@mui/material"
import Text from "./Text";
import { useEffect } from "react";
const ButtonCustomer=(props:any)=>{
   
    return(<Button className={props.classname} sx={{backgroundColor:props.bgColor,'&:hover':{
        backgroundColor:props.hoverColor
    }}} onClick={props.function}><Text title={props.title}  color="#ffffff"  /></Button>);
}

ButtonCustomer.prototype={
    title:String,
    classname:String,
    bgColor:String
}

ButtonCustomer.defaultProps={
    title:'submit',
    classname:"btn",
    bgColor:'#56c2d9',
    hoverColor:"#56c2d9"
}



export default ButtonCustomer;