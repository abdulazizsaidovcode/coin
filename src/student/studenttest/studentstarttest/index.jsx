import { useEffect, useState } from "react";
import { byId, getOneTest, sendTestCode, setConfig } from "../../../components/api/api";

function StudentStartTest() {
    const [code, setCode] = useState('');
    const [error, setError] = useState(1);
    const [test, setTest] = useState(null);
    const [time, setTime] = useState(0);
    const [second, setSecond] = useState(60);
    const [codeResult, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setConfig();
        getOneTest(sessionStorage.getItem('testId'), setTest);
    }, []);

    useEffect(() => {
        if (localStorage.getItem('ts')) {
            console.log(localStorage.getItem('ts'));
            setTime(localStorage.getItem('ts').split('.')[0]);
            setSecond(localStorage.getItem('ts').split('.')[1]);
        } else if (test) setTime(test.processMinute - 1);
    }, [test]);

    useEffect(() => {
        if (second !== 60) localStorage.setItem('ts', `${time}.${second}`);
    }, [test, second]);

    useEffect(() => {
        if (second !== 0) setTimeout(() => setSecond(second - 1), 1000);
        else {
            if (time !== 0) {
                setTime(time - 1);
                setSecond(60);
            } else alert('vaqt tugadi');
        }
    }, [second]);

    function sendCode() {
        localStorage.removeItem('ts')
        sendTestCode(byId('result').value, localStorage.getItem('testId'), setResult, setLoading, setError, time, second);
    }
    // salom
    return (
        <>
            {test && <div className='w-full bg-gray-100 h-screen p-6'>
                <div className="flex justify-between items-middle py-6">
                    <h1 className="text-4xl">test</h1>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg all-shadow max-w-lg">
                    <h2 className="text-lg font-semibold text-blue-800">{test.question}</h2>
                    <p className="text-sm text-blue-600 mt-2">Maslahat: {test.advice}</p>
                    <h2 className='py-4 text-green-700 font-bold'>Grade: {test.grade}</h2>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <button className="btm" onClick={sendCode}>{loading ? <div role="status">
                        <svg aria-hidden="true"
                            className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div> : "Run"}</button>
                    <span className="bg-white p-2 rounded-2xl text-lg font-mono text-gray-700">{time}:{second}</span>
                </div>
                <div className="flex space-x-4 mt-4 ">
                    <div className="flex-1">
                        <div className="text-white bg-black rounded-t-xl p-2">Typing code...</div>
                        <textarea id='result'
                            className="w-full h-64 bg-black text-white rounded-b-xl p-3 font-mono"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="Errors will be shown here..."
                        />
                    </div>
                    <div className="flex-1 ">
                        <div className="text-black bg-white rounded-t-xl p-2">Result</div>
                        <textarea
                            className={`w-full h-64 bg-white rounded-b-xl p-3 font-mono ${error === 1 ? 'code-no' : error === 2 ? 'code-success' : 'code-error'}`}
                            placeholder={codeResult ? codeResult : "Result"}
                            disabled
                        />
                    </div>
                </div>
            </div>}
        </>
    );
}

export default StudentStartTest;
