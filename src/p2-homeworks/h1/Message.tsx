import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message_box}>
            <div>
                <img className={s.img} src={props.avatar}/>;
            </div>

            <div>
                <h3>{props.name}</h3>
                <p>{props.message}</p>
                <p>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
