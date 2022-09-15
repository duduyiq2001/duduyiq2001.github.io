import React, { Component } from 'react';
import GitHub from "../images/GitHub-Logo.jpg";
import insta from "../images/new_instagram_logo-1024x1024.jpg"
import handshake from "../images/new-handshake-logo.png"


export default class Social extends Component{
    state = {}
    render() { return(<div className='iconlist'>
       
        <a href="https://github.com/yiqundu?tab=repositories"> <img src={GitHub} alt = 'wdjwd'className='icons'/></a>
        
      
        <a href="https://www.instagram.com/deandunewinsta/"> <img src={insta} alt = 'wdjwd' className='icons'/></a>
        
        
        <a href="https://app.joinhandshake.com/stu/users/25972597"> <img src={handshake} alt = 'wdjwd'className='icons'/></a>
        </div>
        );

    };
}