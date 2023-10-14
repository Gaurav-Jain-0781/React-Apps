import React, { useState } from 'react'

const SingleColor = ({rgb, weight, type, hexColor }) => {
    const [alert, setAlert] = useState(false)
    const background = rgb.join(',');
    const hexValue = `#${hexColor.toUpperCase()}`

    const changeAlert = () => {
        setAlert(true)
        setTimeout(()=> {
            setAlert(false)
        }, 2000)
        navigator.clipboard.writeText(hexValue);
    }

    return (
        <div onClick={changeAlert} className={`${(type === 'shade') ? 'color-light' : null} color`} style={{backgroundColor : `rgb(${background})`}}>
        <p className='percent-value'>{weight} %</p>
        <p className='color-value'>{hexValue}</p>
        {(alert) ? <p className="alert">Copied to Clipboard</p> : null}
        </div>
    ) 
}

export default SingleColor
