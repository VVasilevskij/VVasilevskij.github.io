import React from 'react';
import Avatar from './Avatar';
import avatarImage from './img/avatar.png'

const Money = (props) => {
    return (
        <div className='money'>
            <Avatar 
            avatarImage={avatarImage}
            nick={'Nick'}
            score={props.Score_bot}
            ></Avatar>
            <div >
                <span className='money_title'>Balance : {props.Money} $</span>
                <span className='money_title'>Bet : {props.Input} $</span>
            </div>
        </div>
    );
};

export default Money;