
import {Menu,Close} from '@mui/icons-material';
import { Container} from "@mui/material";
import { useState } from "react";
import {Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar=()=>{
 

    const [classname,setClassname]=useState("dropdown-menu");
    const dropdown=(e:any)=>{
           e.preventDefault();
           if(classname=="dropdown-menu"){
            setClassname("dropdown-menu open");
           }else{
            setClassname("dropdown-menu");
           }
          
    }
    return(

       
          <header >
            <Container>
            <div className="nav-bar">
                    <div className="logo">
                        <a  href="#"><strong className="full-stack">React </strong> Course</a>
                    </div>
               <ul className="links"> 
                 <li><Link  to={"/"}>  Home</Link> </li>
              
  
                 <li> <HashLink smooth to={"/hooks"}>Hooks</HashLink> </li>
                 <li> <HashLink smooth to={"/signup"} > sign up</HashLink> </li>
                 <li> <HashLink smooth to={"/login"} > login</HashLink> </li>
               </ul>
              <Link className="action-btn" to="/todo" >todo</Link>
                    <div className="toggle-btn" onClick={dropdown}>
                      {classname=="dropdown-menu" ?   <Menu style={{fontSize:40}}/> :  <Close style={{fontSize:40}}/>}
                      
                    </div>

            </div>
            <div className={classname}>
            
            <li><Link  to={"/"} onClick={()=>setClassname("dropdown-menu")}>  Home</Link> </li>
                 <li> <HashLink smooth to={"/"}  onClick={()=>setClassname("dropdown-menu")}>  Profile </HashLink> </li>
  
                 <li> <HashLink smooth to={"/hooks"} onClick={()=>setClassname("dropdown-menu")}>Hooks </HashLink> </li>
            <li> <Link className="action-btn" to="/project" onChange={()=>setClassname("dropdown-menu")}>My Project</Link></li>
           
            </div>
            </Container>
          </header>
     
    );
}

export {Navbar} ;