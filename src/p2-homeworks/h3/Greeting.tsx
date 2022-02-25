import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import glStyle from './../../../src/p1-main/m1-ui/u1-app/App.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number// need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.notError // need to fix with (?:)

    return (
        <div className={glStyle.box}>
            <div>Enter your name: </div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser} className={glStyle.button}>add</button>
            <span className={s.span}>{totalUsers}</span>
            <div className={error?s.span:""}>{error&&"Field must be filled. Please, enter your name."}</div>
        </div>
    )
}

export default Greeting
