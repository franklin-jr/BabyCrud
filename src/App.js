import React, { useEffect } from 'react';
import Routes from './routes'
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from '../src/store/actions/alert_actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from 'semantic-ui-react';
//import { history } from './routes/history'; 


function App() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

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
