import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, CardTitle, CardActions, CardMenu, Button, IconButton } from 'react-mdl';
class MyPage extends Component{
    render(){
        return (
            <div style = {{width:'100%', height:'100%', margin : 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                     <img
                        src="https://i0.wp.com/www.sunitagirl.com/wp-content/uploads/2017/05/badge.png?resize=300%2C300"
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className ="banner-text">
                            <h1>UCF Coding Bootcamp Guide to Staying on Track</h1>

                        <hr/>

                        <p> HTML/CSS | JavaScript | React | MongoDB | NodeJS | Express | PHP</p>

                        <div className="social-links">

                            {/* Linkedin */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>

                            {/* Free code Bootcamp*/}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp"  aria-hidden="true" />
                            </a>

                            {/* Facebook */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square"  aria-hidden="true" />
                            </a>

                            {/* youtube */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square"  aria-hidden="true" />
                            </a>
                        </div>
                        </div>
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                        <div className="myStuff-grid">
            {/* HTML */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://sabe.io/classes/html/thumbnail.png) center / cover'}}>HTML</CardTitle>
           <CardText>
               Testing your skils with HTML
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* CSS */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.ostraining.com/cdn/images/oscampus/courses/CSS-part-1.jpg) center / cover'}}>CSS</CardTitle>
           <CardText>
               Testing your skils with CSS
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* JavaScript */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/javascript.png?1512678119) center / cover'}}>JavaScript</CardTitle>
           <CardText>
               Testing your skils with JavaScript
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* JQUERY */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://sg.fiverrcdn.com/photos/104964294/original/f044e967955be66ba56d83c5d575def8a87bce19.png?1512052845) center / cover'}}>JQUERY</CardTitle>
           <CardText>
               Testing your skils with JQUERY
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           </div>
            {/* HTML */}
            <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://sabe.io/classes/html/thumbnail.png) center / cover'}}>HTML</CardTitle>
           <CardText>
               Testing your skils with HTML
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* CSS */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.ostraining.com/cdn/images/oscampus/courses/CSS-part-1.jpg) center / cover'}}>CSS</CardTitle>
           <CardText>
               Testing your skils with CSS
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* JavaScript */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/javascript.png?1512678119) center / cover'}}>JavaScript</CardTitle>
           <CardText>
               Testing your skils with JavaScript
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* JQUERY */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://sg.fiverrcdn.com/photos/104964294/original/f044e967955be66ba56d83c5d575def8a87bce19.png?1512052845) center / cover'}}>JQUERY</CardTitle>
           <CardText>
               Testing your skils with JQUERY
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           
                        </Cell> 
                    </Grid>

            </div>
            
            
        )
    }

}


export default MyPage;