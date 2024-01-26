import TeacherTestCard from "./TeacherTestCard";
import TeacherTestTable from "./TeacherTestTable";

const Test = () => {
    return (
        <div className="bg-gray-100 pb-10 p-8">
            <div className=" mb-4 flex justify-between items-center">
                <h2 className="text-4xl font-bold font-inika text-gray-900 mb-4">Test</h2>
                <div class="relative">
                    <input
                        id="search"
                        className="w-80 py-3 ps-3 text-sm border border-gray-300 rounded-lg
                      bg-gray-200 focus:bg-gray-50 focus:outline-0 focus:border-blue-500 duration-300"
                        placeholder="🔍  Search" />
                </div>
            </div>
            <TeacherTestCard />
            <div className='mt-5'>
                <TeacherTestTable />
            </div>
        </div>
    )
}

export default Test;