// import { useEffect, useState } from "react";

// const App = () => {
//   const [data, setData] = useState(null)
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState('')

//   const onClick = () => setToggle(prev => !prev)

//   useEffect(() => {
//     setTimeout(() => {
//       setData({})
//     }, 100)
//   }, [])

//   return (
//     <div>
//       <h1 data-testid="value-elem">{value}</h1>
//       {toggle && <div data-testid="toggle-elem">toggle</div>}
//       {data && <div style={{ color: 'red' }}>data</div>}
//       <h1>Hello world!</h1>
//       <button data-testid="toggle-btn" onClick={onClick}>Click me</button>
//       <input onChange={e => setValue(e.target.value)} type="text" placeholder="input value..." />
//     </div>
//   )
// }

// export default App;

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage'
import UserDetailPage from './pages/UserDetailPage'
import AppRouter from './router/AppRouter'
import User from './users/User'

const App = () => {
  return (
    <div>
      <div>
        <NavBar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App