import {  useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import NavBar from './NavBar';
import ScrollToTop from './ScrollToTop';
import withSuspense from './WithSuspense';
const Main=React.lazy(()=> import('./Main'));

function App() {
  const back = useColorModeValue("#f7fafc", "#1a202c")
  return ( 
    <div style={{minHeight:"100vh",backgroundColor:back}}>
    <NavBar></NavBar>
     <ScrollToTop />
     {withSuspense(<Main></Main>)}
    </div>
  );
}

export default App;
