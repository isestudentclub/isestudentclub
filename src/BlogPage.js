import {  useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion"
import { Avatar,  useColorModeValue } from '@chakra-ui/react';

const BlogPage=()=>{
  
    const title="Q & A with Muskan Agarwal"
    
    const [headingType,setHeadingType]=useState(true);
    return <div className="container" style={{minHeight:"95vh"}}>
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
        <p className="body lighttext">   - <a>Riya</a>, <a target="_blank" rel="noreferrer"  href="https://instagram.com/_manvith_dalli_?utm_medium=copy_link">Manvith</a></p>
        <br/>
        {headingType?null:<motion.div initial={{ y: "40px",opacity:0 }} transition={{ duration: 0.5 }}
        animate={{ y: "0px",opacity:1 }} className="row align-items-center">
        <div className="col-auto">
            <Avatar size="xl" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
        </div>
        <div className="col medium">
               <p className="body lighttext">ISE 2021</p>
               <p className="body lighttext ">President ISE SC 20-21</p>
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
    const col=useColorModeValue("#280659","#abb4d1")
    const col2=useColorModeValue("#660F56","#d8b8c1")
   return  <motion.div className="body"  initial={{ y: "40px",opacity:0 }} transition={{ duration: 0.5,delay:0.5 }}
   animate={{ y: "0px",opacity:1 }}>
    Muskan Agarwal, a 4th year ISE student ,and the previous president of the ISE Student Club is an exceptionally talented content writer and an avid coder. Not only has she been a part of many college clubs like Inksanity, Entrepreneurship Development Cell and Rotaract, but has also worked independently as a content writer for many startups, making her a true Jack of all trades. Muskan has maintained the ideal balance of college life by proactively participating in all  college events along with keeping up a good GPA.
<br/>
<br/>

<br/>

<br/>
<div className="row align-items-center" style={{color:col2}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/riya.jpg" />
    </div>
    <div className="col">
    What made you choose BMSCE?
    </div>
</div>

<br/>

<div className="row align-items-center" style={{color:col2}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
    </div>
    <div className="col">
    I was passionate about computers and didn’t want to choose a branch that wasn’t associated with it.
Quora further glorified BMSCE’s fests, college culture and the student-friendly environment. So BMSCE was a package of things that I envisioned college to be like ,minus a huge campus (laughs).
    </div>
</div>
<br/>
<br/>
<br/>
 {/* {/* --------------------------------- */}

<div className="row align-items-center" style={{color:col}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/manvith.jpg" />
    </div>
    <div className="col">
    What was your mindset walking into the campus as a first year, your expectations and fears and how did it turn out.
    </div>
</div>

<br/>

<div className="row align-items-center" style={{color:col}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
    </div>
    <div className="col">
    I was stepping into a whole new chapter of my life. Thinking back on it, I was slightly scared, moderately content and also way too excited to see what these 4 years had in store for me. I was thrilled to meet new people, experience new things and grow as an individual. Although the “nerd” inside me was already worried about getting good grades and getting placed on time. Apart from that, I was pretty nervous about moving away from home and my parents who I have stayed with for my whole life. 
But all the fear was for naught as I found a new home away from home. I never felt alienated, there were so many friends to talk to and seniors that would guide you through any given situation. I ended up making some of my best memories in the hostel.
    </div>
</div>
<br/>
<br/>
<br/>
{/* --------------------------------- */}


<div className="row align-items-center" style={{color:col2}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/riya.jpg" />
    </div>
    <div className="col">
    Clubs in a college like BMSCE which is a hub of talent are very unique and provide you with enormous opportunities. A Lot of 1st years get overwhelmed and have the fear of missing out when they don’t get in. What’s your take on that or any experiences related to the same?    </div>
</div>

<br/>

<div className="row align-items-center" style={{color:col2}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
    </div>
    <div className="col">
    There’s no denying that our college is a hub of great talent but I’ve realised that the clubs don’t define you as an individual. They sure do help you grow, show you the right path but it’s you and your willingness to learn at the end of the day. There’s no reason for you to feel dejected if you don’t make the cut, it just means there’s great potential and drive for you to learn and grow. I auditioned for almost all of the clubs in my 1st year, I got into a lot of the them and got rejected from a some too but through the years I have realised that only a few of those clubs are meant for you. Getting into a club is more of an indication of you being the right fit for the club than it is of how good you are at something. The important part is how you react to your failure than how you celebrate your success.
    </div>
</div>
<br/>
<br/>
<br/>
{/* --------------------------------- */}

<div className="row align-items-center" style={{color:col}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/manvith.jpg" />
    </div>
    <div className="col">
    When and how do you decide or know what to do after Btech?
             </div>
</div>

<br/>

<div className="row align-items-center" style={{color:col}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
    </div>
    <div className="col">
    Firstly, there’s this taboo that coding is the most important thing that would help you get a job. In fact, there are a million of other subjects and topics that people should explore and find what’s perfect for them. Also, there’s no perfect time for people to figure what they want to do. A few people have figured out their passions and a few are still thinking what to do. So one should maintain their own pace and not force decisions , go with the flow and you will definitely find out what you need to do.
    </div>
</div>
<br/>

<div className="row align-items-center" style={{color:col2}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/manvith.jpg" />
    </div>
    <div className="col">
    So being confused is actually going to help?
             </div>
</div>

<br/>

<div className="row align-items-center" style={{color:col2}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
    </div>
    <div className="col">
    Yes. Personally I never envisioned me doing something technical. I was into content writing and I wasn’t much into coding nor did I have any background in coding. But somehow, in my 2nd year I got into the habit of coding and now I’m working as a proper software developer.
    </div>
</div>
<br/>
<br/>
<br/>
{/* --------------------------------- */}

{/* --------------------------------- */}
<div className="row align-items-center" style={{color:col}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/riya.jpg" />
    </div>
    <div className="col">
    Tell us about your experience with placements and it’s pressures.
    </div>
</div>

<br/>

<div className="row align-items-center" style={{color:col}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
    </div>
    <div className="col">
    I’ve given a couple of interviews, some of which have been offline and some online. I personally prefer them offline because it helps you understand how the person on the other side is responding to you and your answers. 
Another major factor adding up to the pressure apart from the process could be seeing your friends getting placed before you. Also, sometimes you don’t make it into your dream company which might discourage you.
 Summing it up, a lot of choices are to be made during this process- which companies to sit for, whether you like what they are offering and if you are the right fit for them.
It is a constant battle between your mind and capabilities. You need to know where you stand and duly set your expectations. Having very high expectations of yourself can also be very dangerous. Having said that, I do not condone not aiming higher, but setting your goals in line with your reality is very important.
    </div>
</div>
<br/>
<div className="row align-items-center" style={{color:col}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/riya.jpg" />
    </div>
    <div className="col" style={{color:col}}>
    You must have seen your peers divagate to higher studies or perhaps maybe even go on the path to become pioneers or entrepreneurs instead of choosing the placement route. What is your take on it and how do you choose what is the right track for you?
    </div>
</div>

<br/>

<div className="row align-items-center" style={{color:col}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
    </div>
    <div className="col">
    The key is always to never give up or stop exploring until you find your own proclivity. It is very essential to understand whether you like something or not. But then again, there can be  two aspects to not liking something- you don’t like it because you don’t know it or you don’t like it after knowing it and the latter would make this decision a lot easier for you. Even after you’ve found your inclination, keep your options open and try out things that are out of your comfort zone.
    </div>
</div>
<br/>
<br/>
<br/>
{/* --------------------------------- */}
 
<div className="row align-items-center" style={{color:col2}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/manvith.jpg" />
    </div>
    <div className="col">
    We’ve all heard about this unseen-Event of the past called UTSAV. How important do you think it is for the students of Bmsce and give us a detail of your experience with UTSAV?
    </div>
</div>

<br/>

<div className="row align-items-center" style={{color:col2}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
    </div>
    <div className="col">
    Utsav as it says is a festival for the students of BMSCE. It gives us a break from the monotonous cycle of assignments , AATs and assessments. My first UTSAV had a wonderful and nostalgic theme, The diary of a 90s kid. The college was decorated beautifully with the trees being filled with mild lighting .The theme was incorporated brilliantly . From Nokia 3310 to Mario, from DJing and dancing to the tracks of the 90s to Participating in all the events that had a nostalgic 90s touch.
    </div>
</div>
<br/>
<br/>
<br/>
{/* --------------------------------- */}
<div className="row align-items-center" style={{color:col}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/manvith.jpg" />
    </div>
    <div className="col">
    What’s the best and grandest event you have experienced in UTSAV.
    </div>
</div>

<br/>

<div className="row align-items-center" style={{color:col}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
    </div>
    <div className="col">
    It would be a fashion show. It was the first time I had seen one on such a huge scale. The excitement and the grandeur for it is something I will never understand.
    </div>
</div>
<br/>
<br/>
<br/>
{/* --------------------------------- */}

<div className="row align-items-center" style={{color:col2}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/manvith.jpg" />
    </div>
    <div className="col">
    How did UTSAV help you grow as an individual?
    </div>
</div>

<br/>

<div className="row align-items-center" style={{color:col2}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
    </div>
    <div className="col">
    I never understood the hype UTSAV was given or why it was . But once I had witnessed it , it was a no-brainer why QUORA glorified it. UTSAV helped the introverted me come out of a social bubble. As I was already a part of some clubs, UTSAV gave me the opportunity to be a part of the organising committees and I was also involved for getting sponsors . This gave me an opportunity to meet and talk to new people . Four years down the lane, I’m a complete contrast to the introverted person I was in my 1st year.
    </div>
</div>
<br/>
<br/>
<br/>
{/* --------------------------------- */}
<div className="row align-items-center" style={{color:col}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/riya.jpg" />
    </div>
    <div className="col">
    Another very common concern among the students is regarding the internships and how to get one that is parallel to your set of interests and skills. What was your experience with it.
    </div>
</div>

<br/>

<div className="row align-items-center" style={{color:col}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
    </div>
    <div className="col">
    Our college actually provides us with abundant internship opportunities which are not limited to the technical domain. The first internship that i bagged was in my 1st year, working as a content writer for a start-up, which I got through a club that i was a part of. After starting with competitive coding, I did a technical internship which started with me documenting and then eventually learning and moving on to writing code. The key here is to be patient and open to any new experiences that come your way. Internships provide you with a great deal of exposure to see what’s out there and motivating you to push hard through this competitive world.
    </div>
</div>
<br/>
<br/>
<br/>
{/* --------------------------------- */}
<div className="row align-items-center" style={{color:col2}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/riya.jpg" />
    </div>
    <div className="col">
    Other than academics what do you think 1st years and 2nd years must concentrate or work upon?
    </div>
</div>

<br/>

<div className="row align-items-center" style={{color:col2}}>
    <div className="col-auto">
    <Avatar size="sm" name="Segun Adebayo" src="/assets/team/muskan.jpeg" />
    </div>
    <div className="col">
    Talking to people and working with different people is definitely important. More than academics , it is what helps you grow as an individual. Being a part of a few clubs gave me exposure. I realised how important it was to talk to new people , it helps you see topics or things in a different dimension.
More importantly, have fun with your friends, chill in your favourite spots around college , binge watch your favourite shows and read all your favourite books , the college library has an amazing fiction and philosophy section, because these 4 years are going to go by fast. On a serious note, you should try everything that you are afraid of or you want to try.If you are scared of speaking in crowds, try speaking at open mics in college. If you are afraid of heights then join the mountaineering club. If you want to learn to code then join the ISE student club .The college gives you enough opportunities, so do everything and anything you always wanted to. More importantly , don’t let other people’s opinions affect you.In a nutshell, just create new memories, try out new things, get out of your comfort zone, explore yourself and just have fun.

    </div>
</div>
<br/>
<br/>
<br/>
{/* --------------------------------- */}


    </motion.div>
}