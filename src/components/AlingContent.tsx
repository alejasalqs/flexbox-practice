import { useState } from 'react'

export default function AlingContent() {
  const [cssClass, setCssClass] = useState('items-start')

  return (
    <div>
        <div className="buttons-section">
            <button className='btn-pill' onClick={() => setCssClass('items-start')}>flex-start</button>
            <button onClick={() => setCssClass('items-end')}>flex-end</button>
            <button onClick={() => setCssClass('items-center')}>center</button>
            {/* <button onClick={() => setCssClass('content-between')}>space between</button>
            <button onClick={() => setCssClass('content-around')}>space around</button>
            <button onClick={() => setCssClass('content-evenly')}>space evenly</button> */}
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
