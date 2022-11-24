import React from 'react';

const ResultAlert = (props) => {
    return (
        <div>
            {props.Result ?<div className='result'>
                    <span>{props.Result}</span>
                </div>
                :null}
            {props.Scor >= 21 || props.BotStop ?
                <div onClick={props.Continue} className='continue'>
                    <span >Play now</span>
                </div>
                : null}
        </div>
    );
};

export default ResultAlert;