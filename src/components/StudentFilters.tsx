"use client";

import { useState } from "react";
import { Student } from "@/types/student";

type Props = {
  students: Student[];
  onFilter: (filteredStudents: Student[]) => void;
};

export default function StudentFilters({
  students,
  onFilter,
}: Props) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All departments");

  const departments = [
    "All departments",
    ...new Set(students.map((student) => student.department)),
  ];

  function handleSearch(value: string, selectedDepartment: string) {
    const filtered = students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(value.toLowerCase()) ||
        student.rollNumber.toLowerCase().includes(value.toLowerCase());

      const matchesDepartment =
        selectedDepartment === "All departments" ||
        student.department === selectedDepartment;

      return matchesSearch && matchesDepartment;
    });

    onFilter(filtered);
  }

  function handleSearchChange(value: string) {
    setSearch(value);
    handleSearch(value, department);
  }

  function handleDepartmentChange(value: string) {
    setDepartment(value);
    handleSearch(search, value);
  }

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="⌕  Search students"
        value={search}
        onChange={(event) => handleSearchChange(event.target.value)}
        aria-label="Search students"
      />

      <div className="department-filter">
        <label htmlFor="department">Department:</label>

        <select
          id="department"
          value={department}
          onChange={(event) => handleDepartmentChange(event.target.value)}
        >
          {departments.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}