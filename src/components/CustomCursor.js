import React from 'react'
import './CustomCursor.css'
const CustomCursor = () => {
    const [cursorX, setCursorX] = React.useState()
    const [cursorY, setCursorY] = React.useState()

    React.useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            setCursorX(e.pageX)
            setCursorY(e.pageY)
        })
    }, [])
  return (
    <div className='cursor' 
    style={{
        left: `${cursorX}px`,
        top: `${cursorY}px`
    }}
    >
    </div>
  )
}

export default CustomCursor