import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Login from './components/login/Login'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import NewBook from './components/newBook/NewBook'
import { UserProvider } from './context/UserContext'



function App() {

  return (
    <>
      <div>
        <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/agregar-libro" element={<NewBook />} />
          </Routes>
        </BrowserRouter>
        </UserProvider>
      </div>
    </>
  )
};

export default App
