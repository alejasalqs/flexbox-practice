import { useState } from 'react';
import './App.css'
import Switch from './components/Switch';
import Navbar from './components/Navbar';

function App() {
  const [componentName, setComponentName] = useState('FlexDirection')

  return (
    <>
      <Navbar />
      <main>
        <section>
          <h1>Flexbox Practice!</h1>
          <ul>
            <li>
              <button className="btn" onClick={() => setComponentName('FlexDirection')}>Flex Direction</button>
            </li>
            <li>
              <button className='btn' onClick={() => setComponentName('JustifyContent')}>Justify Content</button>
            </li>
            <li>
              <button className='btn' onClick={() => setComponentName('AlingContent')}>Aling Items</button>
            </li>
          </ul>
        </section>
        <section>
          <Switch componentName={componentName} />
        </section>
      </main>
    </>
  )
}

export default App
