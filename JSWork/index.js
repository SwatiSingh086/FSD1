const promise=new Promise((resolve,reject)=>{
    
})





















// let parent=document.getElementsByClassName("parent");
// console.log(parent);


// function getData(){
//     console.log("Hi,inside function");
//     parent[0].innerText="hi,inside func";
// }
// const button= document.getElementsByClassName("btn");
// console.log(button);
// button[0].addEventListener("click",getData);
































// // console.log("yo wazaaaaaaaaap");
// console.log(document);
// let parent=document.getElementsByClassName("yo");
// console.log(parent);
// // document.getElementById("yo").innerHTML="hello";

// parent[0].innerHTML="<h2 style=color:red>data was changed</h2>";

// console.log("hellooooooo");
// let parent= document.getElementsByClassName("parent");
// console.log(parent);
// const h1=document.createElement("h1");
// console.log(h1);
// h1.innerText="abes engineering college";
// console.log(h1);
// h1.style.backgroundColor="cyan";
// h1.style.color="red";
// h1.style.padding="20px";
// h1.style.marginLeft="300px";
// parent[0].appendChild(h1);
// const img=document.createElement("img");
// img.src="./img1.jpg";



























// function greeting(msg='welcome'){
//     console.log("Good morning "+msg);
//      //agar parameter nahi diya toh automatically good morning welcome is printed
     
// }
// greeting("greetings");

// function sum(a,b,c){
//     return a+b;
// }
// let result=sum(2,3);
// console.log(result);



// function selectLang(language){
// let data;
// if(language=="c"){

//     function cCompiler(){
//         return "C complier selected";
    
//     }
//     data=cCompiler();
// }
//  if(language=="java"){   
//     function javaCompiler(){
//         return " java compiler selected";
    
//     }
//     data=javaCompiler();
//  }
//  return data;
// }
// let result=selectLang("java");
// console.log(result);



// console.log("Welcome to JS");
// const a=12;
// console.log(a);
// if(a>10){
//     let b=23;
//     a=40; //const cannot be reinittialised
//     console.log(a);  //var can be reassigned and has global scope
// }
// console.log("a Outside condition "+b); //b is not defined, let has block scope 

// let a=12;
// let b='12';
// console.log(typeof(b));
// let today=Date();
// console.log(today);

// if(a===b){
//     console.log("welcome"); //double equals to only checks value not the type
//                             //triple equals to checks type as well as value
// }
// else{
//     console.log("Hello");
// }

// let myname="Aurelia";
// let cllg="St. Stephens";
// let result=`Hewwo my name is ${myname} and Im doing economics from ${cllg}`;
// console.log(result);
// let key="sname";

// const student=[
//     {
//     sname:"Levi",
//     course:"B.Tech",
//     college:"BITS",

// },
// {
//     sname:"Liam",
//     course:"MCA",
//     college:"IIT",

// }
// ]

// console.log(student[1].sname,student[1].college);

// console.log(student);
// console.log("my name is "+student.sname);

// const {sname}=student;
// console.log(sname);
// student[key]="Zeus";
// console.log(student);