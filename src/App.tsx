
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router/AppRoutes'

function App() {

  return (
    <>
      <div>
      <h1>CHALLENGERS</h1>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
