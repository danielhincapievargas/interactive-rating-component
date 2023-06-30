import './App.scss'
import { useState } from 'react'
import Card from './components/Card'
import Thanks from './components/Thanks'

function App() {
  const [rate, setRate] = useState(false)
  const [id, setId] = useState('')

  const handleRate = (e) => {
    setId(e.target.id)
    setRate(!e.target.rate)
  }
  console.log(id);
  console.log(rate);

  return (
    <>
      <div key = {id} className='card-container'>
        <Card
        key = {id}
        id={id}
        handleRate={handleRate}
        rate={rate}
        />
      </div>
      <div className='thanks-container hide'>
        <Thanks />
      </div>
    </>
  )
}

export default App
