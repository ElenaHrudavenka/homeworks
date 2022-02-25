import React from 'react'
import { AffairType } from './HW2'
import s from './Affairs.module.css'

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
        <div className={s.affairs_box_grid}>
            <span className={s.name}>{props.affair.name}</span>
            <span className={s.priority}>{props.affair.priority}</span>
            <button onClick={deleteCallback} className = {s.button_delete}>X</button>
        </div>
    )
}

export default Affair
