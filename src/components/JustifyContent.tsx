import { useState } from 'react'

export default function JustifyContent() {
  const [cssClass, setCssClass] = useState('justify-start')

  return (
    <div>
        <div className="buttons-section">
            <button onClick={() => setCssClass('justify-start')}>flex-start</button>
            <button onClick={() => setCssClass('justify-end')}>flex-end</button>
            <button onClick={() => setCssClass('justify-center')}>center</button>
            <button onClick={() => setCssClass('justify-between')}>space between</button>
            <button onClick={() => setCssClass('justify-around')}>space around</button>
            <button onClick={() => setCssClass('justify-evenly')}>space evenly</button>
        </div>
        <div className={`practice-section ${cssClass}`}>
            <div className='block red'></div>
            <div className='block blue'></div>
            <div className='block yellow'></div>
            <div className='block green'></div>
        </div>
    </div>
  )
}
