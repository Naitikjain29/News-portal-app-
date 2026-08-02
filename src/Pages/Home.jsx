import React from 'react'
import { getTopHeadLines } from '../services/apiService';

const Home = () => {
  return (
    getTopHeadLines(),
    <div className='mx-auto py-10'>
        <h1 className='text-4xl font-bold text-center mb-6'>WelCome To News Portal</h1>
        <p className='text-center text-gray-600'>Read The latest news from around the world.</p>
    </div>
  )
}

export default Home;