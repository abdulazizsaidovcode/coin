import { Reading1, Reading2, Reading3, Reading4, alt, } from "../img/navIndex"
import './analytic.css'
import { url } from '../../../components/api/api'
import axios from "axios"
import { useEffect, useState } from "react"

const Analytics = () => {
    const [analytics, setAnalytics] = useState([])
    useEffect(() => {
        axiosAnalytics()
    })

    const axiosAnalytics = () => {
        axios.get(`${url}contact/statistic`)
            .then((res) =>
                setAnalytics(res.data)
            )
            .catch((err) => console.log(err))
    }
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
        <div className="w-full md:mt-0 mt-10" id="2">
            <h1 className="flex justify-center h-[3.5rem] mb-20 font-extrabold text-5xl analyticH1 ">Our success <span></span> </h1>
            <div className="max-w-screen-xl mx-auto gap-5 cards ">
                <div className=" card ">
                    <img src={Reading1} className="mb-5 mt-5" alt="reading" />
                    <h1 className="text-white text-2xl font-bold">{analytics.studentCount}+</h1>
                    <p className="text-white ">Number of students</p>
                </div>
                <div className=" card ">
                    <img src={Reading2} className="mb-5 mt-5" alt="reading" />
                    <h1 className="text-white text-2xl font-bold">{analytics.statistic}%</h1>
                    <p className="text-white ">Percentage of success</p>
                </div>
                <div className=" card ">
                    <img src={Reading3} className="mb-5 mt-5" alt="reading" />
                    <h1 className="text-white text-2xl font-bold">{analytics.contactCount}</h1>
                    <p className="text-white ">Numbers of questions</p>
                </div>
                <div className=" card ">
                    <img src={Reading4} className="mb-[1.5rem] mt-5" alt="reading" />
                    <h1 className="text-white text-2xl font-bold">{analytics.teacherCount}+</h1>
                    <p className="text-white ">Number of experts</p>
                </div>
            </div>
        </div>
    )
}

export default Analytics
