import { Outlet } from "react-router-dom";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreUser } from "./store/userSlice";

// components
import NavbarComponent from "./components/NavbarComponent";

// baseURL
axios.defaults.baseURL = 'https://dummyjson.com';

// token interceptor
axios.interceptors.request.use((config) => {
  if(localStorage.hasOwnProperty('elToken')){
    config.headers.authorization = localStorage.getItem('elToken');
  }

  return config;
})


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(restoreUser(JSON.parse(localStorage.getItem('elUser'))))
  }, [])

  return (
    <div className="">
      <NavbarComponent />
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
