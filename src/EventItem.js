import { useColorModeValue } from "@chakra-ui/color-mode"
import { Image } from "@chakra-ui/image"
import { Box, Center, Stack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/react"
import AOS from 'aos'


const Item=({data})=>{
    AOS.init()

    const colors=useColorModeValue({
        headText:'#1A202C',
        normText:'#2D3748',
        sc:"#CBD5E0",
        bg:'#F6F6F6',
        hovbg:'#EDF2F7'
    },{
        headText:'#CBD5E0',
        normText:'#A0AEC0',
        sc:"#2D3748",
        bg:'#1A202C',
        hovbg:'#2D3748'
    })



    const obj={...data}
    obj.date=obj.date.toString()
    if(obj.date.length===1)
        obj.date="0"+obj.date

    const months=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
    return <Box 
    data-aos="fade-up" 
    textAlign='justify' className="row "  
        borderWidth={1} borderColor={colors.sc} borderRadius={5} padding="20px 5px" bg={colors.bg} margin="20px 0px"  _hover={{background:colors.hovbg,shadow:"md"}}>
            <div className="col-4 col-md-2" >
                <Box borderRightWidth={1} borderColor={colors.sc} height="100%" textAlign="center">
                    <Center height="100%">
                        <Stack>
                            <p className="display-4" style={{fontSize:"30px",fontWeight:"400",color:colors.headText}}>{obj.date}</p>
                            <p className="display-4" style={{fontSize:"25px",fontWeight:"400",color:colors.headText}}>{months[obj.month-1]}</p>
                            <p className="display-4" style={{fontSize:"25px",fontWeight:"400",color:colors.headText}}>{obj.year}</p>
                        </Stack>
                    </Center>
                </Box>
            </div>
            <div className="col-8 col-md-10 ">
                <div className="row">
                    <div className="col-12 col-md-auto  " style={{minWidth:"150px"}}>
                    <Image 
                       borderRadius="lg"
                       shadow="sm"
                       fallbackSrc={"https://via.placeholder.com/150/"+(colors.bg.substring(1))}
                       src={obj.pic} alt={"event img"} style={{minHeight:"100px",maxHeight:"150px"}}/>
                        <br/>
                    </div>
                    
                    <div className="col-12 col-md" style={{color:colors.normText,}}>
                       
                        <p className="display-4" style={{fontSize:"25px",fontWeight:"400",color:colors.headText,}}>{obj.name}</p>

                        <br/>

                       
                        <div style={{textAlign:"justify"}}>{obj.desc}</div>

                    </div>
                   {(data['linkUrl'])?<div className="col-12">
                       <br/>
                   <Button variant="outline" colorScheme="purple">
                       <a href={data['linkUrl']} target="_blank" rel="noreferrer">{data['linkLabel']?data['linkLabel']:"Click here to register"}</a>
                   </Button>
                   </div>:null}
                </div>
            </div>
           
    </Box>
}
export default Item;