import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from 'Redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
      <App />
      <Toaster/>
    </BrowserRouter>
    </Provider>

)
