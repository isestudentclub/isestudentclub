import { useState } from "react"
import { motion } from "framer-motion"
import {Image,  useColorModeValue } from '@chakra-ui/react';
import { SocialIcon } from "react-social-icons"

import Flippy, { FrontSide, BackSide } from 'react-flippy';
const Team=()=>{
    const [oc,setOc]=useState(false)
    const gradient=useColorModeValue("linear-gradient(to top, #cbd5e0, #d8dde6, #e3e5ec, #eeeef1, #f7f7f7)",
    "linear-gradient(to top, #1a202c, #151c29, #101826, #0b1324, #040d21)")

    const highCol=useColorModeValue("#1A202C","cyan")
    const lowCol=useColorModeValue("#A0AEC0","#4A5568")
    return <div  style={{textAlign:"center",transition:"ease-in",transitionDuration:"500",
    backgroundImage:gradient}}>
            <div className="container">
            <div style={{paddingTop:"65px"}}>
     
     </div>
                <br/>
                <div className="row " style={{minHeight:"90vh",}}>
                   <div className="col-12 col-md-2 align-self-md-center" >
                       <div className="row ">
                            <motion.p 
                            onClick={()=>{
                                if(oc)
                                setOc(false)
                            }}
                            whileHover={oc?{scale: 1.2,transition: { duration: 0.3 }}:{}}
                            initial={{opacity:0,y:"100px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.5,type:"spring"}}
                            style={oc?{marginBottom:"20px",color:lowCol,cursor: "pointer"}:{marginBottom:"20px",color:highCol,}} 
                            className={"col-auto col-md-12 valorant medium"+(!oc?"bold":"")}>Core Committee</motion.p>
                            <motion.p 
                            onClick={()=>{
                                if(!oc)
                                setOc(true)
                            }}
                            whileHover={!oc?{scale: 1.2,transition: { duration: 0.3 }}:{}}
                            initial={{opacity:0,y:"100px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.5,delay:0.2,type:"spring"}}
                            style={!oc?{color:lowCol,cursor: "pointer"}:{color:highCol}} 
                            className={"col-auto col-md-12 valorant medium"+(oc?"bold":"")}>Organizing Committee</motion.p>
                       </div>
                   </div>
                   <div className="col-12 col-md-10 align-self-md-center text-center" >
                       <div className="row  justify-content-center" >
                          {
                              oc? <OC></OC>:<CC></CC>
                          }
                       </div>
                   </div>
                </div>
            </div>
        </div>
}
export default Team




const CC=()=>{
    const core=[
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
    ]
    return core.map((c,index)=>{
        index+=1
        let del=0.2
        return <motion.div style={{margin:"10px"}} className="col-auto"  
        initial={{opacity:0,y:"100px",}} animate={{y:"0px",opacity:1,}} 
        transition={{duration:0.5,delay:del+(index*0.1)}}>
            
            <Flippy
                    flipOnHover={true} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    >
                    <FrontSide style={{padding:"0px"}}>
                        <Image src={c.pic}  bg="grey" width="130px" height="130px" borderRadius="lg" fallbackSrc="https://via.placeholder.com/100"></Image>
                        <p style={{marginTop:"10px"}} className="body2 ">{c.name}</p>
                        <p style={{marginTop:"10px"}} className="body lighttext">Role</p>

                    </FrontSide>
                    <BackSide style={{padding:"0px"}}>
                    <Image src={"/assets/rickroll.gif"}  bg="grey" width="130px" height="130px" borderRadius="lg" fallbackSrc="https://via.placeholder.com/100"></Image>
                    <div className="row justify-content-center" style={{padding:"3px"}}>
                            <SocialIcon  url={"https://www.youtube.com/channel/UCkzaJDHBKbcaNatH_T00ieg"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                            <SocialIcon  url={"https://open.spotify.com/playlist/42eLtt8RUBboyXLmNQWU5a?si=a00b06bc33eb4f74"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                            <SocialIcon  url={"https://github.com/ShreeCharan15"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                        </div>
                    </BackSide>
                </Flippy>        
    </motion.div>
    })
}

const OC=()=>{
    const oc=[
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},

    ]
    const oc2=[
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},

    ]
    const oc3=[
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
        {name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
    ]
return <> <div className="d-none d-md-block">
    <div className="row justify-content-center">
        <div className="col-0 col-md" ></div>
        {
            oc.map((c,index)=>{
                index+=1
                let del=0.5
                return <motion.div  className="col-auto"  style={{margin:"10px 2px"}}
                initial={{opacity:0,y:"100px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.3,delay:del+(index*0.05)}}>
                    <Flippy
                    flipOnHover={true} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    >
                    <FrontSide style={{padding:"0px",shadow:"",zIndex:0}}>
                        <Image src={c.pic}  bg="grey" width="130px" height="130px" borderRadius="lg" fallbackSrc="https://via.placeholder.com/100"></Image>
                        <p style={{margin:"20px 2px"}} className="body2 small">{c.name}</p>

                    </FrontSide>
                    <BackSide style={{padding:"0px"}}>
                        <Image src={"https://media.giphy.com/media/IbfW1ezQvWyonWLOhW/giphy.gif"}  bg="grey" width="130px" height="130px" borderRadius="lg" fallbackSrc="https://via.placeholder.com/100"></Image>
                        <div className="row justify-content-center">
                            <SocialIcon  url={"https://www.youtube.com/channel/UCkzaJDHBKbcaNatH_T00ieg"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                            <SocialIcon  url={"https://open.spotify.com/playlist/42eLtt8RUBboyXLmNQWU5a?si=a00b06bc33eb4f74"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                            <SocialIcon  url={"https://github.com/ShreeCharan15"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                        </div>
                    </BackSide>
                </Flippy>

            </motion.div>
            })
        }
        <div className="col-0 col-md" ></div>
    </div>
    <div className="row justify-content-center">
        <div className="col-0 col-md" ></div>
        {
            oc2.map((c,index)=>{
                index+=1
                let del=0.7
                return <motion.div  className="col-auto"  style={{margin:"10px 0px"}}
                initial={{opacity:0,y:"100px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.3,delay:del+(index*0.05)}}>
                    <Flippy
                    flipOnHover={true} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    >
                    <FrontSide style={{padding:"0px"}}>
                        <Image src={c.pic}  bg="grey" width="130px" height="130px" borderRadius="lg" fallbackSrc="https://via.placeholder.com/100"></Image>
                        <p style={{margin:"20px 0px"}} className="body2 small">{c.name}</p>

                    </FrontSide>
                    <BackSide style={{padding:"0px"}}>
                    <Image src={"https://media.giphy.com/media/IbfW1ezQvWyonWLOhW/giphy.gif"}  bg="grey" width="130px" height="130px" borderRadius="lg" fallbackSrc="https://via.placeholder.com/100"></Image>
                    <div className="row justify-content-center">
                            <SocialIcon  url={"https://www.youtube.com/channel/UCkzaJDHBKbcaNatH_T00ieg"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                            <SocialIcon  url={"https://open.spotify.com/playlist/42eLtt8RUBboyXLmNQWU5a?si=a00b06bc33eb4f74"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                            <SocialIcon  url={"https://github.com/ShreeCharan15"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                        </div>
                    </BackSide>
                </Flippy>
            </motion.div>
            })
        }
        <div className="col-0 col-md" ></div>
    </div>
    <div className="row justify-content-center">
    <div className="col-0 col-md" ></div>
    {
        oc.map((c,index)=>{
            index+=1
            let del=0.9
            return <motion.div  className="col-auto"  style={{margin:"10px 2px"}}
            initial={{opacity:0,y:"100px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.3,delay:del+(index*0.05)}}>
                <Flippy
                    flipOnHover={true} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    >
                    <FrontSide style={{padding:"0px"}}>
                        <Image src={c.pic}  bg="grey" width="130px" height="130px" borderRadius="lg" fallbackSrc="https://via.placeholder.com/100"></Image>
                        <p style={{margin:"20px 2px"}} className="body2 small">{c.name}</p>

                    </FrontSide>
                    <BackSide style={{padding:"0px"}}>
                    <Image src={"https://media.giphy.com/media/IbfW1ezQvWyonWLOhW/giphy.gif"}  bg="grey" width="130px" height="130px" borderRadius="lg" fallbackSrc="https://via.placeholder.com/100"></Image>
                    <div className="row justify-content-center">
                            <SocialIcon  url={"https://www.youtube.com/channel/UCkzaJDHBKbcaNatH_T00ieg"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                            <SocialIcon  url={"https://open.spotify.com/playlist/42eLtt8RUBboyXLmNQWU5a?si=a00b06bc33eb4f74"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                            <SocialIcon  url={"https://github.com/ShreeCharan15"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                        </div>
                    </BackSide>
                </Flippy>
        </motion.div>
        })
    }
    <div className="col-0 col-md" ></div>
</div>
</div> 
<div className="d-md-none row justify-content-center">
{
        oc.map((c,index)=>{
            index+=1
            let del=0.5
            return <motion.div  className="col-4"  style={{margin:"10px 0px"}}
            initial={{opacity:0,y:"100px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.3,delay:del+(index*0.05)}}>
                <Flippy
                    flipOnHover={true} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    >
                    <FrontSide style={{padding:"0px"}}>
                        <Image src={c.pic}  bg="grey" width="100px" height="100px" borderRadius="lg" fallbackSrc="https://via.placeholder.com/100"></Image>
                        <p style={{margin:"20px 0px"}} className="body2 small">{c.name}</p>

                    </FrontSide>
                    <BackSide style={{padding:"0px"}}>
                    <Image src={"https://media.giphy.com/media/IbfW1ezQvWyonWLOhW/giphy.gif"}  bg="grey" width="100px" height="100px" borderRadius="lg" fallbackSrc="https://via.placeholder.com/100"></Image>
                    <div className="row justify-content-center">
                            <SocialIcon  url={"https://www.youtube.com/channel/UCkzaJDHBKbcaNatH_T00ieg"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                            <SocialIcon  url={"https://open.spotify.com/playlist/42eLtt8RUBboyXLmNQWU5a?si=a00b06bc33eb4f74"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                            <SocialIcon  url={"https://github.com/ShreeCharan15"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                        </div>
                    </BackSide>
                </Flippy>
        </motion.div>
        })
    } {
        oc2.map((c,index)=>{
            index+=1
            let del=0.7
            return <motion.div  className="col-4"  style={{margin:"10px 0px"}}
            initial={{opacity:0,y:"100px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.3,delay:del+(index*0.05)}}>
                <Flippy
                    flipOnHover={true} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    >
                    <FrontSide style={{padding:"0px"}}>
                        <Image src={c.pic}  bg="grey" width="100px" height="100px" borderRadius="lg" fallbackSrc="https://via.placeholder.com/100"></Image>
                        <p style={{margin:"20px 0px"}} className="body2 small">{c.name}</p>
                    </FrontSide>
                    <BackSide style={{padding:"0px"}}>
                    <Image src={"https://media.giphy.com/media/IbfW1ezQvWyonWLOhW/giphy.gif"}  bg="grey" width="100px" height="100px" borderRadius="lg" fallbackSrc="https://via.placeholder.com/100"></Image>
                    <div className="row justify-content-center">
                            <SocialIcon  url={"https://www.youtube.com/channel/UCkzaJDHBKbcaNatH_T00ieg"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                            <SocialIcon  url={"https://open.spotify.com/playlist/42eLtt8RUBboyXLmNQWU5a?si=a00b06bc33eb4f74"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                            <SocialIcon  url={"https://github.com/ShreeCharan15"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                        </div>
                    </BackSide>
                </Flippy>            
        </motion.div>
        })
    } {
        oc3.map((c,index)=>{
            index+=1
            let del=0.9
            return <motion.div  className="col-4"  style={{margin:"10px 0px"}}
            initial={{opacity:0,y:"100px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.3,delay:del+(index*0.05)}}>
                <Flippy
                    flipOnHover={true} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    >
                    <FrontSide style={{padding:"0px"}}>
                        <Image src={c.pic}  bg="grey" width="100px" height="100px" borderRadius="lg" fallbackSrc="https://via.placeholder.com/100"></Image>
                        <p style={{margin:"20px 0px"}} className="body2 small">{c.name}</p>
                    </FrontSide>
                    <BackSide style={{padding:"0px"}}>
                    <Image src={"https://media.giphy.com/media/IbfW1ezQvWyonWLOhW/giphy.gif"}  bg="grey" width="100px" height="100px" borderRadius="lg" fallbackSrc="https://via.placeholder.com/100"></Image>
                    <div className="row justify-content-center">
                            <SocialIcon  url={"https://www.youtube.com/channel/UCkzaJDHBKbcaNatH_T00ieg"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                            <SocialIcon  url={"https://open.spotify.com/playlist/42eLtt8RUBboyXLmNQWU5a?si=a00b06bc33eb4f74"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                            <SocialIcon  url={"https://github.com/ShreeCharan15"} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                        </div>

                    </BackSide>
                </Flippy>
            
        </motion.div>
        })
    }
    
</div>
</>
}

