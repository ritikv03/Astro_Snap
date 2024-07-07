import Index from './Index'
import './index.css'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route index element={<Index/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
