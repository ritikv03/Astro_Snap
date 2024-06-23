import Hero from './components/Hero'
import './index.css'

function App() {
  return (
    <div className='h-full w-full'>
      <div className='flex flex-col h-[100vh] gap-20'>
        <Hero/>
      </div>
    </div>
  )
}

export default App
