const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

//const reversedTeachers = teachers.reverse();
//console.log(reversedTeachers);

const reversedTeachers = [];
for (let i = 0; i < teachers.length; i++) {
	const currentTeacher = teachers[i];
	reversedTeachers.unshift(currentTeacher);
}
console.log(reversedTeachers);

//!Altro approccio
/*const reversedTeachers = [];

for (let i = teachers.length - 1; i >= 0; i--) {
	const currentTeacher = teachers[i];
	reversedTeachers.push(currentTeacher);
}
console.log(reversedTeachers);*/

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = [];
for (let i = 0; i < teachers.length; i++) {
	const currentTeacherName = teachers[i];
	if (currentTeacherName.length >= 5) {
		longNames.push(currentTeacherName);
	}
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

for (let i = 0; i < teachers.length; i++) {
	if (teachers[i] === "Ed") {
		teachers.splice(i, 1);
	}
}
console.log(teachers);

//!Altro approccio
/*let indexToRemove;

for (let i = 0; i < teachers.length; i++) {
	const currentTeacherName = teachers[i];
	if (currentTeacherName === "Ed") {
		indexToRemove = i;
	}
}
if (indexToRemove) {
	teachers.splice(indexToRemove, 1);
}
console.log(teachers);*/
