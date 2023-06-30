import './App.scss'
import { useState } from 'react'
import Card from './components/Card'
import Thanks from './components/Thanks'

const App = () => {
  const [rate, setRate] = useState(null)
  const [submit, setSubmit] = useState(false)

  const handleSubmit = () => {
    setSubmit(true)
  }

  const handleRate = (id) => {
    setRate(id)
  }

  return (
    <>
      <div className={submit ? 'card-container hide' : 'card-container'}>
        <Card
        handleRate={handleRate}
        rate={rate}
        handleSubmit={handleSubmit}
    
        />
      </div>
      <div className={submit ? 'thanks-container' : 'thanks-container hide'}>
        <Thanks 
        rate={rate}
        />
      </div>
    </>
  )
}

export default App
