import { Center, Stack,Spinner } from "@chakra-ui/react"

const Loading=()=>{
    return <div className="container" style={{height:"100vh"}}>
        <div style={{paddingTop:"65px"}}>
     
     </div>
        <Center height="100%">
            <Stack >
            <Center>
            <Spinner size="xl" />
            </Center>
            <br/>
                <p className="small text-center gothic">Dividing by zero</p>
             </Stack>
        </Center>

    </div>
}
export default Loading