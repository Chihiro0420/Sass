import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFruits } from '../actions'

function App() {
  const fruits = useSelector(state => state.fruits)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  return (
    <>
      <h1>WELCOME TO SAAS!!!!</h1>
      <ul className="list">
        <li className="list-item">One</li>
        <li className="list-item">Two</li>
        <li className="list-item">Three</li>
        <li className="list-item">Four</li>
        <li className="list-item">Five</li>
      </ul>

      <a href="/" className="banana">Heyyy!😎</a>
    </>
  )
}

export default App
