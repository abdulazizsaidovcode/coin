import React from "react";


function FalsePage() {
    return (
        <>
            <main className="w-full h-screen flex justify-center items-center bg-white z-10 px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" className="btm">Go back home</a>
                        <a href="#" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
            </main>
        </>
    );
}

export default FalsePage;