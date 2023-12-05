export default function getListStudentIds(studentArray) {
  if (Array.isArray(studentArray)) {
    return studentArray.map((obj) => obj.id);
  }
  return [];
}
