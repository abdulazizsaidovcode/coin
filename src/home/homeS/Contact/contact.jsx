import './contact.css'
const Contact = () => {
    return (
        <div className="container my-24 mx-auto md:px-6" id="4">
            <section className="mb-32">
                <div className="flex flex-wrap">
                    <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                        <h2 className="mb-6 text-5xl font-semibold handelH1 ">Contact us</h2>
                        <p className="mb-6 text-[#8794C9]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Laudantium, modi accusantium ipsum corporis quia asperiores
                            dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
                            autem omnis fugiat perspiciatis? Ad, veritatis.
                        </p>
                        <p className="mb-2 text-[#8794C9] ">
                            Uzbekistan, Kashkadarya RG , Islam Karimov Street
                        </p>
                        <p className="mb-2 text-[#8794C9] ">
                            +998 99 999 99 99
                        </p>
                        <p className="mb-2 text-[#8794C9] ">
                            Outsourcing@gmail.com
                        </p>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                        <form>
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    className='block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none inputLabel'
                                    placeholder='Name'
                                />
                            </div>
                            <div class="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    className=' inputLabel block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 outline-none leading-[1.6]'
                                    placeholder='Example@gmail.com'

                                />
                            </div>

                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <textarea
                                    className='inputLabel outline-none block min-h-[auto] w-full rounded bg-transparent py-[0.32rem]  px-3 leading-[1.6]'
                                    placeholder='Message'
                                    rows="3">
                                </textarea>

                            </div>
                            <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                                <input type="checkbox" className='relative float-left mt-[0.15rem] mr-[6px]  w-[1.125rem]  ' />
                                <label className="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96">
                                    Send me a copy of this message
                                </label>
                            </div>
                            <button
                                type='button'
                                className=' mb-6 inline-block w-full rounded bg-[#9E69A7] px-6 pt-2.5 pb-2 text-lg font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#9E69A7] '
                            >
                                Send a message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Contact
