/* function createCounter() {
	let counter = 0;
	const myFunction = function () {
		counter = counter + 1;
		return counter
	}
	return myFunction
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);
 */
function makeCounter() {
	let count = 0;
	return function () {
		return count++;
	};
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1()); // 0
console.log(counter1()); // 1

console.log(counter2()); // 0 (независимо)