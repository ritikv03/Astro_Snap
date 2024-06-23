import Index from './Index'
import Login from './components/Login'
import Signup from './components/Signup'
import './index.css'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route index element={<Login/>} />
      <Route path='/Index' element={<Index />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/SignUp' element={<Signup />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
