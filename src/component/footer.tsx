import { Grid,Box, Container } from "@mui/material";
import { GitHub ,LinkedIn,Mail,MailOutline} from "@mui/icons-material";
import {Link } from 'react-router-dom';
const Footer=()=>{
    return(
    <Box className="footer" >
        <Container>
        <Grid container justifyContent="center" >
         
        
            <Box className="contact-info">
             
              <Link to="mailto:schadrackkabinzo@gmail.com"><MailOutline style={{color:'black',fontSize:30}} className="github-icon"/> </Link>
                <Link to="https://www.linkedin.com/in/schadrack-kabinzo-815b001a9"><LinkedIn style={{color:'#0E76A8',fontSize:30}}  className="linkdin-icon"/></Link>
                <Link to="https://github.com/xai-schad-12"><GitHub style={{color:'black',fontSize:30}} className="github-icon"/> </Link> 
              </Box>
          
         
        </Grid>
        </Container>
    </Box>
    );
}

export {Footer};