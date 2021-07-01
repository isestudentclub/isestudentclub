import { Box, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import iselogo from './images/iselogo.png'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const NavBar=()=>{
    const ic=useColorModeValue(<MoonIcon></MoonIcon>,<SunIcon></SunIcon>)
    const { toggleColorMode } = useColorMode()
    const bg=useColorModeValue("rgba(255, 255, 255,1)","rgba(26, 32, 44,1)")
    const [transparent,setTransparent]=useState(true)
    useEffect(()=>{
        window.onscroll = function() {
            if(window.pageYOffset>70)
            {
                setTransparent(false)
            }
            else{
                setTransparent(true)
            }
}
    },[]);

    return <Box shadow={transparent?"":"sm"} bg={transparent?"transparent":bg} 
    borderBottomEndRadius="3xl" borderBottomStartRadius="3xl" padding={3}
    style={{transition:"ease-in",transitionDuration:"1000"}}
    className="navbar fixed-top navigationbar">
        <div className="container-fluid">
            <div className="row align-items-center" style={{width:"100%"}}>
                <div className="col-auto d-none d-md-block" >
                    <motion.div  initial={{ y: "-100px" }} transition={{ duration: 0.5 }} animate={{ y: "0px" }}>
                            <Link to="/">
                            <div className="row align-items-center gothic" style={{fontSize:"15px"}} >
                                <motion.div  whileHover={{scale: 1.2,transition: { duration: 0.3 },}} className="col-auto">
                                <img src={iselogo} alt="logo" style={{maxHeight:"40px"}}></img>
                                </motion.div>
                                ISE STUDENT CLUB
                            </div>
                            </Link>
                        </motion.div>
                        
                </div>
                <div className="col-auto d-md-none">
                    <motion.div  initial={{ y: "-100px" }} transition={{ duration: 0.5 }} animate={{ y: "0px" }}>
                        <div className="row align-items-center" >
                            <div className="col-auto">
                            <img src={iselogo} alt="logo" style={{maxHeight:"40px"}}></img>
                            </div>
                        </div>
                    </motion.div>
                    
                </div>
                <div className="col"></div>
                <motion.div  initial={{ x: "200px" }}  transition={{ duration: 0.5,delay:0.5,type:"spring" }} animate={{ x: "0px" }} className="col-auto">
                    <IconButton style={{borderRadius:"10px"}} icon={ic} onClick={toggleColorMode}></IconButton>
                </motion.div>
                <motion.div whileHover={{scale: 1.2,transition: { duration: 0.3 },}}  
                initial={{ x: "200px" }} transition={{ duration: 0.5,delay:0.6,type:"spring"  }} 
                animate={{ x: "0px" }} className="col-auto">
                    <SocialIcon  url={"https://www.instagram.com/bmsce_ise_sc/"} target="_blank" style={{ height: 30, width: 30 }}/>
                </motion.div>
                <motion.div  whileHover={{scale: 1.2,transition: { duration: 0.3 },}} initial={{ x: "200px" }} 
                transition={{ duration: 0.5,delay:0.7,type:"spring"  }} animate={{ x: "0px" }} className="col-auto">
                    <SocialIcon  url={"https://discord.gg/XWG5XbMv"} target="_blank" style={{ height: 30, width: 30 }}/>
                </motion.div>

            </div>
        </div>
    </Box>
}
export default NavBar