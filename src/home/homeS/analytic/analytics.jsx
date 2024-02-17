import { Reading1, Reading2, Reading3, Reading4, Reading5, Reading6 } from "../img/navIndex"

const Analytics = () => {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto flex flex-wrap">
                <div>
                    <img src={Reading1} alt="reading" />
                    <h1>15K+</h1>
                    <p>Number of students</p>
                </div>
                <div>
                    <img src={Reading2} alt="reading" />
                    <h1>15K+</h1>
                    <p>Number of students</p>
                </div>
                <div>
                    <img src={Reading3} alt="reading" />
                    <h1>15K+</h1>
                    <p>Number of students</p>
                </div>
                <div>
                    <img src={Reading4} alt="reading" />
                    <h1>15K+</h1>
                    <p>Number of students</p>
                </div>
                <div>
                    <img src={Reading6} alt="reading" />
                    <h1>15K+</h1>
                    <p>Number of students</p>
                </div>
            </div>
        </div>
    )
}

export default Analytics
