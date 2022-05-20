var students = [
    student={
        name : 'คุณลุง',
        username : 'a@b.com',
        gender: 'ชาย',
    },
    stu2={
        name :'สมรักษ์',
        username: 'm@n.com',
        gender: 'ชาย',
    }

]
console.log(students)
//document.getElementById('output').innerText = student.name;
function addRow(container, key, value) {
    let row = document.createElement('div')
    row.classList.add('row')
    let columnName = document.createElement('div')
    columnName.classList.add('col-1')
    columnName.classList.add('offset-1')
    columnName.innerHTML = key
    let columnValue = document.createElement('div')
    columnValue.classList.add('col')
    columnValue.innerHTML = value;
    row.appendChild(columnName)
    row.appendChild(columnValue)
    container.appendChild(row)
}
function addStudentData(student) {
    const output = document.getElementById('output')
    addRow(output, 'ชื่อ', student.name)
    addRow(output, 'รหัส', student.username)
    addRow(output, 'เพศ', student.gender)
}

window.addEventListener('load', function () {
    addStudentData(student)
    addStudentData(stu2)
})