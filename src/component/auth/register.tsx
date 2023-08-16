import { Typography, TextField,Box, Container ,Grid } from "@mui/material";
import AuthService from "../../logic/service/authService";
import { useState } from "react";
import ButtonCustomer from "../Button";
import { Navbar } from "../nav_bar";

const Register=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState();

    const onChangeEmail = (e:any) => {
        const email = e.target.value;
        setEmail(email);
      };
    
      const onChangePassword = (e:any) => {
        const password = e.target.value;
        setPassword(password);
      };
    const onRegister=()=>{
        AuthService.register(email, password).then(
            (response:any) => {
              setMessage(response.data.message);
              //setSuccessful(true);
              console.log(response);
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              setMessage(resMessage);
              
            }
          );
    }
   return (<Box >
<Navbar/>
    <Container >
    <Grid container justifyContent={"center"} xs={12}>
        <Grid item md={6}>
    <Box  paddingTop={"100px"}>
                <Typography >
                  email
              </Typography>
                  <TextField inputProps={{style:{height:15}}}  onChange={onChangeEmail}  value={email}  name="email" placeholder="email" className="input-field"  sx={{borderRadius:"5",width:{sm:"100%",xs:"100%"},".MuiInputBase-root":{
                    '& fieldset':{
                     borderColor:"#56c2d9"
                    },
                    '&:hover fieldset':{
                        borderColor:"#41a7bd"
                    },
                    '&.Mui-focused fieldset':{
                        borderColor:"#88dff2"
                    },
                     background:"#ffffff"
                  }}}></TextField>
                </Box>

<Box>
<Typography >
  password
</Typography>
  <TextField type="password" inputProps={{style:{height:15}}}  onChange={onChangePassword}  value={password}  name="password" placeholder="password" className="input-field"  sx={{borderRadius:"5",width:{sm:"100%",xs:"100%"},".MuiInputBase-root":{
    '& fieldset':{
     borderColor:"#56c2d9"
    },
    '&:hover fieldset':{
        borderColor:"#41a7bd"
    },
    '&.Mui-focused fieldset':{
        borderColor:"#88dff2"
    },
     background:"#ffffff"
  }}}></TextField>
</Box>
<br/>
<Box  sx={{borderRadius:"5",width:{sm:"100%",xs:"100%"}}}><ButtonCustomer title="creation du compte" function={onRegister} /></Box>
</Grid> </Grid>
</Container>
</Box>
   );
}

export default Register;