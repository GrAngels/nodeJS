"use strict";
// -------------------------2 task(not full)-----------------------
function comparison(){ // поик одинаковых ключей
    for(var keyA in a){
        for(var keyB in b){
            for(var keyC in c){
                if(keyA == keyB && keyB == keyC){
                    commonKeys.push(keyA);
                }
            }
        }
    }
}
function differ(mass){ // поиск разных ключей 
    for(let key in mass){
        if(!commonKeys.includes(key)){
            if(!diff.includes(key)){
                diff.push(key);
                console.log(key);
            }
        }
    }
}
var diff = [];
var commonKeys = [];
//------------------------ mass 1 task --------------------------
var a = {
    "age" : 17,
    "name" : 'Maks',
    "surname" : 'Lyaskovskiy',
}
var b = {
    "fathername" : 'Vasya',
    "name" : 'Vitya',
    "surname" : 'Compel',
}
var c = {
    "sex" : 'Women',
    "name" : 'Natali',
    "surname" : 'Sanina',
}
// ------------------------------3 tast(not full)-----------------
var person = [a,b,c];
comparison();//поиск обющих
for(var i=0; i<person.length; i++){
    differ(person[i]); // добавление разных ключей в масив
}
for(var i=0; i<diff.length; i++){ //вывод разных ключей
    console.log(diff[i]);
}
for(var i = 0; i<person.length; i++){ //вывод мас. персон
    console.log(person[i]);
}
//----------------------------------4 task------------------------
console.log("---------4 task")
for(var i=0;i<person.length;i++){ // вывод массива персон
    for(var key in person[i]){
        if(key == "name" || key == "surname"){
            console.log(person[i][key]);
        }
    }
}
//----------------------------------5 task------------------------
console.log("---------5 task")
for(var i = 0; i<person.length; i++){// вывод массива персон (только имя и фамилия)
    for(var j = 0; j<commonKeys.length/2; j+=2){
        console.log(person[i][commonKeys[j]]+" "+person[i][commonKeys[j+1]]);
    }
}
//-----------------------------------6 task------------------------
console.log("--------task 6(вывод сначало им и фам а потом остальное)")
for(var i = 0;i<person.length;i++){
    for(var key in person[i]){
        if(key == "name" || key == "surname"){
            console.log(key+" - "+person[i][key]);
        }
    }
    for(var key in person[i]){
        if(key != "name" && key != "surname"){
            console.log(key+" - "+person[i][key]);
        }
    }
}
//-----------------------------------7 task-----------
/*console.log("---------------task 7 добавление нового ключа и его заполнение");
for(var i = 0;i<person.length;i++){// добавление fullName в каждый обьект(каждую персону)
    person[i].fullName = prompt("введите полные ФИО для "+person[i].name+" "+ person[i].surname);
    console.log(person[i].fullName);
}*/
//-----------------------------------8 task-------------------------
console.log("---------8 task JSON string");
var strJSON = JSON.stringify(person);
console.log(strJSON);
//---------------------------------9 null (desirialize JSON)



//---------------------------------10 масив в HTML table только с имя и фам
/*var myTable= "<table><tr><td>name</td>";
myTable += "<td>surname</td></tr>";
for(var i = 0; i<person.length; i++){
    myTable += "<tr><td>"+person[i].name+"</td>";
    myTable+= "<td>"+person[i].surname+"</td></tr>";
}
document.write(myTable);*/


//---------------------------------11 и 12 и 13 масив в HTML table
var myTable2 = "<table><tr bgcolor=gray>";
for(var i = 0;i<commonKeys.length;i++){//заполняет заголовки - сначало общие
    myTable2+="<th>"+commonKeys[i]+"</th>";
}
for(var i=0;i<diff.length;i++){ // и разные
    myTable2+="<th>"+diff[i]+"</th>";
}
myTable2+="</tr>";
for(var i=0;i<person.length;i++){ // заполняет строку і-той персоны
    if(i%2 != 0) myTable2+="<tr bgcolor=#DCDCDC>"; // проверяет четная ли персона и если нет красит его строку с серый
    else myTable2 += "<tr>";
    for(var key in person[i]){ //сначало общими значениями
        if(commonKeys.includes(key)){
            myTable2+="<td>"+person[i][key]+"</td>";
        }
    }
    for(var j = 0; j<diff.length;j++){// потом личными
        for(var key in person[i]){
            if(key == diff[j]){
                myTable2+="<td>"+person[i][key]+"</td>";
            }else if(diff.includes(key) && diff[j] != key){
                myTable2 += "<td></td>";
            }
        }
    }
    myTable2 += "</tr>";
}
myTable2+="</table>";
document.write(myTable2);


//-----------------------------------------