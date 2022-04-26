const arr = [1, [2, 3], 4, [5, 6, [7, 8], 9]];
const arr2 = [11, 13, 15, 16, 18];

function flat(array) {

	if (arguments.length > 1) {
		return ('throw new Error(Function accepts only 1 argument, too much arguments provided)');
	} else {
		let newArr = [];

		for (let i = 0; i < array.length; i++) {

			if (Array.isArray(array[i])) {
				newArr = newArr.concat(flat(array[i]));
			} else {
				newArr.push(array[i]);
			}
		}
		return newArr;
	}
}

console.log(flat(arr));
console.log(flat(arr2));