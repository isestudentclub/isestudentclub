
import { Redirect, Route, Switch } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import Landing from './LandingPage';
import React from 'react';
import withSuspense from './WithSuspense';
const Daks=React.lazy(()=>import("./Daks"));

const BlogPage=React.lazy(()=>import("./BlogPage"));
const Team=React.lazy(()=>import("./Team"));
const Yash=React.lazy(()=>import("./Yash"));
const Events=React.lazy(()=>import("./Events"));
const Main=()=>{
  return <>
  <AnimatePresence>
   <Switch >
      <Route exact path="/" component={()=><Landing></Landing>}></Route>
      <Route exact path="/home" component={()=><Landing></Landing>}></Route>
      <Route exact path="/qnamuskan" component={()=>withSuspense(<BlogPage></BlogPage>)}></Route>
      <Route exact path="/chatwithyash" component={()=>withSuspense(<Yash></Yash>)}></Route>
      <Route exact path="/chatwithdrmdakshayini" component={()=>withSuspense(<Daks></Daks>)}></Route>
      <Route exact path="/team" component={()=>withSuspense(<Team></Team>)}></Route>
      <Route exact path="/events" component={()=>withSuspense(<Events></Events>)}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
   </AnimatePresence>
   <div className="text-center">
   <br/><br/>
   Made with <span style={{color: "#e25555"}}>&#9829;</span> by <a target="_blank" rel="noreferrer" href="https://github.com/ShreeCharan15">Shree Charan</a>
   <br/><br/>

   </div>
   </>
}

export default Main;