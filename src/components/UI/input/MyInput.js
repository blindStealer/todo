import React from 'react'
import s from './MyInput.module.css'

const MyInput = ({ value, onChange, ...props }) => {

    return (
        <input type="text"
            {...props}
            className={s.myInput}
            value={value}
            onChange={onChange}
        />
    )
}

export default MyInput