import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="brand">
        🎓 Campus Directory
      </Link>

      <div className="nav-links">
        <Link href="/students">Students</Link>

        <Link href="/students/department/cse">
          Departments
        </Link>

        <Link href="/about">About</Link>
      </div>

      <span className="practice-label">
        Frontend Practice
      </span>
    </nav>
  );
}