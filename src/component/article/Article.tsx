import { Typography, Grid,TextField,Box } from "@mui/material"
import ButtonCustomer from "../Button";
import { useState } from "react";
import { createArticle } from "../../logic/redux/slice/articleSlice";
import { useDispatch } from "react-redux";
import View from "./view";


const Article=()=>{

    

        const initialArticleState = {
          id: null,
          title: "",
          description: "",
         
        };
      const [article, setArticle] = useState(initialArticleState);
      const [submitted, setSubmitted] = useState(false);
      const dispatch = useDispatch<any>();

      const handleInputChange =( event:any) => {
        const { name, value } = event.target;
        console.log(name);
        setArticle({ ...article, [name]: value });
      };


      const saveArticle = () => {
        const { title ,description } = article;
        dispatch(createArticle({ title, description}))
          .unwrap()
          .then((data:any) => {
            console.log(data);
            setArticle({
              id: null,
              title:"",
              description: "",
            
            });
            setSubmitted(true);
          }).catch((e:any )=> {
            console.log(e);
          });
      };
      const newArticle = () => {
        setArticle(initialArticleState);
        setSubmitted(false);
      };

    return (<>
      <Grid container xs={12} spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
             <View/>
        </Grid>
  <Grid item md={4} lg={4} xs={4} sm={4}>

      
        <Box>
                <Typography >
                  title
              </Typography>
                  <TextField inputProps={{style:{height:15}}}  onChange={handleInputChange}  value={article.title}  name="title" placeholder="Ex:name@example.com" className="input-field"  sx={{borderRadius:"5",width:{sm:"100%",xs:"100%"},".MuiInputBase-root":{
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
                  <TextField value={article.description}   onChange={handleInputChange}   name="description" placeholder="Ex: description " multiline={true} rows={4} sx={{width:{sm:"100%",xs:"100%"},borderRadius:"5",".MuiInputBase-root":{
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
            <ButtonCustomer title="submit" function={saveArticle} /> 


            {/*get all article*/}

           
            </Box>
            </Grid>
            </Grid>
        
    </>)
}



export default Article;