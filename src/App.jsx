import { Routes, Route } from 'react-router-dom'
import Layout from './layout.jsx'  
import Home from './pages/Home'
import Cart from './pages/Cart.jsx'
import './index.css'
import PrivacyPolicy from './pages/Privacy.jsx'
import TermsConditions from './pages/Terms.jsx'
import RefundPolicy from './pages/Refund.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsConditions />} />
                                <Route path="refund" element={<RefundPolicy />} />


        <Route path="*" element={
          <div className="text-center py-20">
            <h1 className="text-6xl font-bold text-gray-400">404</h1>
            <p className="text-xl text-gray-500">Page Not Found</p>
          </div>
        } />
      </Route>
    </Routes>
  )
}

export default App
