import { useColorModeValue } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import Home from './Home';
import { motion } from "framer-motion"

const Landing=()=>{
    const lotti=[
        {src:"/land1.json",cred:"Nguyễn Như Lân",},
        {src:"/land2.json",cred:"Motion Pixels Studio",},
        {src:"/rocket.json",cred:"Motion Pixels Studio",},
        {src:"/land4.json",cred:"Pierre Blavette",},
        //{src:"/land3.json",cred:"Motion Pixels Studio",}
]

const back=useColorModeValue("linear-gradient(to top,#f7fafc, #f4f8fb, #f2f6f9, #eff4f8, #edf2f7)",
"linear-gradient(to top, #1a202c, #151c29, #101826, #0b1324, #040d21)")
    return<> <div style={{textAlign:"center",backgroundImage:back}}>
         <div style={{paddingTop:"65px"}}>
     
     </div>
        <div className="container">
            <div className="row align-items-md-center" style={{minHeight:"90vh"}}>
                <div className="col-12 col-md-6 align-self-center align-self-md-center" >
                    <motion.p className="gothic" 
                    initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.5,delay:0.8,type:"spring"}}>
                        ISE Student Club
                    </motion.p>
                    <motion.p className="subheading2 lighttext d-none d-md-block" style={{fontSize:"20px"}}
                    initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.5,delay:0.9,type:"spring"}}>
                       A one-stop destination for all the ISE students. <br/>
                        A haven for like-minded individuals to indulge themselves in various fun activities as well as voice their opinions on things ranging from college events to personal fads. Socialise and network with your peers through our interactive discord servers, and much more.
                        <br/>Let's come together and grow as a community!
                    </motion.p>
                    <br/>
                </div>
                <motion.div className="col-12 col-md-6 align-self-md-center align-self-start" 
                initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.5,delay:0.9,type:"spring"}}>
                <Player 
                        autoplay
                        loop
                        src={"/assets"+lotti[0]['src']}
                        style={{ height: '80%',width:"80%" }}
                        >
                    </Player>
                    <a className="smallest lighttext" target="_blank" rel="noreferrer"  href="https://lottiefiles.com/user/212090">aource: @lottifiles/Nguyễn Như Lân</a>
                    <br/><br/><br/>
                    <p className="subheading2 lighttext d-md-none" style={{fontSize:"15px"}}>
                    A one-stop destination for all the ISE students. <br/>
A haven for like-minded individuals to indulge themselves in various fun activities as well as voice their opinions on things ranging from college events to personal fads. Socialise and network with your peers through our interactive discord servers, and much more.
<br/>Let's come together and grow as a community!
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
    <br/>
    <br/>
    <Home></Home>
    </>
}
export default Landing