// ----------------------------1 task
function a(massege){
    alert("Hello "+massege);
}
//a("hello");
// ----------------------------2 task
function cube(x){
    return Math.pow(x,3);
}
/*console.log(cube(1));
console.log(cube(2));
console.log(cube(3));*/
//------------------------------3 task
function avg2(x,y){
    return (x+y)/2;
}
console.log(avg2(1,2));
//------------------------------4 task
function sum3(x=0,y=0,z=0){
    return x+y+z;
}
console.log(sum3(1,10,100));
//------------------------------5 task
function intRando(min,max){
    return Math.round(Math.random()*(max - min +1))+min;
}
console.log(intRando(1,10));
//------------------------------6 task
function sayHiTo(){
    for(var i = 0; i<arguments.length;i++){
        console.log("hello "+arguments[i]);
    }
}
sayHiTo("maks", "den");
//------------------------------7 task
function sumAny(){
    var x = 0;
    for(var i=0; i<arguments.length;i++){
        x+=arguments[i];
    }
    return x;
}
console.log(sumAny(5,50,500,5000));
//------------------------------8 task
function avgAny(){
    var x = 0;
    for(var i = 0; i<arguments.length;i++){
        x+=arguments[i];
    }
    return x/=arguments.length;
}
console.log(avgAny(10,10,70));
//------------------------------9 task
//var sample = prompt("какую функцию задействовать?");
/*switch(sample.toLowerCase()){
    case "a": a("user");
    break;
    case "sum": console.log(sumAny(1,1,1));
    break;
}*/
//------------------------------10 task
/*var obj={
    "a": function() {a("user")},
    "sum": function() {console.log(sumAny(1,1,1))}
}
var switchKey = prompt("какую функцию задействовать?");
obj[switchKey]()*/;
//------------------------------11 task
var person={
    age:5,
    getAgeCategory: function(){
        if(this.age < 5){
            console.log("Младенец");
        }else if(this.age < 10){
            console.log("Ребенок");
        }else if(this.age < 20){
            console.log("Подросток");
        }else if(this.age < 40){
            console.log("вред возраст");
        }else if(this.age >= 40){
            console.log("закат");
        }
    }
}
person.getAgeCategory();
//------------------------------12 task
function inputPerson(){
    var a={
        name: prompt("Enter name"),
        surname: prompt("enter surname")
    }
    return a;
}
var persons =[inputPerson(),inputPerson(),inputPerson()];
console.log(persons);
for(var i = 0;i<persons.length;i++){
    console.log(persons[i]);
}