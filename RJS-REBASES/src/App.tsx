/* Global Imports */
import { BrowserRouter, Route, Routes, Link } from 'react-router';

/* Application Level Imports */
import * as UI from '@/components';
import * as Views from '@/views';
import Notification from './containers/Notification';


function App() {

  return (
    <BrowserRouter>
      <UI.Header>Application</UI.Header>
      <Notification/>
      <br />

      <>
        <Link to="/">Home</Link> |
        <Link to="/products">Products</Link> |
        <Link to="/flights">Flights</Link> |
        <Link to="/users">Users</Link> |
      </>

      <Routes>
        <Route element={<UI.Layout />}>
          <Route path="/" element={<Views.Home />} />
          <Route path="/products" element={<Views.Products />} />
          <Route path="/flights" element={<Views.Flights />} />
          <Route path="/users" element={<Views.Users />} />
        </Route>
      </Routes>
      <UI.Footer />
    </BrowserRouter>
  )
}

export default App
