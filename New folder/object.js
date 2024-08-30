// let student={//object 
//     firstName:"Tajinder",
//     lastName:"kaur",
//     rollno:29

// }
// console.log(student);
// const student1=object.create(student);
// console.log(student1);// no answer;
const student =[{//store data in array in the form of object
    firstName:"Tajinder",
         lastName:"kaur",
        rollno:29,
},{
grade:50,
marks:28,


}];
// console.log(student);
// student.fullName="tajinder kaur tiwana";
Object.freeze(student);//to restrict any changes
// student.lastName="tiwana g";
// Object.preventExtensions(student);//stop addition
// student.lastName="tiwana kaur";
// Object.seal(student);//can update not add/delete;
student.firstName="tajinder kaur ";
Object.isSealed(student);
console.log(student);

