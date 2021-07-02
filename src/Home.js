import teamImage from './images/team.svg'
//import valoImage from './images/valo.jfif'
import { Box,Avatar, Center, useColorModeValue } from '@chakra-ui/react';
import AOS from 'aos'
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home=()=>{
    useEffect(()=>{
        AOS.init();
      },[]);
    const secondaryBack = useColorModeValue("white", "#171923")
  const secondaryBackHover = useColorModeValue("#F7FAFC", "#2D3748")
  const borderColor=useColorModeValue("#E2E8F0", "#171923")

  // const back=useColorModeValue("linear-gradient(to top,#e3e5ec, #eeeef1, #f7f7f7)",
  //   "linear-gradient(to top, #040d21,   #151c29, #1a202c)")
    return<div className="container text-center">
      <p cla data-aos="fade-up" className="gothic medium">Articles</p>
      <br/>
     <div className="row text-center justify-content-center" >
            <div className="col-12 col-md-4"  data-aos="fade-up"  data-aos-duration="500" data-aos-delay="100">
            <Link  to="/team">
                <Box className="row align-items-center" bg={secondaryBack}
                _hover={{shadow:"sm",bg:secondaryBackHover}}
                  style={{border:"1px solid ",borderColor:borderColor,margin:"10px",padding:"20px 10px",borderRadius:"15px"}}>
                    <div className="col-12 ">
                      <Center>
                      <img alt="team" src={teamImage} style={{maxHeight:"100px"}}></img>
                      </Center>
                    </div>
                    <div className="col">
                    <br/>
                    <p className="body medium">Meet the new team</p>
                    <p className="body lighttext small">Meet the new core and organizing committee of the ISE SC</p>
                    </div>
                </Box>
              </Link>
            </div>
            <div className="col-12 col-md-4" data-aos="fade-up"  data-aos-duration="500" data-aos-delay="100">
              <Link  to="/qnamuskan" >
                <Box className="row align-items-center"
                  bg={secondaryBack}
                  _hover={{shadow:"sm",bg:secondaryBackHover}}
                  style={{border:"1px solid ",borderColor:borderColor,margin:"10px",padding:"20px 10px",borderRadius:"15px"}}>
                    <div className="col-12">
                      <Center>
                      <Avatar size="xl" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
                      
                      </Center>
                    </div>
                    <div className="col">
                    <br/>
                    <p className="body medium">Q & A with Muskan Agarwal</p>
                    <p className="body lighttext small">A rendezvous with the past president of ISE SC.</p>
                    </div>
                </Box>
              </Link>
            </div>
       
     </div>

      <br/><br/><br/><br/><br/>
     {/* <div className="row text-center justify-content-center" style={{minHeight:"80vh"}}>
     <div className="col-12 col-md-4">
       <p data-aos="fade-up" 
        className="gothic medium">Upcoming events</p>
        <br/>
         <div data-aos="fade-up"  data-aos-duration="500" data-aos-delay="100"  style={{backgroundColor:secondaryBack,border:"1px solid ",borderColor:borderColor,margin:"10px",padding:"20px 10px",borderRadius:"15px"}}>
           <img  alt="team" src={valoImage}></img>
           <br/>
           <p className="body medium">Event name </p>
           <p className="body lighttext">Event message eadvwsv wr e reb reb efbE F FEvent message eadvwsv wr e reb reb efbE F FEvent message eadvwsv wr e reb reb efbE F FEvent message eadvwsv wr e reb reb efbE F FT</p>
         </div>
         
       </div>
     </div> */}
  </div>
}

export default Home