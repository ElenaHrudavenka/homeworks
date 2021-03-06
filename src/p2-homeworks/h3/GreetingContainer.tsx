import React, {useState, ChangeEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";


type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (userName: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
        if (name.trim().length >= 1) {
            addUserCallback(name)
            /*alert(`Hello ${name} !`) // need to fix*/
            withReactContent(Swal).fire({
                title: <strong>Thanks! Your vote has been counted.</strong>,
                html: <i>Hello {name} !</i>,
                icon: "success"
            })
            setName('')
            setError('')
        } else {
            setError('error')
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
