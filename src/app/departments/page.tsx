import DepartmentCard from "@/components/DepartmentCard";
import { departments } from "@/data/departments";

export default function DepartmentsPage() {
  return (
    <main className="departments-page">
      <div className="departments-container">
        <header className="departments-heading">
          <div>
            <h1>Departments</h1>

            <p>
              Explore academic faculties, programs, and enrolled students.
            </p>
          </div>

          <span className="active-faculties">
            ● {departments.length} Active Academic Faculties
          </span>
        </header>

        <section className="department-list">
          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              department={department}
            />
          ))}
        </section>

        <footer className="departments-footer">
          <span>Curriculum Year 2024–2025</span>

          <span>Updated daily via Campus Records API</span>
        </footer>
      </div>
    </main>
  );
}