import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class MyPage extends Component{
    render(){
        return (
            <div style = {{width:'100%',margin : 'auto'}}>
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
                        </Cell> 
                    </Grid>
            </div>
            
            
        )
    }

}


export default MyPage;