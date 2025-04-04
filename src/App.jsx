import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Login from './components/login/Login'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import NewBook from './components/newBook/NewBook'
import Protected from './protected/Protected'
import { UserProvider } from './context/UserContext'
import MainLayout from './layouts/mainLayout/MainLayout'
import Books from './components/books/Books'
const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<Protected />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/libros" element={<Books />} />
              <Route path="/agregar-libro" element={<NewBook />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;