import React from 'react';

function TopLoading({ name }) {
    const stylis = {
        loadingStyles: 'inline-block min-h-[2em] w-full flex-auto cursor-wait animate-[pulse_1s_ease-in-out_infinite] bg-[rgba(133,214,251,0.3)]',
        loadingStyles2: 'inline-block min-h-[2em] w-full flex-auto cursor-wait animate-[pulse_1s_ease-in-out_infinite] bg-[rgba(133,214,251,0.3)] mt-[.79rem]',
    }
    
    return (
        <div className='bg-white rounded-lg shadow-md px-5 py-5'>
            <div className="px-5 py-4 border-b border-gray-200">
                <div className="text-lg font-medium text-gray-900">{name}</div>
            </div>
            <span className={stylis.loadingStyles}></span>
            <span className={stylis.loadingStyles2}></span>
            <span className={stylis.loadingStyles2}></span>
            <span className={stylis.loadingStyles2}></span>
            <span className={stylis.loadingStyles2}></span>
            <span className={stylis.loadingStyles2}></span>
            <span className={stylis.loadingStyles2}></span>
        </div>

    );
}

export default TopLoading;