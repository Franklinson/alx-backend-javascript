export default function updateStudentGradeByCity(students, city, newGrades) {
  // map to update grades for students in the specified city
  return students.map(student => {
    if (student.location === city) {
      const matchingGrade = newGrades.find(grade => grade.studentId === student.id);
      if (matchingGrade) {
        // If a matching grade is found, update the student's grade
        return { ...student, grade: matchingGrade.grade };
      }
    }
    // If the student is not in the specified city or a matching grade is not found, return the original student object
    return student;
  });
}
