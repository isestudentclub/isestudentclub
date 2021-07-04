import {  useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion"
import { Avatar,  useColorModeValue } from '@chakra-ui/react';
import firebase from './firebase'
const Yash=()=>{
    useEffect(()=>{
        firebase.analytics().logEvent("yash");
    },[]);
    const title="A chat with Yash Kamal"
    
    const [headingType,setHeadingType]=useState(true);
    return <div className="container padd" style={{minHeight:"95vh"}}>
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
        <p className="body lighttext" style={{paddingLeft:"10px"}}>4th Jul 21</p>
        <p className="body lighttext">   - <a href="https://www.instagram.com/preethi_hiremath?r=nametag" target="_blank" rel="noreferrer">Preethi</a>, <a target="_blank" rel="noreferrer"  href="https://instagram.com/anushkaa_reddy?utm_medium=copy_link">Anushka</a></p>
        <br/>
        {headingType?null:<motion.div initial={{ y: "40px",opacity:0 }} transition={{ duration: 0.5 }}
        animate={{ y: "0px",opacity:1 }} className="row align-items-center">
        <div className="col-auto">
            <Avatar size="xl" name="Yash Kamal" src="/assets/team/yash.jpg" />
        </div>
        <div className="col medium">
               <p className="body lighttext">ISE 2021</p>
               <p className="body lighttext ">Vice President ISE SC 20-21</p>
        </div>
        </motion.div>}
        <br/>
        {
           headingType?null:<Content></Content> 
        }
       
       
       </div>
    </div>
}

export default Yash

const Content=()=>{
    const col=useColorModeValue("#280659","#abb4d1")
    const col2=useColorModeValue("#660F56","#d8b8c1")
   return  <motion.div className="body"  initial={{ y: "40px",opacity:0 }} transition={{ duration: 0.5,delay:0.5 }}
   animate={{ y: "0px",opacity:1 }}>
       Meet Yash Kamal, a 4th-year student and the former Vice president of the ISE club. You would often find him surrounded by a bunch of juniors and friends giving out great advice in the halls of the ISE department. He is an embodiment of confidence and radiates joy and kindness in any room he enters. Coming from a commerce background, he was driven to try a unique field and his passion for math led him to become an engineer. And BMSCE? It was a fortunate stroke of serendipity. He loves exploring new places, trying out different hobbies and learning something new every day.

<br/>
<br/>

<br/>

<br/>


<div style={{color:col}}>
    <div className="subheading2 bold">Four Years In A Span</div>
    <br/>
    <p>
    Yash has been pursuing his education away from home ever since he was twelve, making the cities of Varanasi, Vijayawada and Bangalore his homes away from home.  When he was asked how he dealt with these massive transitions, he said they are his own adventures, new places, new culture and new opportunities for him to relish.
    </p>
    <br/>

    <p>
    Yash was one of the go-to seniors who gave the best advice and suggestions to the juniors on campus and off-campus and for his generosity, he became known around the campus as <span className="italic">“Yash bhaiyya”</span>. Though he says it was painful to hear it all the time, he secretly enjoyed it. When asked about the juniors he said, <span className="italic">“They (juniors) were wonderful. I always learned so many things from them and I enjoyed spending time with them.”</span>
    </p>
    <br/>
    <p>
    Yash was an active participant in Codelocked and the Vice president of the ISE student club. He developed skills like managing events, teamwork and leadership qualities by immersing himself in these clubs. He balanced both fun and academics and took all the opportunities he could to learn and grow. Study sessions with his friends, the 2 am Maggi, and binging standup comedy helped him through the pressure of exams.
    </p>
    <br/>
    <p>
    When asked about how this lockdown changed things for him, he was wistful about missing his friends, the clubs and the hostel. He shared about how this lockdown gave him a new experience and perspective and he was also happy to get to go home and spend time with his parents after a long time. 
    </p>
    <br/>
    <p>
    Yash says that he had an incredible journey going from having zero technical skills to landing an internship at LogMeIn. He advises everyone to try out all the domains at one's fingertips before ruling it out.  He believes that interests and passions differ from one person to another and it always helps to have a personal understanding before making any huge decisions. Working with seniors and batchmates at different clubs, events and projects helped him grow as a person.
    </p>
    <br/>
</div>
<div style={{color:col2}}>
    <div className="subheading2 bold">
        Fun And Falooda
    </div>
    <br/>
    <p>
    Recollecting his college and hostel days, Yash gushed about his 9 am classes, bunks and all the canteens they would go to in the breaks. He loves the sandwiches in the campus’s Kaapi Kuteera and roti curry in the popular cosy restaurant, Utsav, right behind the college. Being an hosteler,MH canteen was his favourite hangout spot and he insisted that everyone should get a taste of all the canteens on the campus when they get a chance to.
    </p>
    <br/>
    <p>
    When asked about his favourite memories at bmsce he became nostalgic about his days, celebrating friends' birthdays, late-night shenanigans, watching sports with his friends on the hostel TV, the Food Fiesta, playing badminton and table tennis. He also loves taking strolls around the campus and ventures out on his bike to explore the corners of Bangalore.
    </p>
    <br/>
    <p>
    <span className="italic">"I think it was all the things we did every day that became the best memories of my college life. Managing events, getting to know and be known by the teachers and exploring the new city with my new buddies. It was exciting to be in the first year and be adored and encouraged by our amazing teachers. We'd make study groups and pull an all-nighter and take a stroll through the campus or make Maggi and joke around to keep each other up. When you find your people and everything, even something as terrifying as internals becomes fun. I think that is the beauty of life at BMSCE. You find extraordinary things in the most unexpected ways and everything mundane becomes eccentric."</span> he said.
    </p>
    <br/>
</div>
<div className="subheading2 bold">The Legacy Continues</div>
<br/>
<p>
<span className="italic">“BMSCE has made me stronger,”</span> he says. <span className="italic">" It taught me how to get through difficult times and has helped me become a confident person. BMSCE taught me patience and helped me come out of my shell and become more social and friendly. It has made me the person I am today and gave me friends that are family and I'll always be proud of it”</span>.
</p>
<br/>
<p>
Opportunity knocks on your door every day at BMSCE and the best thing he believes you could do is grab them all and try to make the best out of it. <span className="italic">"Seize the opportunity, jump through hoops and give it your best shot and what comes next will change a lot of things for you"</span> he says. He urges juniors to be humble at their best and have hope when things aren't going in their way. BMSCE is a cradle of experience, knowledge and diversity. <span className="italic">"Don't hesitate, Live your life, learn and make the best memory out of here."</span> 

</p>

    </motion.div>
}