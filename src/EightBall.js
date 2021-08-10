import React, { useState } from "react";
import { getRandom } from "./random";
import "./EightBall.css";

/** Eightball => generates and shows a random answer on each click.
 * 
 *  Props:
 *      answers: [ { msg, color} ... ]
 * 
 *  - msg to display
 *  - color is used for background color
 * 
 *  App -> Eightball
 */
function EightBall(props) {
    const [color, setColor] = useState("black");
    const [message, setMessage] = useState("Think of a Question");
    // one piece of state (answer) object with key of color and message
    // update one piece of state based on new color and new message
    // access using answer.color, answer.message
    const reset = () => {
        setColor("black")
        setMessage("Think of a Question")
    }

    function handleClick() {
        const idx = getRandom(props.answers);
        setColor(props.answers[idx].color);
        setMessage(props.answers[idx].msg);
    }

    return (
        <div className="Eightball">
            <div className="EightBall-ball" style={{backgroundColor: color}} onClick={handleClick}>
                <b>{message}</b>
            </div>
            <button className="EightBall-reset" onClick={reset}>Reset!</button>
        </div>
        
        
    )
}


EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
}


export default EightBall;