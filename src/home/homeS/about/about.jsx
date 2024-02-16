import './about.css'
import { AboutCompany, Vector } from '../img/navIndex'
const About = () => {
    return (
        <div className="max-w-screen-xl mx-auto md:flex block flex-wrap aboutMain  items-center justify-between h-60 mt-20 ">
            <div className='image-section md:w-[50%] w-full'>
                <img src={AboutCompany} alt="" className='w-full' />
            </div>
            <div className='content-section md:w-[50%] w-full '>
                <div className='aboutP mb-5 '>
                    <h1 className='text-5xl text-center md:text-start text-center font-extrabold '>About <br />  Company</h1>
                </div>
                <div className='content1'>
                    <h1 className='text-xl w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deserunt.</h1>
                    <p className='text-[#8794BA]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis repudiandae optio maiores error quos sint sapiente, nobis repellat dolores, fugit reiciendis sit vitae assumenda labore saepe exercitationem non cum. Repellendus omnis nam sequi temporibus amet quos quibusdam ullam deserunt, iusto enim vitae veniam assumenda debitis molestiae, inventore ea! Eos?
                    </p>
                    <div className='Read-More mt-4'>
                        <a href="#" className='bg-[rgb(158,105,167)] hover:bg-[#BA68C8] hover:duration-500 hover:underline rounded  px-8 py-2 text-white '>Read More</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
