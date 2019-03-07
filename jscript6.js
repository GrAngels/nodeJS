var persons = [
    {name: "Иван", age: 17},
    {name: "Мария", age: 35},
    {name: "Алексей", age: 73},
    {name: "Яков", age: 12},
]
// ## sort

// Сделайте обобщенную функцию сортировки массива
// Сортировка пузырьком масива обьектов по определенному ключу              TASK 1

function sortObj(mass, key, type = true){
    let c;
    if(type == true){
        for(let i=0;i<mass.length-1;i++){
            for(let i=0;i<mass.length-1;i++){
                if(mass[i][key]>mass[i+1][key]){
                    c = mass[i];
                    mass[i] = mass[i+1];
                    mass[i+1] = c;
                }
            }
        }
        return mass;
    }else{
        for(let i=0;i<mass.length-1;i++){
            for(let i=0;i<mass.length-1;i++){
                if(mass[i][key]<mass[i+1][key]){
                    c = mass[i];
                    mass[i] = mass[i+1];
                    mass[i+1] = c;
                }
            }
        }
        return mass;
    }
}
persons = sortObj(persons, "age", false);
console.log(persons);




// Преобразование всех строк в массиве в число                              TASK 2

var toStr = ["1", {}, null, undefined, "500", 700];
console.log(toStr);
var numbers = toStr.map(function(Str){
    if(typeof(Str) == "string")
        return Number(Str);
    else
        return Str;
});
console.log(numbers);



// ## array reduce
// Получите произведение всех чисел в массиве, используя `Array.reduce`. Не обрабатывайте типы данных, не являющиеся числом. 


var MassByType = ["0", 5, 3, "string", null]
var total = MassByType.reduce(function(mult,current){ //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if(typeof(mult) != "number")
        mult= 1;
    console.log(mult);
    if(typeof(current) == "number")
        return mult * current;
}, 0);
console.log(total);


// ## object filter

// Напишите свою реализацию `Array.filter` для **объектов**:
var phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
};
var model = {};
filter(phone);
function filter(phone){
    for(key in phone){
        if(key == "color" || phone[key] == 2){
            model[key] = phone[key];
        }
    }
}
console.log(model);



// ## object map

// Напишите свою реализацию `Array.map` для **объектов**:


var pers = {name: "Иван", age: 17};
map(pers);
function map(obj){
    for(key in obj){
        pers[key+"_"] = pers[key] + "$";
        delete pers[key];
    }
}
console.log(pers);