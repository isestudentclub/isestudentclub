import { useState } from "react"
import { motion } from "framer-motion"
import {Image,  useColorModeValue } from '@chakra-ui/react';
import { SocialIcon } from "react-social-icons"

import Flippy, { FrontSide, BackSide } from 'react-flippy';
const Team=()=>{
    const [oc,setOc]=useState(false)
    const gradient=useColorModeValue("linear-gradient(to bottom, #cbd5e0, #d5dee7, #e0e8ee, #ebf1f5, #f7fafc)",
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
    const bg=useColorModeValue("#F6F6F6","#1A202C")

    const core=[
        {name:"Aditya Kumar", pic:"/assets/team/aditya.jpg",role:"President",gif:"/assets/rickroll.gif",
        socials:["https://open.spotify.com/playlist/4HjYoerAnBT2qXCNLY6GwH?si=843a3f65305f43b7",
        "https://www.instagram.com/adityakumaaar/","https://www.linkedin.com/in/adityakumaaar/"]},
        {name:"Syed Sajjad", pic:"/assets/team/sajjad.jpg",role:"Vice President",gif:"https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif",
    socials:["https://open.spotify.com/playlist/1rDi7E6J0afEfjYckAZ5Vx?si=u7jw1OGJS-aLk6oKXY_4lA&utm_source=whatsapp&dl_branch=1","https://www.instagram.com/sajjad_wasti/","https://www.kaggle.com/sajjadwasti"]},
        //{name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
        //{name:"Segun Adebayo", pic:"https://bit.ly/sage-adebayo"},
    ]
    return core.map((c,index)=>{
        index+=1
        let del=0.2
        return <motion.div style={{margin:"10px"}} className="col-auto"  
        initial={{opacity:0,y:"100px",}} animate={{y:"0px",opacity:1,}} 
        transition={{duration:0.5,delay:del+(index*0.1)}}>
            
            <Flippy
                    flipOnHover={true} // default false
                    flipOnClick={false} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    >
                    <FrontSide style={{padding:"0px",boxShadow:" 0 0px 0px 0 yellow"}}>
                        <Image src={c.pic}  bg="grey" width="200px" height="200px" borderRadius="lg" fallbackSrc={"https://via.placeholder.com/150/"+(bg.substring(1))}></Image>
                        <p style={{marginTop:"10px"}} className="body2 ">{c.name}</p>
                        <p style={{marginTop:"10px"}} className="body lighttext">{c.role}</p>

                    </FrontSide>
                    <BackSide style={{padding:"0px",boxShadow:" 0 0px 0px 0 yellow"}}>
                    <Image src={c.gif}  bg="grey" width="200px" height="200px" borderRadius="lg" fallbackSrc={"https://via.placeholder.com/150/"+(bg.substring(1))}></Image>
                    <div className="row justify-content-center" style={{padding:"3px"}}>
                            {
                                c.socials.map(sc=><SocialIcon  url={sc} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                                )
                            }
                        </div>
                    </BackSide>
                </Flippy>        
    </motion.div>
    })
}

const OC=()=>{
    const bg=useColorModeValue("#F6F6F6","#1A202C")

    const oc=[
        {name:"Ananya Hebbar", pic:"/assets/team/ananya.jfif",socials:["https://www.linkedin.com/in/ananya-hebbar-5750211b4"]
        ,gif:"https://i.pinimg.com/originals/2d/62/74/2d6274213eb306e8852347482da1310b.gif"},
        {name:"Anushka Dongal", pic:"/assets/team/anushka.jpg",socials:[],gif:""},
        {name:"Diya", pic:"/assets/team/diya.jpg",
        socials:["https://open.spotify.com/playlist/474lIuqE8wIhXGCMX1NZVy?si=9dbf55f3d1a644d6","https://twitter.com/httpy2k","https://www.snapchat.com/add/minxxdia/"],
        gif:"/assets/team/diyagif.gif"},

    ]
    const oc2=[
        {name:"Isha Singhal", pic:"/assets/team/isha.jpg",socials:[],gif:""},
        {name:"Manvith", pic:"/assets/team/manvith.jpg",socials:[],gif:""},
        {name:"Peethi Hiremath", pic:"/assets/team/preethi.jpg",
        socials:["https://open.spotify.com/playlist/1s4lUTpKfsJRrvr8bfEFpX?si=fPgPG-vbRUyQuYwScBz2wg&utm_source=native-share-menu&dl_branch=1",
    "https://www.instagram.com/preethi_hiremath?r=nametag","https://www.linkedin.com/in/preethi-v-hiremath-a04a071b5"],
        gif:"https://i.gifer.com/JgX.gif"},
        {name:"Riya", pic:"/assets/team/riya.jpg",socials:[],gif:""},
        {name:"Darshan", pic:"/assets/team/darshan.jpg",socials:[
            "https://open.spotify.com/playlist/0a2nklg8hM1GMTS2IhcaA8?si=763c1246008a46b4"
        ],gif:"https://media.giphy.com/media/NS7gPxeumewkWDOIxi/giphy.gif"},

    ]
    const oc3=[
        {name:"Samartha", pic:"/assets/team/samartha.jpg",socials:[],gif:""},
        {name:"Shree Charan", pic:"/assets/team/charan.jpg",socials:[
            "https://open.spotify.com/playlist/3S1Qe7JLZvSRcNuT1KfKHt?si=9fa3a68f69024523","https://www.linkedin.com/in/shree-charan-32b1781b2/",
            "https://github.com/ShreeCharan15"
        ]
        ,gif:"https://media.giphy.com/media/NCHhJ15B5Ai93NbDmz/giphy.gif"},
        {name:"Vandit Agarwal", pic:"/assets/team/vandit.jpg",socials:[],gif:""},
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
                    style={{boxShadow:" 0 0px 0px 0 yellow"}}
                    flipOnHover={true} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    >
                    <FrontSide style={{padding:"0px",shadow:"",zIndex:0,boxShadow:" 0 0px 0px 0 yellow"}}>
                        <Image src={c.pic}  bg="grey" width="130px" height="130px" borderRadius="lg"
                        fallbackSrc={"https://via.placeholder.com/130/"+(bg.substring(1))}
                         ></Image>
                        <p style={{margin:"20px 2px"}} className="body2 small">{c.name}</p>

                    </FrontSide>
                    <BackSide style={{padding:"0px",boxShadow:" 0 0px 0px 0 yellow"}}>
                        <Image src={c.gif}  bg="grey" width="130px" height="130px" borderRadius="lg" 
                        fallbackSrc={"https://via.placeholder.com/130/"+(bg.substring(1))}></Image>
                        <div className="row justify-content-center">
                            {
                                c.socials.map(sc=><SocialIcon  url={sc} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                                )
                            }
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
                    <FrontSide style={{padding:"0px",boxShadow:" 0 0px 0px 0 yellow"}}>
                        <Image src={c.pic}  bg="grey" width="130px" height="130px" borderRadius="lg" fallbackSrc={"https://via.placeholder.com/130/"+(bg.substring(1))}></Image>
                        <p style={{margin:"20px 0px"}} className="body2 small">{c.name}</p>

                    </FrontSide>
                    <BackSide style={{padding:"0px",boxShadow:" 0 0px 0px 0 yellow"}}>
                    <Image src={c.gif}  bg="grey" width="130px" height="130px" borderRadius="lg" fallbackSrc={"https://via.placeholder.com/130/"+(bg.substring(1))}></Image>
                    <div className="row justify-content-center">
                            {
                                c.socials.map(sc=><SocialIcon  url={sc} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                                )
                            }
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
        oc3.map((c,index)=>{
            index+=1
            let del=0.9
            return <motion.div  className="col-auto"  style={{margin:"10px 2px"}}
            initial={{opacity:0,y:"100px"}} animate={{opacity:1,y:"0px"}} transition={{duration:0.3,delay:del+(index*0.05)}}>
                <Flippy
                    flipOnHover={true} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    >
                    <FrontSide style={{padding:"0px",boxShadow:" 0 0px 0px 0 yellow"}}>
                        <Image src={c.pic}  bg="grey" width="130px" height="130px" borderRadius="lg" fallbackSrc={"https://via.placeholder.com/130/"+(bg.substring(1))}></Image>
                        <p style={{margin:"20px 2px"}} className="body2 small">{c.name}</p>

                    </FrontSide>
                    <BackSide style={{padding:"0px",boxShadow:" 0 0px 0px 0 yellow"}}>
                    <Image src={c.gif}  bg="grey" width="130px" height="130px" borderRadius="lg" fallbackSrc={"https://via.placeholder.com/130/"+(bg.substring(1))}></Image>
                    <div className="row justify-content-center">
                            {
                                c.socials.map(sc=><SocialIcon  url={sc} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                                )
                            }
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
                    <FrontSide style={{padding:"0px",boxShadow:" 0 0px 0px 0 yellow"}}>
                        <Image src={c.pic}  bg="grey" width="100px" height="100px" borderRadius="lg" fallbackSrc={"https://via.placeholder.com/100/"+(bg.substring(1))}></Image>
                        <p style={{margin:"20px 0px"}} className="body2 small">{c.name}</p>

                    </FrontSide>
                    <BackSide style={{padding:"0px",boxShadow:" 0 0px 0px 0 yellow"}}>
                    <Image src={c.gif}  bg="grey" width="100px" height="100px" borderRadius="lg" fallbackSrc={"https://via.placeholder.com/100/"+(bg.substring(1))}></Image>
                    <div className="row justify-content-center">
                            {
                                c.socials.map(sc=><SocialIcon  url={sc} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                                )
                            }
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
                    <FrontSide style={{padding:"0px",boxShadow:" 0 0px 0px 0 yellow"}}>
                        <Image src={c.pic}  bg="grey" width="100px" height="100px" borderRadius="lg" fallbackSrc={"https://via.placeholder.com/100/"+(bg.substring(1))}></Image>
                        <p style={{margin:"20px 0px"}} className="body2 small">{c.name}</p>
                    </FrontSide>
                    <BackSide style={{padding:"0px",boxShadow:" 0 0px 0px 0 yellow"}}>
                    <Image src={c.gif}  bg="grey" width="100px" height="100px" borderRadius="lg" fallbackSrc={"https://via.placeholder.com/100/"+(bg.substring(1))}></Image>
                    <div className="row justify-content-center">
                            {
                                c.socials.map(sc=><SocialIcon  url={sc} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                                )
                            }
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
                    <FrontSide style={{padding:"0px",boxShadow:" 0 0px 0px 0 yellow"}}>
                        <Image src={c.pic}  bg="grey" width="100px" height="100px" borderRadius="lg" fallbackSrc={"https://via.placeholder.com/100/"+(bg.substring(1))}></Image>
                        <p style={{margin:"20px 0px"}} className="body2 small">{c.name}</p>
                    </FrontSide>
                    <BackSide style={{padding:"0px",boxShadow:" 0 0px 0px 0 yellow"}}>
                    <Image src={c.gif}  bg="grey" width="100px" height="100px" borderRadius="lg" fallbackSrc={"https://via.placeholder.com/100/"+(bg.substring(1))}></Image>
                    <div className="row justify-content-center">
                            {
                                c.socials.map(sc=><SocialIcon  url={sc} target="_blank" style={{ height: 25, width: 25,margin:"3px" }}/>
                                )
                            }
                        </div>

                    </BackSide>
                </Flippy>
            
        </motion.div>
        })
    }
    
</div>
</>
}

