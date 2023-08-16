import { Box, Card, Button,Grid,Container, TextField, Typography,Alert } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import Text from '../Text';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ArticleService from "../../logic/service/articleService";
import { deleteArticle, updateArticle } from "../../logic/redux/slice/articleSlice";
import { Navbar } from "../nav_bar";
import ButtonCustomer from "../Button";

const Detail=()=>{

    const { id }= useParams();
    let navigate = useNavigate();
  
    const initialArticleState = {
      id: null,
      title: "",
      description: "",
      published: false
    };
    const [currentArticle, setCurrentArticle] = useState(initialArticleState);
    const [message, setMessage] = useState("");
  
    const dispatch = useDispatch<any>();
  
    const getArticle = (id:any) => {
        ArticleService.get(id)
        .then((response:any) => {
            setCurrentArticle(response.data);
        })
        .catch((e:any) => {
          console.log(e);
        });
    };

    useEffect(() => {
        if (id)
        getArticle(id);
      }, [id]);
    
const onDelete=()=>{

        dispatch(deleteArticle(id))
          .unwrap()
          .then(() => {
            navigate("/");
          })
          .catch((e:any) => {
            console.log(e);
          });
      
}


const handleInputChange =( event:any )=> {
    const { name, value } = event.target;
    setCurrentArticle({ ...currentArticle, [name]: value });
  };

  /*const updateStatus = (status:any) => {
    const data = {
      id: currentArticle.id,
      title: currentArticle.title,
      description: currentArticle.description,
  
    };

    dispatch(updateArticle({ id: currentArticle.id, data }))
      .unwrap()
      .then((response:any)=> {
        console.log(response);
        setCurrentArticle({ ...currentArticle,  });
        setMessage("The status was updated successfully!");
      })
      .catch((e:any) => {
        console.log(e);
      });
  };*/

  const updateContent = () => {
    const data = {
        id: currentArticle.id,
        title: currentArticle.title,
        description: currentArticle.description,
    
      };
    console.log("hello");
    dispatch(updateArticle(data))
      .unwrap()
      .then((response:any) => {
        console.log(response);
        setMessage("The tutorial was updated successfully!");
      })
      .catch((e:any)=> {
        console.log(e);
      });
  };


    return (
    
        <>
             <Navbar/>
             <Box paddingTop={"100px"}>
              <Container>     
            <Card elevation={0} style={{margin:"5px",padding:"20px"}}> 
          <Text variant="h5" component="h5" title={currentArticle.title}/>  
          <Text title={currentArticle.description}/>
          
                <Grid container xs={12} spacing={2} justifyContent={"right"}>
                     <Grid item><Button onClick={onDelete}>delete</Button></Grid>
                     
                </Grid>
          </Card>


          
        <Box>
            {message!="" ?  <Alert security="primary">{message}</Alert> :""}
           
                <Typography >
                  title
              </Typography>
                  <TextField inputProps={{style:{height:15}}}  onChange={handleInputChange}  value={currentArticle.title}  name="title" placeholder="Ex:name@example.com" className="input-field"  sx={{borderRadius:"5",width:{sm:"100%",xs:"100%"},".MuiInputBase-root":{
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
                   Message
              </Typography> 
                  <TextField value={currentArticle.description}   onChange={handleInputChange}   name="description" placeholder="Ex: description " multiline={true} rows={4} sx={{width:{sm:"100%",xs:"100%"},borderRadius:"5",".MuiInputBase-root":{
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
                       <br/>  <br/>
            <ButtonCustomer title="update" function={updateContent}  /> 


            {/*get all article*/}

           
            </Box>
          </Container>
          </Box>
      </>
   );
}


export default Detail;