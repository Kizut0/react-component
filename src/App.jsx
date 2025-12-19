import './App.css'
import Greetings from './components/Greetings'
import User from './components/User'
function App() {
  return (
    <div className="card">
      <Greetings />
      <User name="Aung Myat Oo Gyaw" />
    </div>
  )
}
export default App 