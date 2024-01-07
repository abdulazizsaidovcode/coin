import { useState } from "react";

function StudentStartTest() {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    return (
        <div className='w-full bg-gray-100 h-screen p-6'>
            <div className="flex justify-between items-middle py-6">
                <h1 className="text-4xl">test</h1>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg all-shadow max-w-lg">
                <h2 className="text-lg font-semibold text-blue-800">1-a va b sonlarini kattasini toping?</h2>
                <p className="text-sm text-blue-600 mt-2">Maslahat: shart operatoridan foydalaning</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <button className="btm">
                    Run
                </button>
                <span className="bg-white p-2 rounded-2xl text-lg font-mono text-gray-700">01:59:00</span>
            </div>
            <div className="flex space-x-4 mt-4 ">
                <div className="flex-1">
                    <div className="text-white bg-black rounded-t-xl p-2">Typing code...</div>
                    <textarea
                        className="w-full h-64 bg-black text-white rounded-b-xl p-3 font-mono"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Write your code here..."
                    />
                </div>
                <div className="flex-1 ">
                    <div className="text-black bg-white rounded-t-xl p-2">Error coding...</div>
                    <textarea
                        className="w-full h-64 bg-white text-black rounded-b-xl p-3 font-mono"
                        value={error}
                        onChange={(e) => setError(e.target.value)}
                        placeholder="Errors will be shown here..."
                        disabled
                    />
                </div>
            </div>
        </div>
    );
}

export default StudentStartTest;
