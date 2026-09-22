import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  CartProvider from './context/CartContext.jsx'
import WishtListProvider from './context/WishtListContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <WishtListProvider>
      <App />
      </WishtListProvider>
    </CartProvider>
  </StrictMode>,
)
