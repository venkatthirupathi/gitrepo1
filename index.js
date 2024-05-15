const axios = require('axios');

const tbody = document.querySelector('tbody');
const nameInput = document.querySelector('#name');
const courseInput = document.querySelector('#course');
const rollnoInput = document.querySelector('#rollno');
const addButton = document.querySelector('button');

addButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const course = courseInput.value;
    const rollno = rollnoInput.value;
    
    try {

        await axios.post('http://localhost:3000/students', {
            name: name,
            course: course,
            rollno: rollno
        });

        appendRow(name, course, rollno);
    
        nameInput.value = '';
        courseInput.value = '';
        rollnoInput.value = '';
    } catch (error) {
        console.error('Error adding new student:', error);
    }
});

async function fetchStudents() {
    try {
        const response = await axios.get('http://localhost:3000/students');
        const students = response.data;
        tbody.innerHTML = '';

        students.forEach(student => {
            appendRow(student.name, student.course, student.rollno);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function appendRow(name, course, rollno) {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    const courseCell = document.createElement('td');
    courseCell.textContent = course;
    const rollnoCell = document.createElement('td');
    rollnoCell.textContent = rollno;
    row.appendChild(nameCell);
    row.appendChild(courseCell);
    row.appendChild(rollnoCell);
    tbody.appendChild(row);
}

fetchStudents();
