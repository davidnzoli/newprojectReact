import { Box, Container, TextField, Typography } from "@mui/material";
import Text from "./Text";
import ButtonCustomer from "./Button";
import { useState } from "react";
import Article from "./article/Article";

const Main=()=>{
    const [name,setName]=useState();
    const [message,setMessage]=useState();
    const onsubmit=(e:any)=>{
               e.preventDefault();
           alert("hello");
    }

    return (

     <>
      <Box paddingTop={"100px"}>
        <Container>
            <Text title="Data" variant="h1" component="h1" color="#56c2d9" />
             <Article/>
           
        </Container>
      </Box>
    </>);
}


export default Main;