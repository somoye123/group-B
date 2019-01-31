// create an array and use a loop to print all its values
let nums = [1, 2, 3, 4];
nums.forEach(function(entry) {
  console.log(entry);
});

// using for in loop to loop through an object
let givenObject = {
  name: "Luke Skywalker",
  occupation: "Jedi",
  powers: "The force"
};

for (let property in givenObject) {
  console.log(givenObject[property]);
}

// print all odd numbers between 1 and 10 using a loop
for (let i = 1; i < 10; i += 2) {
  console.log(i);
}

// print all even numbers between 1 and 10 using a loop
for (let i = 2; i < 10; i += 2) {
  console.log(i);
}

// program to add Factorial values
let addFactorial = num => {
  if (num > 1) {
    return num + addFactorial(--num);
  } else {
    return 1;
  }
};

addFactorial(10);

//promise assignment solution
let favouriteFood = food => {
  //list of my favourite food
  let favouriteFoodList = [
    "pottage",
    "plaintain frittater",
    "fried rice",
    "paintain"
  ];
  let foodIndex = favouriteFoodList.indexOf(food);
  //to check for food within my array
  if (foodIndex !== -1) {
    return Promise.resolve(`Good of u ${food} is one of my favourite`);
  }
  return Promise.reject(
    `Quite close but ${food} is not my favourite. Give it another try`
  );
};

//call our promise
async function guessMyFavouriteFood() {
  try {
    let correct = await favouriteFood("pottage");
    console.log(correct);
  } catch (error) {
    console.log(error);
  }
}
guessMyFavouriteFood();

//printing out my first name using asterisk
function asterisk() {
  console.log(`  ****`);
  console.log(` *`);
  console.log(`*`);
  console.log(`*`);
  console.log(`   *`);
  console.log(`    *`);
  console.log(`     *`);
  console.log(`     *`);
  console.log(`    *`);
  console.log(`****`);
  console.log(``);
  console.log(``);
  console.log(`  ***`);
  console.log(` *   *`);
  console.log(`*     *`);
  console.log(`*     *`);
  console.log(` *   *`);
  console.log(`  ***`);
  console.log(``);
  console.log(``);
  console.log(`*     *`);
  console.log(`**   **`);
  console.log(`* * * *`);
  console.log(`*  *  *`);
  console.log(`*     *`);
  console.log(`*     *`);
  console.log(``);
  console.log(``);
  console.log(`  ***`);
  console.log(` *   *`);
  console.log(`*     *`);
  console.log(`*     *`);
  console.log(` *   *`);
  console.log(`  ***`);
  console.log(``);
  console.log(``);
  console.log(`*     *`);
  console.log(` *   *`);
  console.log(`  * *`);
  console.log(`   *`);
  console.log(`   *`);
  console.log(`   *`);
  console.log(`   *`);
  console.log(``);
  console.log(``);
  console.log(`****`);
  console.log(`*`);
  console.log(`*`);
  console.log(`****`);
  console.log(`*`);
  console.log(`*`);
  console.log(`****`);
}
asterisk();
