var noOfStudents = Number(prompt("Enter the total number of students in the class."))
var absents = [];
for(var i=0; i < noOfStudents ; i++) {
var names = prompt("Type the name of student" );
var attendance = prompt(`Type "P" if the student is Present or "A" if the student is Absent in the class`);
if(attendance === "A"){
    absents.push(names)
}
}
alert(`${noOfStudents-absents.length} students are present in the class and below are the names of Absentees:\n${absents}`)
