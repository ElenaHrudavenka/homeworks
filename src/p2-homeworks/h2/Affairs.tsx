import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import glStyle from './../../../src/p1-main/m1-ui/u1-app/App.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter:FilterType)=>void
    deleteAffairCallback: (_id: number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={glStyle.box}>
            {mappedAffairs}
            <button onClick={setAll} className ={glStyle.button}>All</button>
            <button onClick={setHigh} className ={glStyle.button}>High</button>
            <button onClick={setMiddle} className ={glStyle.button}>Middle</button>
            <button onClick={setLow} className ={glStyle.button}>Low</button>
        </div>
    )
}

export default Affairs
