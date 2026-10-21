import Link from "next/link";
import { notFound } from "next/navigation";
import { departments } from "@/data/departments";
import { students } from "@/data/students";
import StudentCard from "@/components/StudentCard";

type Props = {
  params: Promise<{
    department: string;
  }>;
};

export default async function DepartmentStudentsPage({
  params,
}: Props) {
  const { department } = await params;

  const selectedDepartment = departments.find(
    (item) => item.id === department
  );

  if (!selectedDepartment) {
    notFound();
  }

  const departmentStudents = students.filter(
    (student) =>
      student.department.toLowerCase() ===
      selectedDepartment.name.toLowerCase()
  );

  return (
    <main className="students-page">
      <div className="page-container">
        <div className="breadcrumbs">
          <Link href="/departments">Departments</Link>
          <span>/</span>
          <span>{selectedDepartment.name}</span>
        </div>

        <header className="page-heading">
          <h1>{selectedDepartment.name}</h1>
          <p>{selectedDepartment.description}</p>
        </header>

        <p className="department-result-count">
          {departmentStudents.length} students found
        </p>

        {departmentStudents.length > 0 ? (
          <div className="student-grid">
            {departmentStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
              />
            ))}
          </div>
        ) : (
          <p>No students found in this department.</p>
        )}

        <Link href="/departments" className="back-link">
          ← Back to departments
        </Link>
      </div>
    </main>
  );
}