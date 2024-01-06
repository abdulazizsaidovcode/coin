import Studetsrate from "../../components/studentdashboard/Studentsrate";
import StudentTestCard from "../studentGift/Giftcard";

function StudentTest() {
    return (
        <div className="bg-gray-100 pb-10 p-8">
            <div className="flex justify-between items-middle py-6">
                <h1 className="text-4xl">test</h1>
                <input type="search" id="search" class="block w-64 p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
            </div>
            <Studetsrate />
            <div className="mt-10">
                <StudentTestCard />
            </div>
        </div>
    );
}

export default StudentTest;