// Array1 question and solution
const texasss = [
  {
    name: "Mike",
    age: 23,
    gender: "m",
    us: false
  },
  {
    name: "Liz",
    age: 20,
    gender: "f",
    us: true
  },
  {
    name: "Chris",
    age: 102,
    gender: "m",
    us: true
  },
  {
    name: "Chuloo",
    age: 27,
    gender: "m",
    us: false
  },
  {
    name: "Annie",
    age: 30,
    gender: "f",
    us: true
  }
]

// Part 1 - Find all users older than 24
let AgeAbove24 = texasss.filter(older => older.age > 24);
console.log(AgeAbove24);
// Part 2 - Find the total age of all users
let TotalAge = texasss.reduce((acc,val) => acc + val.age,0);
console.log(TotalAge);
// Part 3 - List all female coders
let FemaleCoder = texasss.filter(coder => coder.gender === "f");
console.log(FemaleCoder);

// Array2 question and solution
const newieyork = [
    {
        name: 'Michelle',
        age: 19,
        coder: true,
        gender: 'f',
        us: true,
    },
    {
        name: 'Sam',
        age: 25,
        coder: false,
        gender: 'm',
        us: false,
    },
    {
        name: 'Ivy',
        age: 26,
        coder: true,
        gender: 'f',
        us: false,
    },
    {
        name: 'Nick',
        age: 32,
        coder: true,
        gender: 'm',
        us: true,
    },
    {
        name: 'Jim Beglin',
        age: 65,
        coder: false,
        gender: 'm',
        us: true,
    },
]
// Part 1 - List all users in US in ascending order
let US_User = newieyork.filter(users => users.us === true).sort((a,b) => {
    if (a.name > b.name){
        return 1;
    }else{
        return -1;
    }
});
console.log(US_User);
// Part 2 - Sort all users by age
let AgeSort = newieyork.sort((a,b) => {
    if (a.age > b.age){
        return 1;
    }else{
        return -1;
    }
});
console.log(AgeSort);
// Part 3 -  List all female coders
let Female_Coder = newieyork.filter(coder => coder.gender === 'f');
console.log(Female_Coder);

// Array3 question and solution
const vegzas = [
    {
        name: 'Charly',
        age: 32,
        coder: true,
        gender: 'm',
    },
    {
        name: 'Law',
        age: 21,
        coder: true,
        gender: 'm',
    },
    {
        name: 'Rosey',
        age: 42,
        coder: false,
        gender: 'f',
    },
    {
        name: 'Steph',
        age: 18,
        coder: true,
        gender: 'f'
    },
    {
        name: 'Jon',
        age: 47,
        coder: false,
        gender: 'm',
    },
]
// Part 1 - Find the total age of male coders under 25
let MaleAgeTotal = vegzas.filter(male => male.gender ==='m' && male.coder === true && male.age < 25)
.reduce((acc,val) => acc + val.age,0);
console.log(MaleAgeTotal);
// Part 2 - List all male coders over 30
let MaleCoder30 = vegzas.filter(male => male.gender ==='m' && male.coder === true && male.age > 30);
console.log(MaleCoder30);
// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
let EveryoneTotalAge = function (arr1,arr2,arr3){
 let Firstarr = arr1.reduce((acc,val) => acc + val.age);
 let Secondarr = arr2.reduce((acc,val) => acc + val.age); 
let thirdarr = arr3.reduce((acc, val) => acc + val.age);
 let TotalAge = Firstarr + Secondarr + thirdarr;
 console.log(TotalAge);
}
EveryoneTotalAge(texasss,newieyork,vegzas);