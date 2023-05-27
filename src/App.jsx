import { Route, Routes } from 'react-router-dom'

import { NotFoundInfo } from './components/NotFound'
import Layout from './components/ui/layout/Layout'
import Cart from './pages/Cart'
import Home from './pages/Home'
import { ROUTES } from './utils/routes'

const App = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path="*" element={<NotFoundInfo />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
