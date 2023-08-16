import { Box,Paper,Container,TextField,Typography,Button } from "@mui/material";
import Text from "../Text";
import { Navbar } from "../nav_bar";
import { useCallback, useEffect, useReducer, useState } from "react";
import ButtonCustomer from "../Button";




const reducer=(state:any,action:any)=>{
    switch(action.type){
      case 'addtask':return state.push(action.payload);
      case 'remove':return state-1;
      default: throw Error();
    }
  }

const Todo=()=>{
    let initial:any=[{
      
        val:"hello",
      
    },
   
];

    const [todolist,setTodolist]=useState<Array<Object>>(initial);
    const [state,dispatch]=useReducer(reducer,todolist);
    const [val,setVal]=useState<any>("");



    const handleInputChange =( event:any) => {
        const { val, value } = event.target;
     
        setVal(value);
      };


    useEffect(()=>{
      
    },[todolist])


    const editer=(value:string,indexc:number)=>{
    const data=  todolist.find((e,index)=>index==indexc);
    const v=todolist.map((e,index)=>{
        if(index==index){
            return {...e,val:value};
        }
        return e;
    });
    setTodolist(v);

    }

    const remove=(indexv:number)=>{
      setTodolist(todolist.filter((e,index)=>index!=indexv));
    }

    
    const addTodo=(e:any)=>{
        e.preventDefault();
       if(!val) return;
       
       const newTodos=[...todolist,{val}]
    
       setTodolist(newTodos);
       // console.log(todolist);
        setVal("");
    }
    return (
    
    <>
      <Box paddingTop="100px">
        <Navbar/>
        <Container>
           <Text title="todo" variant="h1" component="h1"/>
           <Box>
            <form  >
                <Typography >
                  task
              </Typography>
                  <TextField onChange={handleInputChange} inputProps={{style:{height:15}}}    value={val}  name="val" placeholder="Ex:name@example.com" className="input-field"  sx={{borderRadius:"5",width:{sm:"100%",xs:"100%"},".MuiInputBase-root":{
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
                  </form>
                </Box>
                <br/>
                  <ButtonCustomer title="add task" function={addTodo}/>
                <Box>
                    
                    {todolist.map((e:any,index:number,key:any)=>{ 
                        return(
                    <Box paddingTop="12px">  
                         <Paper ><Text  title={e?.val}/><ButtonCustomer title="remove" function={()=>{

                           remove(index)
                         }}/>
                          <ButtonCustomer title="editer" function={()=>{

                                 editer(e.val,index);
}}/>
                         </Paper>
                     </Box>);
                    })}
                 
                </Box>
           </Container>
      </Box>
    </>
    );
}


export default Todo;