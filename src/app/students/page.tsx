import StudentCard from "@/components/StudentCard";
import { students } from "@/data/students";

export default function StudentsPage() {
  return (
    <main className="students-page">
      <div className="page-container">
        <header className="page-heading">
          <h1>Students</h1>

          <p>
            Browse students and view their profiles.
          </p>
        </header>

        <div className="student-grid">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
            />
          ))}
        </div>

        <footer className="listing-footer">
          Showing {students.length} of {students.length} students
        </footer>
      </div>
    </main>
  );
}