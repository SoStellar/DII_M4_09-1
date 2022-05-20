var student = {};
student.name = 'คุณลุง'
student.username = 'a@b.com'
student.gender = 'ชาย'
console.log(student)
//document.getElementById('output').innerText = student.name;
function addStudentData(student){
    const output = document.getElementById('output')
    let row = document.createElement('div')
    row.classList.add('row')
    let columnName = document.createElement('div')
    columnName.classList.add('col-1')
    columnName.classList.add('offset-1')
    columnName.innerHTML = 'ชื่อ'

    let row2 = document.createElement('div')
    row2.classList.add('row')
    let columnName2 = document.createElement('div')
    columnName2.classList.add('col-1')
    columnName2.classList.add('offset-1')
    columnName2.innerHTML = 'รหัส'

    let row3 = document.createElement('div')
    row3.classList.add('row')
    let columnName3 = document.createElement('div')
    columnName3.classList.add('col-1')
    columnName3.classList.add('offset-1')
    columnName3.innerHTML = 'เพศ'
    let columnValue = document.createElement('div')
    columnValue.classList.add('col')
    columnValue.innerHTML = student.name;
    columnValue.classList.add('col')

    let columnValue2 = document.createElement('div')
    columnValue2.classList.add('col')
    columnValue2.innerHTML = student.username;
    columnValue2.classList.add('col')

    let columnValue3 = document.createElement('div')
    columnValue3.classList.add('col')
    columnValue3.innerHTML = student.gender;
    columnValue3.classList.add('col')

    row.appendChild(columnName)
    row2.appendChild(columnName2)
    row3.appendChild(columnName3)
    row.appendChild(columnValue)
    row2.appendChild(columnValue2)
    row3.appendChild(columnValue3)

    output.appendChild(row)
    output.appendChild(row2)
    output.appendChild(row3)
}

window.addEventListener('load',function(){
    addStudentData(student)
})