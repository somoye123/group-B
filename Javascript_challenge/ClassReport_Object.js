//constructor function from which all indiviual student object property can be derived
function Individual(first_name, last_name, grade, age) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.grade = grade;
  this.age = age;
}

//individual student object
let student1 = new Individual("somoye", "ayotunde", 95, 22);
let student2 = new Individual("eluro", "alex", 75, 22);
let student3 = new Individual("bari", "nato", 80, 14);
let student4 = new Individual("adejumobi", "adeyinka", 90, 24);

//an array of all the student object
const students = [student1, student2, student3, student4];

//ClassReport object that exposes some method for calculation
ClassReport = {
  //ClassReport method for calculating students average grade
  averageGrade: studentsObjectArray => {
    let totalGrade = 0;
    for (studentObject of studentsObjectArray) {
      totalGrade += studentObject.grade;
    }
    let totalAvgGrade = totalGrade / studentsObjectArray.length;
    return totalAvgGrade;
  },

  //ClassReport method for ranking student by grade
  rank: arrOfStudent => {
    let gradeArray = arrOfStudent.map(item => item.grade);
    return gradeArray.sort();
  },

  //classReport method to filter out student age 16 and above
  age16Above: arrOfStudent => {
    let result = arrOfStudent.filter(item => item.age < 16);
    return result;
  },

  //ClassReport method to out put student name and grade
  nameGrade: studentsObjectArray => {
    studentsObjectArray.forEach(function(studentObject, index) {
      const firstName = studentObject.first_name;
      const lastName = studentObject.last_name;
      const myGrade = studentObject.grade;
      const fullNameGrade = `my fullname is ${firstName} ${lastName} and i have a grade of ${myGrade}.`;
      console.log(fullNameGrade);
    });
  }
};

//how to test run the different methods
//console.log(ClassReport.averageGrade(students));
//console.log(ClassReport.rank(students));
//console.log(ClassReport.age16Above(students));
//console.log(ClassReport.nameGrade(students));
