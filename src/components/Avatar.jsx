import React from "react";

const Avatar = (props) => {
    console.log(props)
    return (
        <div className="avatar">
                <img className="avatarImage" src={props.avatarImage}></img>
            {(props.nick && !props.score) ? (<div className="nick"><span>{props.nick}</span></div>):(<div className="nick"><span>{props.score}</span></div>)}
        </div>
    );
}

export default Avatar