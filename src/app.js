// console.log('Merhaba Gökçe');
// // typescript
// var sayi1 = 10;
// console.log(sayi1);

// let student = {id:1, name:"Gökçe"}
// console.log(student);

// 1
// function save(ogrenci){
//     console.log(student.name)
// }

// save();

// 2
// function save(ogrenci){
//     console.log(ogrenci)
// }

// save(student);

// 3
// function save(ogrenci,puan=10){
//     console.log(ogrenci.name + " : " + puan)
// }

// save(student); //Gökçe : 10
// save(student,100); //Gökçe : 100
// save(10); //undefined : 10

// İlk parametreye bir şey göndermeden çalıştırma 
// function save(puan=10,ogrenci){
//     console.log(ogrenci.name + " : " + puan)
// }

// save(undefined, student); //Gökçe : 10

// Array oluşturma
// let students = ["Gökçe Yazıcı", "İsmail Özcan", "Engin Demiroğ"]
// console.log(students);

// let students2 = [student, {id:2, name:"İsmail"}, "Tekirdağ", {city:"İstanbul"}]
// console.log(students2);




//rest
let showProducts = function (id,...products){
    console.log(id)
    console.log(products[0])
}

// console.log(typeof showProducts)
// showProducts(10,"Elma","Armut","Karpuz")
// showProducts(10,["Elma","Armut","Karpuz"]) // array içinde array


//spread
console.log(Math.max([1,2,3,4,60,15,20])) //nan

let points = [1,2,3,4,60,15,20]
console.log(...points)  // 1 2 3 4 60 15 20
console.log(Math.max(...points)) // 60


console.log(..."ABC", "D",..."EFG", "H")// A B C D E F G H

// destructring 
// elimizdeki arrayin değerlerini değişkene atamaya yarar.
// let populations = [10000, 20000, 30000]
// let [small, medium, high] = populations
// console.log(small)
// console.log(medium)
// console.log(high)


let category = {id: 1, name: "İçecek"}
console.log(category.id)
console.log(category["name"])


let {id, name} = category
console.log(id)
console.log(name)
