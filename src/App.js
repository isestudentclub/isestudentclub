import {  useColorModeValue } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import './App.css';
import NavBar from './NavBar';
import { Redirect, Route, Switch } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './ScrollToTop';

import Landing from './LandingPage';
import Loading from './Loading';

const withSuspense=(el)=><Suspense fallback={<Loading></Loading>}>{el}</Suspense>
const BlogPage=React.lazy(()=>import("./BlogPage"));
const Team=React.lazy(()=>import("./Team"));

function App() {
  
  const back = useColorModeValue("#f7fafc", "#1a202c")
  
  return ( 
    <div style={{minHeight:"100vh",backgroundColor:back}}>
           <NavBar></NavBar>
     <ScrollToTop />
     <AnimatePresence>
     <Switch >
        {/* <Route exact path="/" component={()=><Home></Home>}></Route> */}
        <Route exact path="/" component={()=><Landing></Landing>}></Route>
        <Route exact path="/qnamuskan" component={()=>withSuspense(<BlogPage></BlogPage>)}></Route>
        <Route exact path="/team" component={()=>withSuspense(<Team></Team>)}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
     </AnimatePresence>
    
     
     {/* <br/>
     <br/><br/>
     <br/> */}
     <div className="text-center">
     <br/><br/>
     Made with <span style={{color: "#e25555"}}>&#9829;</span> by <a target="_blank" rel="noreferrer" href="https://github.com/ShreeCharan15">Shree Charan</a>
     <br/><br/>

     </div>

    </div>
  );
}

export default App;
