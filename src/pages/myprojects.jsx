import React, { Component } from 'react';

import proj1 from '../images/proj1.png'
import Feedback from '../compo/feedback';
import othello from '../images/othello.png'
import maze from '../images/maze.png'
export default class Myprojects extends Component {
    state = {}
    render() { 
        return (<div><div className= 'banner'> 
        <h1>myprojects</h1> </div>
        <div className='proj1'>
            <h2> Tactical Chess Project</h2>
            <h5> April 2022 -May 2022</h5>
            <div className='proj1detail'>
           

            
            <a href="https://jmtuck.itch.io/tactical-chess"><img src={proj1} className = "imgclass"  alt="oops" /></a>
            <div className='description'>
                <p>
                    This is my first video game Project ever. I got to work with a team of 8 people with one lead, six programmers and one artist to dedicate on this game based on unity engine.
                    Even tho It's not quite finished because our initial goal was to give each base pieces some special gimmicks/ abilities, we still ended up managing to finish a functioning vanilla chess game 
                </p>



            </div>
            
            </div>

        </div>
        <div className='feedbackbox' >
        
        <Feedback/>
        </div>
        <div className='proj1' style ={{position:"relative",top:"343.6px"}}>
            <h2> Othello AI</h2>
            <h6> Feburary 2022(source code node not avaible because it's a class project)</h6>
            <div className='proj1detail'>
           

            
            <a href="https://jmtuck.itch.io/tactical-chess"><img src={othello} className = "imgclass"  alt="oops" /></a>
            <div className='description'>
                <p>
                    In my ics46 algorithms and data structure class that I took last winter quarter, I was able to code an AI to play this 
                    game called othello. The Ai was able to evaulate some game states five steps ahead of time. Using the concept of alpha-beta pruning, I 
                    was able to reduce the number of nodes to go through in the decision tree, thus reducing the time it takes to make each move.
                </p>



            </div>
            
            </div>

        </div>
        <div className='proj1' style ={{position:"relative",top:"343.6px"}}>
            <h2> Mazer generator/solver</h2>
            <h6> Feburary 2022(source code node not avaible because it's a class project)</h6>
            <div className='proj1detail'>
           

            
            <a href="https://jmtuck.itch.io/tactical-chess"><img src={maze} className = "imgclass"  alt="oops" /></a>
            <div className='description'>
                <p>
                    In my ics46 algorithms and data structure class that I took last winter quarter, I was able to code a maze generator and a maze solver.
                    The maze generator is based on depth first search  which generates a maze that gurantees a solution. The solver uses breath-first search.
                    </p>



            </div>
            
            </div>

        </div>
        
        
        
        
        
        </div>);
    }
}