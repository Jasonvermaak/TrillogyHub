import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardActions, CardMenu, Button, IconButton } from 'react-mdl';
class Career extends Component{
    render(){
        return (
            <div>
                <div header><h1>Career Services</h1></div>
                <br></br>
                <div className="career-grid">
            <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://sabe.io/classes/html/thumbnail.png) center / cover'}}>Front-End</CardTitle>
           <CardText>
               Front-End
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
           <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://www.ostraining.com/cdn/images/oscampus/courses/CSS-part-1.jpg) center / cover'}}>Back-end</CardTitle>
           <CardText>
               Back-end
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
           </div>
        )
        
    }

}
export default Career;