import { Center, Stack } from "@chakra-ui/react"
import { Player } from '@lottiefiles/react-lottie-player';

const Loading=()=>{
    return <div className="container" style={{height:"100vh"}}>
        <div style={{paddingTop:"65px"}}>
     
     </div>
        <Center height="100%">
            <Stack >
                <Player
                    autoplay
                    loop
                    src={"/assets/loading.json"}
                    style={{ height: '150px',width:"150px" }}
                >
                </Player>
            
                <p className="small text-center gothic">Dividing by zero</p>
             </Stack>
        </Center>

    </div>
}
export default Loading