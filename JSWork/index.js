// console.log("yo wazaaaaaaaaap");
console.log(document);
let parent=document.getElementsByClassName("yo");
console.log(parent);
// document.getElementById("yo").innerHTML="hello";

parent[0].innerHTML="<h2 style=color:red>data was changed</h2>";



























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