import { BrowserRouter, Route, Routes} from 'react-router'
import './App.css'
import Login from './components/login/Login'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'



function App() {

  return (
    <>
      <div>
       <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
       </BrowserRouter>
      </div>
    </>
  )
}

export default App
