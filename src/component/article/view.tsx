import { Card ,Grid} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, retrieveArticles } from "../../logic/redux/slice/articleSlice";
import Text from "../Text";
import ButtonCustomer from "../Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const View=()=>{

    const navigate=useNavigate();
    const dispatch = useDispatch<any>();
    const article = useSelector((state:any) => state.articles);
    const [currentId,setCurrentId]=useState<Number>(0);

    const initFetch = useCallback(() => {
        dispatch(retrieveArticles());
      }, [dispatch])
    

    useEffect(()=>{
        initFetch() 
    },[initFetch]);  
    

    const voirplus = (val:any) => {
      
        navigate(`/detailarticle/${val}`);
      /*  dispatch(deleteArticle({ id: currentId }))
          .unwrap()
          .then(() => {
           
          })
          .catch((e:any)=> {
            console.log(e);
          });*/
      };
    

    return (<>
       
        {article.map((e:any)=>{
          return (
        
          <Card elevation={0} style={{margin:"5px",padding:"20px"}}> 
          
          <Text variant="h5" component="h5" title={e?.title}/>  
          <Text title={e?.description}/>
          
                <Grid container xs={12} spacing={2} justifyContent={"right"}>
                     <Grid item ><Link  title="voir plus" to={"/detailarticle/"+e?.id}> voir plus </Link></Grid>
                     
                </Grid>
          </Card>
         
         
          );
            })}
           
       
    </>)
}


export default View;