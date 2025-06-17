import { useState } from "react";
import data from "../Data/data.json";
import { Header } from "./Header";
import { SchoolInfo } from "./schoolInfo";
import { StudentSelector } from "./StudentSelector";
import { StudentDetails } from "./StudentDetails";

export const Layout = () => {
  const [selectedId, setSelectedId] = useState("");
  const selectedStudent = data.students.find((s) => s.id === selectedId);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md">
        <Header heading={data.school_name} subHead={data.class} />
        <SchoolInfo info={data.info} />
        <div className="flex flex-row gap-4 mt-6">
          <StudentSelector
            students={data.students}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
          <StudentDetails student={selectedStudent} />
        </div>
      </div>
    </div>
  );
};
