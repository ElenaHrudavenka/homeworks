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
        <div className={s.message_box_grid}>
            <div className={s.img_block}>
                <img className={s.img} src={props.avatar}/>
            </div>
            <div className={s.message_name}>
                <h3>{props.name}</h3>
            </div>
            <div className={s.message_text}>
                <p>{props.message}</p>
            </div>

            <div className={s.message_time}>
                <p>{props.time}</p>
            </div>
            <div className={s.triangle}></div>
            <div className={s.circle}></div>
        </div>
    )
}

export default Message
