import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux'
import Store from './store/Store'

// Components
import Header from './components/header/Header'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* All elements can use store */}
      <Provider store={Store}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </div>
  )
}

export default App
