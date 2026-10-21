import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "@/data/students";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function StudentProfile({ params }: Props) {
  const { id } = await params;

  const student = students.find((item) => item.id === id);

  if (!student) {
    notFound();
  }

  const yearSuffix =
    student.year === 1
      ? "st"
      : student.year === 2
        ? "nd"
        : student.year === 3
          ? "rd"
          : "th";

  return (
    <main className="profile-page">
      <div className="profile-container">
        <div className="breadcrumbs">
          <Link href="/students">Students</Link>
          <span>/</span>
          <span>{student.name}</span>
        </div>

        <Link href="/students" className="back-link">
          ← Back to students
        </Link>

        <section className="profile-card">
          <div className="profile-heading">
            <div className="profile-avatar">
              {student.avatar}
            </div>

            <div>
              <h1>{student.name}</h1>

              <div className="profile-badges">
                <span>{student.rollNumber}</span>
                <span className="active-badge">
                  Active Student
                </span>
              </div>
            </div>
          </div>

          <hr />

          <div className="profile-info-grid">
            <div>
              <label>DEPARTMENT</label>
              <p>{student.department}</p>

              <label>EMAIL</label>
              <p className="profile-email">{student.email}</p>
            </div>

            <div>
              <label>STUDY YEAR</label>
              <p>
                {student.year}
                {yearSuffix} Year (Undergraduate)
              </p>

              <label>ENROLLED</label>
              <p>Fall 2022</p>
            </div>
          </div>

          <hr />

          <section className="profile-about">
            <h2>About</h2>

            <p>
              {student.name} is an undergraduate student studying{" "}
              {student.department}. This profile contains academic
              and contact information for the student directory.
            </p>
          </section>

          <hr />

          <section className="academic-details">
            <h2>Academic Details</h2>

            <div className="academic-row">
              <span>Department</span>
              <strong>{student.department}</strong>
            </div>

            <div className="academic-row">
              <span>Current Academic Standing</span>
              <strong>
                {student.year}
                {yearSuffix} Year Undergraduate
              </strong>
            </div>

            <label className="academic-label">
              ACADEMIC PERFORMANCE
            </label>

            <div className="academic-subjects">
              <div>
                <span>Current CGPA</span>
                <span>{student.cgpa.toFixed(1)} / 10</span>
              </div>

              <div>
                <span>Roll Number</span>
                <span>{student.rollNumber}</span>
              </div>

              <div>
                <span>Phone</span>
                <span>{student.phone}</span>
              </div>
            </div>
          </section>
        </section>

        <footer className="profile-footer">
          <span>Student Record: {student.id}</span>
          <span>Campus Directory</span>
        </footer>
      </div>
    </main>
  );
}