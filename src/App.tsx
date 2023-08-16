import React from 'react';

import './scss/style.scss';
import {Navbar} from './component/nav_bar';

import { Footer } from './component/footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Box, Container } from '@mui/material';
import Main from './component/main';
import Hooks from './component/hooks';
import Detail from './component/article/detail';
import Register from './component/auth/register';
import Login from './component/auth/login';
import Todo from './component/todo/todo';

function Home() {
  return (
    < >
          <Navbar/>
          <Main/>
          <Footer/>
    </>
  );
}

function NoMatch() {
  return (
    <Box >
      <Container>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      </Container>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/todo' element={<Todo/>}/>
        <Route path="/detailarticle/:id" element={<Detail />}/>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}



export default App;
