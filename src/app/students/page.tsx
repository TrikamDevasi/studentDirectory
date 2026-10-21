"use client";

import { useState } from "react";
import StudentCard from "@/components/StudentCard";
import StudentFilters from "@/components/StudentFilters";
import { students } from "@/data/students";
import { Student } from "@/types/student";

export default function StudentsPage() {
  const [filteredStudents, setFilteredStudents] =
    useState<Student[]>(students);

  return (
    <main className="students-page">
      <div className="page-container">
        <header className="page-heading">
          <h1>Students</h1>
          <p>Browse students and view their profiles.</p>
        </header>

        <StudentFilters
          students={students}
          onFilter={setFilteredStudents}
        />

        {filteredStudents.length > 0 ? (
          <div className="student-grid">
            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
              />
            ))}
          </div>
        ) : (
          <p className="empty-message">
            No students found. Try another search.
          </p>
        )}

        <footer className="listing-footer">
          Showing {filteredStudents.length} of {students.length} students
        </footer>
      </div>
    </main>
  );
}