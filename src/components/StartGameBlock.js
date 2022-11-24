import React from 'react';
import Avatar from './Avatar';
import avatarImage from './img/avatar.png'

const StartGameBlock = (props) => {
    return (
        <React.Fragment>
            <div onClick={()=>props.Player_step(props.Counter)} className="yes">
                <span>More</span>
            </div>
            <Avatar 
            avatarImage={avatarImage}
            nick={'Nick'}
            score={props.Scor}
            ></Avatar>
            {/* <div className="player">
                <span>Player</span>
                    <br/>
                <span style={{color: props.Colors}}>{props.Scor}</span>
            </div> */}
            <div onClick={props.Pass} className="pass">
                <span >Pass</span>
            </div>
        </React.Fragment>
    );
};

export default StartGameBlock;