
const parent=document.createElement("body");
parent.style.backgroundColor="red";
parent.style.width="200px";
parent.style.height="200px";
parent.style.border="2px solid blue";
const di=document.createElement("div");
parent.style.backgroundColor="purple";
parent.style.width="100px";
parent.style.height="100px";
parent.style.border="1px solid green";
parent.appendChild(di);
document.body.appendChild("di");
console.log(parent);
di.style.display="grid";
const div1=document.createElement("div");
di.appendChild(div1);
let a1=document.createElement("p");
let a2=document.createElement("p");
let a3=document.createElement("p");
div1.appendChild("a1");
div1.appendChild("a2");
div1.appendChild("a3");
a1.innerText="para1";
a2.innerText="para2";
a3.innerText="para3";
const heading=document.createElement("h1");

di.appendChild("heading");
let he=document.createElement("h2");
let hea=document.createElement("h3");
let head=document.createElement("h4");
he.innerText="heading1";
head.innerText="heading3";
hea.innerText="heading2";

