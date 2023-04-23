// let dateTime = new Date();
// document.querySelector("#date-time").textContent=dateTime;

document.addEventListener("DOMContentLoaded",()=>{
    GetTime();
})
function GetTime(){
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let clock = document.querySelector("#date-time");
    clock.textContent = hours+":"+minutes +":"+seconds+'s';

    setInterval(GetTime,1000)
}



let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let intervalid = undefined;




// function startTimer(){
//     let m= minute.textContent;
//     let s = second.textContent;

//     intervalid=setInterval(() => {
//         s--;
//         s=s<10? "0"+s:s;
//         if(s=="0-1"){
//             m--;
//             s=59;
//         }

//         if((m==00 && s==00) || (m==0 && s==0)){
//             clearInterval(intervalid);
//         }

//         minute.textContent = m;
//         second.textContent = s;
//     }, 1000);
// }
let m = minute.textContent;
let s = second.textContent;

startBtn.onclick = function () {

    
    intervalid = setInterval(() => {
        s--;
        s = s < 10 ? "0" + s : s;

        if (s == "0-1") {
            m--;
            s = 59;
        }

        if ((m == 00 && s == 00) || (m == 0 && s == 0)) {
            clearInterval(intervalid);
            swal("Time over", "byeee", "success")

            let audio = document.querySelector("audio");
            audio.play()
        }

        minute.textContent = m;
        second.textContent = s;

    }, 1000);
}


resetBtn.onclick=function(){
    clearInterval(intervalid);
    minute.textContent = '00';
    second.textContent =' 00';

}



stopBtn.onclick=function(){
    clearInterval(intervalid);
}//pause


//----------------------------------------------

let ul = document.querySelector(".todo-lists");

let input = document.querySelector("#input");
input.value="";
let addBtn = document.querySelector(".add")

let clear = document.querySelector(".clear");
clear.style.cursor="pointer";

let error = document.querySelector(".error");



addBtn.addEventListener("click",()=>{

    if(input.value.trim()==""){
       error.classList.replace("d-none","d-block");
    }

    else{
        error.classList.replace("d-block","d-none");
        let li = document.createElement("li");
        let a = document.createElement("a");

        // let checker = document.querySelector(".checker");
        

        li.classList.add("todo-lists-item");
        a.textContent = input.value;
        // checker.classList.replace("d-none","d-block")
        li.style.listStyle="none";
        li.style.display="flex";
        li.style.justifyContent="space-between";
        li.style.padding = "5px 10px";
        li.style.marginTop="10px"
        li.style.backgroundColor="#f0f0f0"
    

        
        li.appendChild(a);
        // li.appendChild(checker);
        ul.appendChild(li);
        input.value="";


        a.addEventListener("click",()=>{

            a.style.textDecoration="line-through";
            swal("done", "", "success")
            // checkicon.style.display = "inline";
        //    checker.classList.replace("d-none", "d-block")
            // let span = document.createElement("span");
            // span.textContent="done";

    
        })


        clear.addEventListener("click",()=>{
            li.remove();
            swal("All items deleted", "", "success")
        
           
        })
    
    }

    
})


