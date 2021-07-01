import {  useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion"
import { Avatar,  useColorModeValue } from '@chakra-ui/react';

const BlogPage=()=>{
  
    const title="Title of the article Title of the article"
    
    const [headingType,setHeadingType]=useState(true);
    return <div className="container">
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
        <br/>
        {headingType?null:<motion.div initial={{ y: "40px",opacity:0 }} transition={{ duration: 0.5 }}
        animate={{ y: "0px",opacity:1 }} className="row align-items-center">
        <div className="col-auto">
            <Avatar size="xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        </div>
        <div className="col">
               <p className="body lighttext">Mett cueyc cir3yg8r irb b </p>
               <p className="body lighttext small">By che2uch cnic</p>
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
    const col=useColorModeValue("#171923","#A0AEC0")
   return  <motion.div className="body" style={{color:col}} initial={{ y: "40px",opacity:0 }} transition={{ duration: 0.5,delay:0.5 }}
   animate={{ y: "0px",opacity:1 }}>
    <p>
    Lorem ipsum dolor sit amet, <span className="italic">consectetur adipiscing</span> elit. In aliquam pretium hendrerit. Quisque consectetur ac dui non imperdiet. Donec vitae leo aliquet, gravida odio maximus, congue felis. Donec vestibulum fringilla ligula, vel blandit enim fermentum at. Donec porttitor ligula ut mollis tincidunt. Fusce dapibus quam vel mi scelerisque, a molestie lacus mattis. Fusce porttitor feugiat nisl, non interdum urna aliquet sit amet. Fusce eu erat posuere, commodo metus iaculis, tempus sapien. Nunc nulla erat, iaculis quis lectus euismod, venenatis consequat neque. In ut orci elementum, interdum diam sit amet, pulvinar urna. Proin sollicitudin eros vel velit blandit ornare. Curabitur volutpat fermentum nulla venenatis venenatis. Ut maximus, libero vitae laoreet rhoncus, quam leo aliquam libero, non placerat libero elit a sem. Morbi sit amet tincidunt sem, eget elementum neque. Cras nec metus eu urna tristique dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    </p>
    <p >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam pretium hendrerit. Quisque consectetur ac dui non imperdiet. Donec vitae leo aliquet, gravida odio maximus, congue felis. Donec vestibulum fringilla ligula, vel blandit enim fermentum at. Donec porttitor ligula ut mollis tincidunt. Fusce dapibus quam vel mi scelerisque, a molestie lacus mattis. Fusce porttitor feugiat nisl, non interdum urna aliquet sit amet. Fusce eu erat posuere, commodo metus iaculis, tempus sapien. Nunc nulla erat, iaculis quis lectus euismod, venenatis consequat neque. In ut orci elementum, interdum diam sit amet, pulvinar urna. Proin sollicitudin eros vel velit blandit ornare. Curabitur volutpat fermentum nulla venenatis venenatis. Ut maximus, libero vitae laoreet rhoncus, quam leo aliquam libero, non placerat libero elit a sem. Morbi sit amet tincidunt sem, eget elementum neque. Cras nec metus eu urna tristique dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    </p>
    <br/>
    <p >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam pretium hendrerit. Quisque consectetur ac dui non imperdiet. Donec vitae leo aliquet, gravida odio maximus, congue felis. Donec vestibulum fringilla ligula, vel blandit enim fermentum at. Donec porttitor ligula ut mollis tincidunt. Fusce dapibus quam vel mi scelerisque, a molestie lacus mattis. Fusce porttitor feugiat nisl, non interdum urna aliquet sit amet. Fusce eu erat posuere, commodo metus iaculis, tempus sapien. Nunc nulla erat, iaculis quis lectus euismod, venenatis consequat neque. In ut orci elementum, interdum diam sit amet, pulvinar urna. Proin sollicitudin eros vel velit blandit ornare. Curabitur volutpat fermentum nulla venenatis venenatis. Ut maximus, libero vitae laoreet rhoncus, quam leo aliquam libero, non placerat libero elit a sem. Morbi sit amet tincidunt sem, eget elementum neque. Cras nec metus eu urna tristique dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    </p>
    <p >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam pretium hendrerit. Quisque consectetur ac dui non imperdiet. Donec vitae leo aliquet, gravida odio maximus, congue felis. Donec vestibulum fringilla ligula, vel blandit enim fermentum at. Donec porttitor ligula ut mollis tincidunt. Fusce dapibus quam vel mi scelerisque, a molestie lacus mattis. Fusce porttitor feugiat nisl, non interdum urna aliquet sit amet. Fusce eu erat posuere, commodo metus iaculis, tempus sapien. Nunc nulla erat, iaculis quis lectus euismod, venenatis consequat neque. In ut orci elementum, interdum diam sit amet, pulvinar urna. Proin sollicitudin eros vel velit blandit ornare. Curabitur volutpat fermentum nulla venenatis venenatis. Ut maximus, libero vitae laoreet rhoncus, quam leo aliquam libero, non placerat libero elit a sem. Morbi sit amet tincidunt sem, eget elementum neque. Cras nec metus eu urna tristique dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    </p>
    </motion.div>
}