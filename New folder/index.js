let btn=document.querySelector("#d");
    let visi=document.querySelector("#mid");
    btn.addEventListener("click",function(){
        visi.style.visibility="visible";
    })
    k.addEventListener("click",function(){
        let m=document.getElementById("list");
        let n=document.createElement("li");
        
        m.appendChild(n);
        let q=document.createElement("p");
        let q1=document.createElement("h1");
        let a=document.querySelector("#i");
        let b=document.querySelector("#j");
        n.appendChild(q1);
        n.appendChild(q);
        q1.innerText=a.value;
        q.innerText=b.value;

    })
    let per=document.querySelector("#list");
    per.addEventListener("click",function(){
        visi.style.display="none";
        let r1=document.getElementById("list1");
    let n1=document.createElement("li");
    r1.appendChild(n1);
    let l=document.createElement("p");
    let l1=document.createElement("h1");
    n1.appendChild(l1);
    n1.appendChild(l);
let a=document.querySelector("#i");

let b=document.querySelector("#j");
l1.innerText=a.value;
l.innerText=b.value;
    })