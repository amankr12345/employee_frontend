import {Routes,Route} from 'react-router-dom'
import HomePage from "./HomePage";
import AdminPage from "./component/Admin/AdminPage";
import UserPage from "./component/userd/userPage";
import EmployeeDetail from './component/Admin/employeesDetail';
import UpdateEmployee from './component/Admin/updateemployee';
import UserDetail from './component/userd/userDetail';
function App() {
  return (
    <div>
      
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Admin' element={<AdminPage/>}/>
      <Route path='/User' element={<UserPage/>}/>
      <Route path='/employee' element={<EmployeeDetail/>}/>
      <Route path='/update/:id' element={<UpdateEmployee/>}/>
      <Route path='/details/' element={<UserDetail/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
