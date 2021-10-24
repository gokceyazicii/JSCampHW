// class Customer{
//     constructor(id,customerNumber){
//     }
// }

// let customer = new Customer(1,"12345");
// //prototyping
// customer.name = "Gökçe Yazıcı"
// console.log(customer.name)
// console.log(customer.id) //undefined !!!

// class Customer{
//     constructor(id,customerNumber){
//         this.id = id;
//         this.customerNumber = customerNumber;
//     }
// }

// let customer = new Customer(1,"12345");
// //prototyping
// customer.name = "Gökçe Yazıcı"
// console.log(customer.name)
// console.log(customer.id) //1 !!!


// Bireysel müşterinin ismi vardır.
// class IndividualCustomer extends Customer{
//     constructor(firstName, id, customerNumber){
//         super(id, customerNumber)
//         this.firstName
//     }
// }

// Kurumsal müşterinin şirket adı vardır.
// class CorporateCustomer extends Customer{
//     constructor(companyName, id, customerNumber){
//         super(id, customerNumber)
//         this.companyName = this.companyName
// }
// }





let products = [
    {id:1, name: "Acer Laptop", unitPrice:15000},
    {id:2, name: "Asus Laptop", unitPrice:16000},
    {id:3, name: "Hp Laptop", unitPrice:13000},
    {id:4, name: "Dell Laptop", unitPrice:12000},
    {id:5, name: "Casper Laptop", unitPrice:17000},
]



console.log("<ul>")
products.map(product=>console.log('<li>${product.name}</li>'))
console.log("</ul>")

// filter
// let filteredProducts = products.filter(product=>product.unitPrice > 12000)
// console.log(filteredProducts)

// // reduce
// let carTotal = products.reduce((acc,product) => acc + product.unitPrice,0)
// console.log(carTotal)


// özet:
// let carTotal2 = products
//     .filter(p=>{
//         p.unitPrice = p.unitPrice * 1.18 //KDV hesapladı
//         return p
//     })
//     .reduce((acc,p) => p.unitPrice,0)
// console.log(carTotal2)