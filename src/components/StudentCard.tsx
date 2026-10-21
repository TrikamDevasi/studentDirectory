import Link from "next/link";
import { Student } from "@/types/student";

type Props = {
  student: Student;
};

export default function StudentCard({ student }: Props) {
  return (
    <article className="student-card">
      <div className="card-top">
        <div className="avatar">{student.avatar}</div>

        <span className="student-id">
          {student.rollNumber}
        </span>
      </div>

      <h2>{student.name}</h2>

      <div className="student-info">
        <span className="department-badge">
          {student.department}
        </span>

        <span className="study-year">
          {student.year}
          {student.year === 1
            ? "st"
            : student.year === 2
              ? "nd"
              : student.year === 3
                ? "rd"
                : "th"}{" "}
          Year
        </span>
      </div>

      <div className="card-bottom">
        <Link href={`/students/${student.id}`}>
          View profile →
        </Link>
      </div>
    </article>
  );
}