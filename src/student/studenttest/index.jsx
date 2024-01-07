import Studetsrate from "../studentdashboard/Studentsrate";
import StudentTestCard from "./studenttestcard";

function StudentTest() {
    return (
        <div className="bg-gray-100 pb-10 p-8">
            <div className="flex justify-between items-middle mb-3">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Gift</h2>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex  ps-3 mt-5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="search" class="block w-full p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                </div>            </div>
            <Studetsrate />
            <div className="mt-10">
                <StudentTestCard
                    name="Javokhir Kozimov"
                    role="IT and Business"
                    phoneNumber="+998-99-264-62-62"
                    socialMedia={{
                        instagram: "javohirkkoziboyev",
                        twitter: "javohirkkoziboyev"
                    }}
                    course="Java Core"
                    price="500 C / 350 C"
                    description="Description"
                    questions={20}
                    likes={15}
                    timeSpent="7h 39m"
                    totalCourseTime="5 h 15m"
                />
            </div>
        </div>
    );
}

export default StudentTest;