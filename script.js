/*var students = [
    {
        name : 'คุณลุง',
        username : 'a@b.com',
        gender : 'ชาย',
    },
    {
        name :'สมรักษ์',
        username: 'm@n.com',
        gender: 'ชาย',
    }
]
let nameText = document.getElementById('autoSizingInput')
let usernameText = document.getElementById('autoSizingInputGroup')
let genderText = document.getElementById('autoSizingSelect')
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
}*/

function addStudentToTable(index,student){
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.setAttribute('scope','row')
    cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.name
    row.appendChild(cell)
    cell = document.createElement('td')
    cellbeforeImg= document.createElement('div')
    cellbeforeImg.classList.add('img-fluid')
    let img = document.createElement('img')
    img.setAttribute('src',student.imageLink)
    img.classList.add('img-thumbnails')
    img.style.width = "5rem"
    cellbeforeImg.appendChild(img)
    cell.appendChild(cellbeforeImg)
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.gender
    row.appendChild(cell)
    tableBody.appendChild(row)
}
function addStudentList(studentList){
    let counter = 1
    for(student of studentList){
        addStudentToTable(counter++,student)
    }
}
/*function addStudentArray(name,username,gender){
    console.log(nameText)
    console.log(usernameText)
    console.log(genderText)
    addStudentList(students)
}

submitButton.addEventListener('click', function () {
    addStudentArray(nameText,usernameText,genderText)
})*/

function onLoad(){
    fetch('asset/students2.json').then(response => {
        return response.json()
    })
        .then(data => {
            let students = data
            addStudentList(data)
        })
}