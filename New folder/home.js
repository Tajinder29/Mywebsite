
let button=document.getElementById("butt");
button.addEventListener("click",function(){
    const request=new XMLHttpRequest();
    request.open("GET","/aboutpage");
    request.send();
    request.onreadystatechange=()=>{
        if(request.readyState==4 && request.status==200){
          alert("ABout");
          window.location.href = "/aboutpage";
          console.log(request.responseText);
        } 
    }

    

});
