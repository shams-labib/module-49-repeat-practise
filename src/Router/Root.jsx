import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
  import { ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <div className='flex flex-col flex-1 '>
            <Navber></Navber>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

            <ToastContainer
            
            position='top-center'

            ></ToastContainer>
        </div>
    );
};

export default Root;