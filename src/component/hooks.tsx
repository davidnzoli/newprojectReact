import { Container,Box, Button  } from "@mui/material";
import Text from "./Text";
import { Navbar } from "./nav_bar";
import { createRef, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import ButtonCustomer from "./Button";
import { createContext } from "react";




//contentxt start
const mood={
    sad:'yes',
    happy:'no',
 }

 const MoodContext=createContext(mood);
const Context=()=>{
    return(<Box>
        <Text title="context" variant="h4" component="h4" color="#56c2d9" />
     <MoodContext.Provider value={mood}>
             <Moodhappy/>
     </MoodContext.Provider>
    </Box>)
};

//consumer mood

const Moodhappy=()=>{
    const mood =useContext(MoodContext);
    return (
        <MoodContext.Consumer>
            {(mood)=> <Text title={mood.sad}/>}
        </MoodContext.Consumer>);
}

//end context

const Hooks=()=>{
   //first element is the reactive value,the second is setter function
    const [count,setCount]=useState<number>(0);

    const [load,setLoad]=useState<string>("");
//use effect run when component mount and when state changes 
//second array it's dependancy to add states
    useEffect(()=>{
        console.log("hello");
    },[count])

  const onCount=(e:any)=>{
   e.preventDefault();
   setCount(count+1);
  }




 /*
  run before a component is remove from ui
 useEffect(()=>{
    console.log("hello");
    return alert("good bye");
},[count])
*/

    return (
    <>
    <Navbar/>
     <Box paddingTop={"100px"}>
        <Container>
        <Text title="Hooks" variant="h3" component="h3" color="#56c2d9" />
        <Text title={count} variant="h3" component="h3" color="#56c2d9" />
        <ButtonCustomer title="count" function={onCount}/> 
        <br/>
        
        <Context/>
        <br/>
        <Appreduce/>
        </Container>
     </Box>
    </>);



}

const useRefs=()=>{
    //THIS NEVER CHANGE THE UI WHEN WE CLICK TO THE BUTTON
  //  const counref=useRef();
  const mybtn=useRef();
  const sayHello=()=>{
    alert("hello");
  }
  const clickit=()=>{
    if(mybtn.current){
        //mybtn.current;
        console.log("hello")
    }
   
  } 
  return (
        <Box>
         {/*<Button title="count" ref={mybtn} /> */}
         <Text title='hello'/>
         </Box>
  ); 

}

//use reducer

const reducer=(state:any,action:any)=>{
  switch(action.type){
    case 'increment':return state+1;
    case 'decrement':return state-1;
    default: throw Error();
  }
}

const Appreduce=()=>{
    const [state,dispatch]=useReducer(reducer,0);
    return (
    <Box>
      <Text title="use reducer" variant="h3" component="h3" color="#56c2d9" />
      <Text title={"state"+state}  variant="h3" component="h3" />
      <ButtonCustomer title="increment" function={()=>dispatch({type:'increment'})}/> 
      <br/> <br/>
      <ButtonCustomer title="decrement" function={()=>dispatch({type:'decrement'})}/> 
    </Box>);
}

const Appmemo=()=>{
 //recomputation when state change
 const [count,setCount]=useState<number>(0);
 const expensive=useMemo(()=>{
    return count**3;
 },[count])
    return (
    <Box>
      <Text title="use memo" variant="h3" component="h3" color="#56c2d9" />
     
    
      <ButtonCustomer title="memo"/> 
    </Box>);
}


/*const usecallback=()=>{
    //use it when we will pass to some children
    const [count,setCount]=useState<number>(0);
    const expensive=useCallback(()=>{
       return count**3;
    },[count])
       return (
       <Box>
         <Text title="use memo" variant="h3" component="h3" color="#56c2d9" />
         <ButtonCustomer title="memo" handler={expensive}/> 
       </Box>);
   }
*/

   //remain uselayout
//useimperativehandler
   
export default Hooks;