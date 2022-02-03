import React from 'react'
import { AffairType } from './HW2'
import glStyle from './../../../src/p1-main/m1-ui/u1-app/App.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }    // need to fix

    return (
        <div>
            {props.affair.name} {props.affair.priority}
            <button onClick={deleteCallback} className = {glStyle.button_x}>X</button>
        </div>
    )
}

export default Affair
