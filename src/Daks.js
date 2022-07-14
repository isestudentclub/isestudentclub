import {  useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion"
import { Avatar,  useColorModeValue } from '@chakra-ui/react';
import qna from './daks.json'
import shortid from "shortid";
import firebase from './firebase'
const Daks=()=>{
    useEffect(()=>{
        if(window.location.hostname!=='localhost')
        firebase.analytics().logEvent("daks");
    },[]);
    const title="Q & A with Dr. M Dakshayini"
    
    const [headingType,setHeadingType]=useState(true);
    return <div className="container" style={{minHeight:"95vh"}}>
        <div style={{paddingTop:"65px"}}>
     
     </div>
          <br/>
       <div style={{padding:"5px 20px"}}>
       { headingType?<div className="body2 typewriter largest">
        <Typewriter options={{loop:false,delay:50}}
            onInit={(typewriter)=> {
            typewriter
            .typeString(title) 
            .callFunction(() => {
                typewriter.stop();
                    setHeadingType(false);
            })
            .start();
        }}
        />
        </div>: <div className="body2  largest ">
        {title}
        </div>}
        <p className="body lighttext" style={{paddingLeft:"10px"}}>15th May 22</p>
        <p className="body lighttext">   - <a href="https://www.instagram.com/__khushiiiieee/" target="_blank" rel="noreferrer">Khushi</a>, <a href="https://www.instagram.com/mahnoor._.shah/" target="_blank" rel="noreferrer">Mahnoor</a>, <a href="https://www.instagram.com/keerthan_h_m/" target="_blank" rel="noreferrer">Keerthan</a></p>
        
        <br/>
        {headingType?null:<motion.div initial={{ y: "40px",opacity:0 }} transition={{ duration: 0.5 }}
        animate={{ y: "0px",opacity:1 }} className="row align-items-center">
        <div className="col-auto">
            <Avatar size="xl" name="M Dakshayini" src="/assets/team/daks.png" />
        </div>
        <div className="col medium">
               <p className="body lighttext">Professor, ISE</p>
               <p className="body lighttext ">HOD, ISE 19-22</p>
        </div>
        </motion.div>}
        <br/>
        {
           headingType?null:<Content></Content> 
        }
       
       
       </div>
    </div>
}

export default Daks

const Content=()=>{
    const col=useColorModeValue("#280659","#abb4d1")
    const col2=useColorModeValue("#660F56","#d8b8c1")
   return  <motion.div className="body"  initial={{ y: "40px",opacity:0 }} transition={{ duration: 0.5,delay:0.5 }}
   animate={{ y: "0px",opacity:1 }}>
    Meet Dr M Dakshayini, a professor and the former HOD of the ISE Department. She finds herself inclined towards technology, and you would always get to learn something new around her. Her perfect blend of joviality and discipline makes students fond of her. She has been a role model to many and continues to do so.
<br/>
<br/>

<br/>

<br/>


{
    qna.map((q,ind)=>{
        let color=ind%2===0?col2:col
        let ques=[]
        let ans=[]
        if(Array.isArray(q.que))
            {
                ques=[...q.que]
                ans=[...q.ans]
            }
        else
        {
            ques=[q.que]
            ans=[q.ans]
        }

        return<> {ques.map((que,index)=>{
            return <div key={shortid.generate()} style={{color:color}}>
                    <div className="row question" >
                        <div className="col-auto">
                            <Avatar size="sm" name={"ISE SC"} src={"/assets/iselogo.png"} />
                        </div>
                        <div className="col align-self-center bold">
                            {que}
                        </div>
                    </div>
                    <br/>
                    <div className="row answer" >
                        <div className="col-auto">
                            <Avatar size="sm" name="M Dakshayini" src="/assets/team/daks.png" />
                        </div>
                        <div className="col">
                            {ans[index]}
                        </div>
                    </div>
                    <br/>
        </div>
        })}
        <br/>
        <br/>
        <br/>
        </>
        
    })
}



    </motion.div>
}