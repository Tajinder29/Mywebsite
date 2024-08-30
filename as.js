let arr=[];

function sett(arr){
    localStorage.setItem("data",JSON.stringify(arr));
}
function gett(){
    return JSON.parse(localStorage.getItem("data"));
}

let obj={
    id:1,subject:"java",
    text:"question",
};
arr.push(obj);
sett(arr);
let arr1 = gett("data");
arr1.push(obj);
sett(arr1);

let arrget= gett();
arrget.forEach((ele)=>{
    p.innerText = ele.subject;
})
// arr.push(obj);

// let data=JSON.parse(localStorage.getItem("data"));
// // console.log(data);


// // JSON.stringify();//convert in string and object
// // JSON.parse();
// let obj1={
//     id:2,
//     subject:"css",
//     text:"what is css",
// };
// data.push(obj1);
// console.log(data);

// localStorage.setItem("data",JSON.stringify(data));
// localStorage.removeItem("data");
// localStorage.clear();
