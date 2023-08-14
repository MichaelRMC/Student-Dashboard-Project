import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <>
      <div className="studentList">
        <h2>All Students</h2>
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </>
  );
}
export default StudentList;
