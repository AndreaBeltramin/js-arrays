const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

/*for (let i = 0; i < teachers.length; i++) {
	console.log(`indice ${i} - valore '${teachers[i]}'`);
	console.log(`indice ${i} - valore '${reversedTeachers[i]}'`);
}*/

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = [];

for (let i = 0; i < teachers.lenght; i++) {
	const nameTeacher = teachers[i];
	if (nameTeacher.length >= 5) {
		longNames.push(nameTeacher);
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
