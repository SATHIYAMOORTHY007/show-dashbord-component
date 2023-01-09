import './App.css'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import './sb-admin-2.min.css'
import Dashboard from './Dashboard'
import UserList from './UserList'
import Login from './Login'
import Portal from './Portal'
import CreateUser from './CreateUser'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserView from './UserView'
import UserEdit from './UserEdit'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/portal" element={<Portal />}>
          <Route path="dashbord" element={<Dashboard />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="createuser" element={<CreateUser />} />
          <Route path="user-view/:id" element={<UserView />} />
          <Route path="useredit/:id" element={<UserEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
