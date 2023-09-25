import { useState } from "react"

export default function FlexDirection() {
  const [cssClass, setCssClass] = useState('flex-row')

  return (
    <div>
        <div className="buttons-section">
            <button onClick={() => setCssClass('flex-row')}>row</button>
            <button onClick={() => setCssClass('flex-row-reverse')}>row-reverse</button>
            <button onClick={() => setCssClass('flex-column')}>column</button>
            <button onClick={() => setCssClass('flex-column-reverse')}>column-reverse</button>
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
