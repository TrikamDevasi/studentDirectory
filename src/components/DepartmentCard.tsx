import Link from "next/link";
import { Department } from "@/types/Department";

type Props = {
  department: Department;
};

export default function DepartmentCard({ department }: Props) {
  return (
    <article className="department-card">
      <div className="department-main">
        <div className="department-icon">
          {department.id === "computer-science"
            ? "▣"
            : department.id === "design"
              ? "✎"
              : "↗"}
        </div>

        <h2>{department.name}</h2>
      </div>

      <p className="department-description">
        {department.description}
      </p>

      <div className="department-bottom">
        <div className="department-stats">
          <span>
            ♧ {department.specializations} Specializations
          </span>

          <span>
            ♙ {department.enrolledStudents} Enrolled Students
          </span>
        </div>

        <Link
          href={`/students/department/${department.id}`}
          className="view-students"
        >
          View students →
        </Link>
      </div>
    </article>
  );
}