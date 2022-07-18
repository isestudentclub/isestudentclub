import { useEffect} from "react"
import { motion } from "framer-motion"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack,Text,Flex,Heading} from '@chakra-ui/react'
import {Image,  useColorModeValue } from '@chakra-ui/react';
import eventList from './events_data.json'
import firebase from './firebase'


const Events=()=>{
    useEffect(()=>{
        if(window.location.hostname!=='localhost')
        firebase.analytics().logEvent("eventsview");
    },[]);
    const gradient=useColorModeValue("white", "#171923")
    return <div style={{textAlign:"center",transition:"ease-in",transitionDuration:"500",  backgroundImage:gradient}}>
            <div className="container">
                <div style={{paddingTop:"95px",textAlign:'left',fontSize:'18px'}}><div className="subheading2 " >Past Events</div> </div>
                    <br/>
                    <DataTabs data={eventList} />
                </div>
        </div>
}
export default Events

function DataTabs({ data }) {
    return (
      <Tabs isLazy={true}>
        <TabList  >
          {data.map((tab, index) => (
            <Tab key={index} >{tab.year}</Tab>
          ))}
        </TabList>

        <TabPanels style={{paddingTop:"20px"}}>
          {data.map((tab, index) => (
            <TabPanel p={0} m={0} key={index}>      
              {tab.data.map((data, index) => (
                <Tabcontents data={data} />
                ))}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    )
  }

const Tabcontents =({data})=>{
    const secBg = useColorModeValue("white", "#171923")
    const borderColor=useColorModeValue("#E2E8F0", "#171923")
    return (

        <Stack direction={{ base: 'column', md: 'row' }} p="5" width={'100%'} boxShadow="lg" m="1" borderRadius="20px" borderColor={borderColor} data-aos="fade-up"  data-aos-duration="500" data-aos-delay="50" >
          <Stack direction={{ base: 'column', md: 'row' }}  w={{ sm: '250px', md: '300px' }}  h={{ sm: '200px', md: '150px' }} borderRadius='20px'>
            <Flex flex={1}  >
            <Image
                objectFit="cover"
                boxSize="100%"
                borderRadius='5px'
                src= {data.image}
                fallbackSrc='https://forodesaopaulo.org/wp-content/uploads/2020/09/image-placeholder-2-min-300x200.jpg'
                // fallbackSrc='https://via.placeholder.com/150'
            />
            </Flex>
          </Stack>

        <Stack direction={{ base: 'row', md: 'column' }} justifyContent="start" p={4} w={'100%'}>
                <Stack direction="column" alignItems="start">
                        <Heading className="body2  largest "  style={{textTransform:'uppercase'}}fontSize={'2xl'}>{data.event_name}</Heading>
                            <p className="body lighttext d-none d-md-block" style={{paddingBottom:"10px"}}> {data.date}</p>
                </Stack>           
                <Text className="subheading2 lighttext d-none d-md-block" style={{fontSize:"14px"}} textAlign={'left'} maxW={'4xl'}>
                {data.description}
                </Text>
        </Stack>      
    </Stack>
    )
}