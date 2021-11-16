import React from 'react'
import Profile from './Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Welcome(props) {
    const MyDetails =  localStorage.getItem("MyDetails");
    const detail = JSON.parse(MyDetails)
    toast('welcome ! to your home page')
    var me = detail[0]
    return (
        <div>
            <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
            <Profile detail={me} />
        </div>
    )
}
