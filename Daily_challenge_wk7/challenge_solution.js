let numbers = [1,2,3];
let add = (arr) => {
	let total = arr.reduce((sun,value)=>{
		return sum + value;
	},0);
	console.log(total);
}

add(numbers);