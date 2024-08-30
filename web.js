// localStorage.clear();
let arr=[];
let count=localStorage.getItem("count")||"0";
function setItem(count){
    return (localStorage.setItem("count",count));
}
let i =document.querySelector("#inp");
let j =document.querySelector("#textarea");
function addLocalItem(arr){
    return (localStorage.setItem("data",JSON.stringify(arr)));
        }
let but1=document.getElementById("but1");
let ch=document.getElementById("child1");
// let ch2=document.getElementById("child2");
but1.addEventListener("click",function(){
    // let s=document.getElementById("second");
    // s.style.display="block";
    ch.style.display="block";
    document.getElementById("child2").style.display="none";
})

let even=document.getElementById("submitbutton1");//submit
even.addEventListener("click",function(){
    let i =document.querySelector("#inp");
    let j =document.querySelector("#textarea");
    if(i.value===""||j.value==="")
    {
    alert("Please fill out the input box!");
    }else{
        let obj={
            id:count,
            subject:i.value,
            text:j.value,
            response : []
        };
        count++;
        setItem(count);
        arr.push(obj);
        addLocalItem(arr);

        let m=document.getElementById("list1");
        let n=document.createElement("li");
        n.setAttribute("id",count);
        n.setAttribute("class","n");
        m.appendChild(n);
        let q=document.createElement("p");
        let q1=document.createElement("h1");
        q1.style.textAlign="center";
        let a =document.querySelector("#inp");
        let b =document.querySelector("#textarea");
        n.appendChild(q1);
        n.appendChild(q);
        q1.innerText=a.value;
        q.innerText=b.value;
        
    }
})


let per=document.querySelector("#list1");
let uniqueId=null;
per.addEventListener("click",function(event){
ch.style.display="none";
document.getElementById("child2").style.display="block";
  
if(event.target.parentNode.tagName=="LI"&& event.target.parentNode.classList.contains("n")){
    uniqueId=event.target.parentNode.id;
    let sub=event.target.parentNode.childNodes[0].innerText;
    let sub1=event.target.parentNode.childNodes[1].innerText;
    let pi=document.getElementById("que1");
    let hi=document.getElementById("que2");
    pi.innerHTML=sub;
    hi.innerHTML=sub1;

}
var arr1=JSON.parse(localStorage.getItem("data"));//resp
document.getElementById("list2").innerHTML="";
arr1.forEach(element=>{
if(uniqueId==element.id){
console.log("sdfsdf");
                    
element.response.forEach(element=>{
let li2=document.createElement("list");
let para8=document.createElement("p");
let para9=document.createElement("h1");
li2.appendChild(para8);
li2.appendChild(para9);
document.getElementById("list2").appendChild(li2);
para8.innerText=element.name;
para9.innerText=element.comment;
})
}

})

})

let event2=document.getElementById("submitbutton2");
event2.addEventListener("click",function(){
    console.log("kjhgfd");
let i1=document.getElementById("inp2");
let j1=document.getElementById("textarea2");
if(i1.value===""||j1.value==="")
{
alert("Please fill out the input box!");
}
let obj1={
    id:1,
    name:i1.value,
    comment:j1.value,
};

// let fo=document.getElementById("forresponce");
// fo.style.display="block";
var lis2=document.getElementById("list2");
let li1=document.createElement("p");
let li2=document.createElement("p");
lis2.appendChild(li1);
lis2.appendChild(li2);
// let i11=document.getElementById("inp2");
// let j11=document.getElementById("textarea2");
li1.innerHTML=i1.value;
li2.innerHTML=j1.value;

arr=JSON.parse(localStorage.getItem("data"))
// i1.value="";
// j1.value="";
arr.forEach(element=>{
    console.log(element.id,"id");
    console.log(uniqueId,"unique");
    if(element.id==uniqueId){
        element.response.push(obj1);
    }
})
localStorage.setItem("data",JSON.stringify(arr));

})
window.onload=function(){
    arr=JSON.parse(localStorage.getItem("data")) ||[];
    arr.forEach(element => {
        let m=document.getElementById("list1");
        let n=document.createElement("li");
        n.setAttribute("class","n");
        n.setAttribute("id",element.id);
        m.appendChild(n);
        let q=document.createElement("p");
        let q1=document.createElement("h1");
        q1.style.textAlign="center";
        let a =document.querySelector("#inp");
        let b =document.querySelector("#textarea");
        n.appendChild(q1);
        n.appendChild(q);
        q1.innerText=element.subject;
        q.innerText=element.text;
    });
    }