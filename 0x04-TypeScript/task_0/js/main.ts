// rite an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Franklin",
  lastName: "Hassey",
  age: 25,
  location: "Ho",
};

const student2: Student = {
  firstName: "Frank",
  lastName: "Hassey",
  age: 25,
  location: "Agbeve",
};

const studentsList: Student[] = [student1, student2];

document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.querySelector('tbody');

  if (tableBody) {
    studentsList.forEach((student: Student) => {
      const row = document.createElement('tr');
      const firstNameCell = document.createElement('td');
      const locationCell = document.createElement('td');

      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;

      row.appendChild(firstNameCell);
      row.appendChild(locationCell);

      tableBody.appendChild(row);
    });
  }
});
