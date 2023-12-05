export default function getStudentsByLocation(studentArray, city) {
  return studentArray.filter((obj) => obj.location === city);
}
