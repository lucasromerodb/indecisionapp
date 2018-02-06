var nameVar = 'Lucas';
nameVar = 'José'
console.log('nameVar: ', nameVar);

let nameLet = 'Amarú';
nameLet = 'Nicolás';
console.log('nameLet: ', nameLet);

const nameConst = 'Ariel';
console.log('nameConst: ', nameConst);

// Block scoping
const fullName = 'Lucas Romero';
let firstName;

if (fullName) {
	firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName);



// function getPetName() {
// 	const petName = 'chicha';
// 	return petName;
// }
// 
// const petName = getPetName();
// console.log(petName);