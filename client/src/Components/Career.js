import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardActions, CardMenu, Button } from 'react-mdl';
class Career extends Component{
    render(){
        return (
            <div>
                <div header><h1>Career Services</h1></div>
                <br></br>
                <div className="career-grid">
            <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
             {/* Frontend*/}
           <CardTitle style={{color: '#fff', height: '400px', background: 'url(https://4qr7k2a2xza2vctux33bisalkw-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/Full-time-hiring-8.2015-09-e1440676083937.png) center / cover'}}>Front-End</CardTitle>
           <CardText>
               Front-End:
               development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript.
           </CardText>
                <CardActions border>
                <a href="https://skillcrush.com/2016/02/11/skills-to-become-a-front-end-developer/" rel="noopener noreferrer" target="_blank">
                    <Button>becoming a frontend developer</Button>
                    </a>
                    <a href="https://learntocodewith.me/web-dev/front-end-developer-skills/" rel="noopener noreferrer" target="_blank">
                    <Button> frontend developer skills</Button>
                    </a>
                    <a href="https://frontendmasters.com/books/front-end-handbook/2018/practice/interview-q.html" rel="noopener noreferrer" target="_blank">
                    <Button> Interview questions</Button>
                    </a>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           {/* Backend*/}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '370px', background: 'url(https://blog.siliconstraits.vn/wp-content/uploads/2015/07/Full-time-hiring-8.2015-10-e1440676643494.png) center / cover'}}>Back-end</CardTitle>
           <CardText>
               Back-end:
               responsible for server-side web application logic and integration of the work front-end developers do. Back-end developers are usually write the web services and APIs used by front-end developers and mobile application developers.
           </CardText>
                <CardActions border>
                    <a href="https://www.upwork.com/hiring/development/back-end-web-developer/" rel="noopener noreferrer" target="_blank">
                    <Button> Roles as a backend developer</Button>
                    </a>
                    <a href="https://www.thebalancecareers.com/the-skills-you-need-to-be-a-backend-developer-2071184" rel="noopener noreferrer" target="_blank">
                    <Button>backend developer skills</Button>
                    </a>
                    <a href="https://www.orchard.co.uk/blog/10-expert-questions-for-interviewing-a-back-end-developer-8556.aspx" rel="noopener noreferrer" target="_blank">
                    <Button> Interview questions</Button>
                    </a>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           {/* Fullstack */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '370px', background: 'url(https://decidigital.com/wp-content/uploads/2017/03/developer.jpg) center / cover'}}>Full-Stack</CardTitle>
           <CardText>
               Full-Stack:
               an engineer who can handle all the work of databases, servers, systems engineering, and clients. Depending on the project, what customers need may be a mobile stack, a Web stack, or a native application stack.           </CardText>
                <CardActions border>
                    <a href="http://techgenix.com/full-stack-developer/" rel="noopener noreferrer" target="_blank">
                    <Button> Becoming a full-stack developer</Button>
                    </a>
                    <a href="https://www.bacancytechnology.com/blog/skills-to-look-into-a-full-stack-developer" rel="noopener noreferrer" target="_blank">
                    <Button>full-stack developer skills</Button>
                    </a>
                    <a href="https://www.glassdoor.com/Interview/full-stack-developer-interview-questions-SRCH_KO0,20.htm" rel="noopener noreferrer" target="_blank">
                    <Button> Interview questions</Button>
                    </a>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           </div>
           <br></br><br></br><br></br><br></br><br></br>
           <div className="friends-img">
           </div>
           <div class="wrapper video">
           <div><a href="https://www.youtube.com/user/TechGuyWeb" rel="noopener noreferrer" target="_blank"><h2>Travesty Media</h2></a></div>
           <iframe src='https://www.youtube.com/embed/UnTQVlqmDQ0'
                    frameBorder='10'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
            />
            <div><h3>Travesty Media is great tool to use when you want to break down a subject and get a
                    different teacher's perspective on the specific component you're stuck on. </h3></div>
            </div>
           </div>
        )
        
    }

}
export default Career;