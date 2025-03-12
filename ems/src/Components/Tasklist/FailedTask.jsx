import React from 'react';

const FailedTask = () => {
    return (
        <div className='h-full flex-shrink-0 w-[300px] bg-blue-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>
            High
          </h3>
          <h4 className='text-sm'>20 feb 2024</h4>
       </div>
       <h2 className='mt-5 text-2xl font-semibold'>Make Youtube Video</h2>
       <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, minima eum. Mollitia dolorum inventore harum?</p>
       <div className='mt-4'>
          <button className='w-full bg-red-500 rounded'>Failed</button>
       </div>
       </div>
    );
};
export default FailedTask;