import { Reading1, Reading2, Reading3, Reading4, alt, } from "../img/navIndex"
import './analytic.css'

const Analytics = () => {
    const analytic = [
        {
            img: Reading1,
            number: '15K+',
            title: 'Number of students'
        },
        {
            img: Reading2,
            number: '75%',
            title: 'Percentage of success'
        },
        {
            img: Reading3,
            number: '35',
            title: 'Numbers of questions'
        },
        {
            img: Reading4,
            number: '25+',
            title: 'Number of experts'
        },
    ]
    return (
        <div className="w-full">
            <h1 className="flex justify-center h-[3.5rem] mb-20 font-extrabold text-5xl analyticH1 ">Our succes <span></span> </h1>
            <div className="max-w-screen-xl mx-auto gap-5 cards ">
                {
                    analytic.map((item) => (
                        <div key={item} className=" card ">
                            <img src={item.img} className="mb-5 mt-5" alt="reading" />
                            <h1 className="text-white text-2xl font-bold">{item.number}</h1>
                            <p className="text-white ">{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Analytics
