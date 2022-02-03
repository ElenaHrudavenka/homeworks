import React from 'react'
import Message from "./Message"
import s from './Message.module.css'
import glStyle from './../../../src/p1-main/m1-ui/u1-app/App.module.css'

const messageData = {
    // avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    avatar: 'https://99px.ru/sstorage/1/2021/06/image_10306212231014024654.gif',
    name: 'Kisseli',
    message: 'Крик души! Как же мне не хватает знания верски. Адские муки!!!',
    time: '22:00',
}

const HW1 = () => {
    return (
        <div className = {s.background}>
            <hr/>
            <h3 className={glStyle.title}>homeworks 1</h3>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
