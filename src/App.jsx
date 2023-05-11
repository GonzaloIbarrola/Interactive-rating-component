import { useEffect, useState } from 'react'
import './App.css'
import Icon from './assets/components/Icon'
import Rating from './assets/components/Rating'
import Text from './assets/components/Text'
import ThankYou from './assets/components/ThankYou'

function App() {
  const [number, setNumber] = useState(Array)
  const [value, setValue] = useState(Number)
  const [show, setShow] = useState(true)

  useEffect(() => {
    setNumber([1,2,3,4,5])
  }, [])
  

  return (
    <main>
    { show ? 
    <div>
      <Icon />
      <Text />
      <Rating show={show} setShow={setShow} number={number} value={value} setValue={setValue} />
    </div>
        : 
        <ThankYou value={value} number={number} />
      }
      </main>
  )
}

export default App
