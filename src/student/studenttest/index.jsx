import Studetsrate from "../../components/studentdashboard/Studentsrate";
import StudentTestCard from "./studenttestcard";

function StudentTest() {
    return (
        <div className="bg-gray-100 pb-10 p-8">
            <div className="flex justify-between items-middle py-6">
                <h1 className="text-4xl">test</h1>
                <input type="search" id="search" class="block w-64 p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
            </div>
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