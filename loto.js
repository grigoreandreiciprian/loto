//-->functie ce genereaza un numar random intre 1 si 49
//-->functie ce genereaza 6 numere distincte intre 1 si 49
//-->funtie care face un sir cu numerele alese
//-->functie in care declaram un vector (declaram biletul nostu de loto)
//-->funtie care compara cei doi vectori si verifica cate numere au comune

function rand(){
  
    return Math.floor(Math.random()*49+1);
}



function generate6numbers(){
    let v=[]
  
    while(v.length<6){

        let number=rand();

        if(v.includes(number)==false){

            v.push(number);

        }
    }

    return v;
}


function chose6numbers(){
    let v=[]
  

    while(v.length<6){

        let x=prompt(`Introduceti un numar intre 1 si 49 ( au mai ramas ${6-v.length})`);

        x= +x;

        if(x<=49&&x>=1&&v.includes(x)==false){

            v.push(x);
        }else if(x>49||x<1){


            alert("Numarul introdus este invalid");
        }else{
            alert("Numarul a mai fost introdus");
        }
    }
  
    return v;
 }






 function comon(v ,x){

    let y=[]
   

    for(let i=1;i<=6;i++){
        if(v.includes(x[i])){
            y.push(x[i]);
        }
    }
    return y
 }






 let containerGen=document.querySelector(".gen");

 console.log(containerGen);
 let containerChose=document.querySelector(".chose");

 let containerGuess=document.querySelector(".guess");

 let btn=document.querySelector("button");



 btn.addEventListener("click",()=>{
     let arr=generate6numbers();
     let chose=chose6numbers();
     let comune=comon(arr,chose);



     containerGen.innerHTML=`
     <h1>Generated numbers</h1>
     <div class="number_box">${arr[0]}</div>
     <div class="number_box">${arr[1]}</div>
     <div class="number_box">${arr[2]}</div>
     <div class="number_box">${arr[3]}</div>
     <div class="number_box">${arr[4]}</div>
     <div class="number_box">${arr[5]}</div>

     `


     containerChose.innerHTML=`
    
     <h1>Your numbers</h1>
     <div class="number_box">${chose[0]}</div>
     <div class="number_box">${chose[1]}</div>
     <div class="number_box">${chose[2]}</div>
     <div class="number_box">${chose[3]}</div>
     <div class="number_box">${chose[4]}</div>
     <div class="number_box">${chose[5]}</div>
        `

        let text=`<h1>You guessed</h1>`;


        for(let i=0;i<comune.length;i++){

             
            text+=`<div class="number_box">${comune[i]}</div>`
        }


        containerGuess.innerHTML=text;

    
    

 });

 