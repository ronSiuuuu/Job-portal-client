import React from 'react';

import Lottie from 'lottie-react';
import ErrorLottie from '../assets/Lottie/ErrorPage.json'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-center items-center flex-col gap-2 '>
            <Lottie className='w-[400px]' animationData={ErrorLottie} loop ={true} ></Lottie>
            <p>The page you've been searching is not found</p>
            <Link to={'/'}>
                <button className='btn btn-info'>Back to</button>
            </Link>
            
        </div>
    );
};

export default ErrorPage;