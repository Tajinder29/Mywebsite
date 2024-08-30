
let compile=document.getElementById("but");
let selectvalue=document.getElementById("div2");
let output=document.getElementById("div3");

let url="https://course.codequotient.com/api/executeCode";
let language=0;
let call;
compile.addEventListener("click",function(){
    
    let request=new XMLHttpRequest();
    request.open("POST",url);
    const obj={
       code:  selectvalue.value,
       langId: language,
       
       };
       request.setRequestHeader("Content-type","application/json");
       
       request.send(JSON.stringify(obj));
       request.onreadystatechange=()=>{//instead of window onload
        if(request.readyState==4){
            
            let resp=JSON.parse(request.responseText);
            console.log(resp);  
            if(resp.hasOwnProperty("codeId")){
               

                call=setInterval(() => {
                    codeid(resp.codeId,call);
                 },1000); 
            }
             
        }
    
       }

      
       
       
   
})

let codeid=(codeId)=>{
    let req2=new XMLHttpRequest();
    req2.open("GET","https://course.codequotient.com/api/codeResult/${codeId}");
    req2.send();
    req2.onreadystatechange=()=>{
        if(req2.readyState==4){
            let ob=JSON.parse(req2.responseText);
            console.log(ob);
            let data=JSON.parse(ob.data);
            console.log(data);
            if(data.output!=" "){
                console.log(data.output);
               document.getElementById("div3").innerHTML=data.output;
            }
            
            if(data.hasOwnProperty("langId")){
                clearInterval(call);
            }
            console.log(data);
            
        }
    }
   }
//    setInterval(codeId,1000);

let select=document.getElementById("select");
       select.addEventListener("change",function(){
        console.log(select.value);
        if(select.value=="Python"){
            language=0;

        }
        if(select.value=="C"){
            language=7;

        }
        if(select.value=="C++"){
            language=77;

        }
        if(select.value=="Javascript"){
            language=4;

        }
        if(select.value=="Java"){
            language=8;

        }
        
       })

       
