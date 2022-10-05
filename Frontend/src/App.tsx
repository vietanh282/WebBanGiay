import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { listCategory } from './api/Categories';
import { listUser } from './api/User';
import AdminLayout from './layouts/AdminLayout';
import WebLayout from './layouts/webLayout';
import { ICategori } from './models/Categories';
import { IUsers } from './models/User';
import ErrorsWeb from './pages/404/errorsWeb';
import Categories from './pages/admin/Categories/Categories';
import CategoriesAdd from './pages/admin/Categories/CategoriesAdd';
import CategoriesEdit from './pages/admin/Categories/CategoriesEdit';
import Dashbroad from './pages/admin/dashbroad';
import Users from './pages/admin/User/User';
import UserAdd from './pages/admin/User/UserAdd';
import UserEdit from './pages/admin/User/UserEdit';

import Cart from './pages/Website/Cart/Cart';
import Pay from './pages/Website/Pay/Pay';

function App() {
  const [user, setUser] = useState<IUsers[]>([])
  const [categories, setCategories] = useState<ICategori[]>([])

  useEffect(() => {
    const getUser = async () => {
      const { data } = await listUser();
      setUser(data)
    }
    getUser();
  }, []);
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategories(data)
    }
    getCategories();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<WebLayout />} >
          <Route path='cart' element={<Cart />} />
          <Route path='pay' element={<Pay />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashbroad />} />
          <Route path="categories">
            <Route index element={<Categories categories={categories} />} />
            <Route path="add" element={<CategoriesAdd />} />
            <Route path=":id/edit" element={<CategoriesEdit />} />
          </Route>
          <Route path="user">
            <Route index element={<Users user={user} />} />
            <Route path="add" element={<UserAdd />} />
            <Route path=":id/edit" element={<UserEdit />} />
          </Route>
          <Route path="*" element={<ErrorsWeb />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
