import React, { useEffect } from 'react';
import Routes from './routes'
import {  useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const alert = useSelector(state => state.alert);
  

  const notify = () => {
    if(alert.type === 'error')
      toast.error(alert.message);
    else if (alert.type === 'success')
      toast.success(alert.message);
  }
  useEffect(() => {
     if(alert.message)
        notify()
  }, [alert]);

  return (
    <>
        <Routes/>
       <ToastContainer />
    </>
   
  );
}

export default App;
