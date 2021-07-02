import {  useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion"
import { Avatar,  useColorModeValue } from '@chakra-ui/react';
import qna from './muskanqna.json'
const BlogPage=()=>{
  
    const title="Q & A with Muskan Agarwal"
    
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
        <p className="body lighttext">   - <a>Riya</a>, <a target="_blank" rel="noreferrer"  href="https://instagram.com/_manvith_dalli_?utm_medium=copy_link">Manvith</a></p>
        <br/>
        {headingType?null:<motion.div initial={{ y: "40px",opacity:0 }} transition={{ duration: 0.5 }}
        animate={{ y: "0px",opacity:1 }} className="row align-items-center">
        <div className="col-auto">
            <Avatar size="xl" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
        </div>
        <div className="col medium">
               <p className="body lighttext">ISE 2021</p>
               <p className="body lighttext ">President ISE SC 20-21</p>
        </div>
        </motion.div>}
        <br/>
        {
           headingType?null:<Content></Content> 
        }
       
       
       </div>
    </div>
}

export default BlogPage

const Content=()=>{
    const col=useColorModeValue("#280659","#abb4d1")
    const col2=useColorModeValue("#660F56","#d8b8c1")
   return  <motion.div className="body"  initial={{ y: "40px",opacity:0 }} transition={{ duration: 0.5,delay:0.5 }}
   animate={{ y: "0px",opacity:1 }}>
    Muskan Agarwal, a 4th year ISE student ,and the previous president of the ISE Student Club is an exceptionally talented content writer and an avid coder. Not only has she been a part of many college clubs like Inksanity, Entrepreneurship Development Cell and Rotaract, but has also worked independently as a content writer for many startups, making her a true Jack of all trades. Muskan has maintained the ideal balance of college life by proactively participating in all  college events along with keeping up a good GPA.
<br/>
<br/>

<br/>

<br/>


{
    qna.map((q,ind)=>{
        let pic="/assets/team/"+q.p+".jpg"
        let color=ind%2===0?col2:col
        if(Array.isArray(q.que))
        return<> {q.que.map((que,index)=>{
            return <div style={{color:color}}>
                    <div className="row question" >
                        <div className="col-auto">
                            <Avatar size="sm" name="Segun Adebayo" src={pic} />
                        </div>
                        <div className="col align-self-center bold">
                            {que}
                        </div>
                    </div>
                    <br/>
                    <div className="row answer" >
                        <div className="col-auto">
                            <Avatar size="sm" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
                        </div>
                        <div className="col">
                            {q.ans[index]}
                        </div>
                    </div>
                    <br/>
        </div>
        })}
        <br/>
        <br/>
        <br/>
        </>
        return <div style={{color:color}}>
                    <div className="row" >
                        <div className="col-auto">
                            <Avatar size="sm" name="Segun Adebayo" src={pic} />
                        </div>
                        <div className="col align-self-center bold">
                            {q.que}
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        
                        <div className="col-auto">
                            <Avatar size="sm" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
                        </div>
                        <div className="col" >
                            {q.ans}
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
        </div>
    })
}



    </motion.div>
}