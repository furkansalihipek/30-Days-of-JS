// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Turkish/03_Day_Booleans_operators_date/03_booleans_operators_date.md

// Boolean iki farklı değer alabilir true ya da false
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

// Undefined
// Bir değişken tanımlayıp içini boş bırakırsak undefined (tanumsız) olur
let firstName
console.log(firstName)

let empty = null
console.log(empty) // null(boş) değer yok anlamına gelir

// Atama Operatörleri
// Js'de eşittir değişken atamak için kullanılır
let name = 'Furkan'
let country = 'Turkey'

// Aritmetik Operatörler
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo // toplama
let diff = numOne - numTwo // çıkarma
let mult = numOne * numTwo // çarpma
let div = numOne / numTwo // bölme
let remainder = numOne % numTwo // kalanı bulma
let powerOf = numOne ** numTwo // üstel sayı Örnek: 4 Üssü 3
console.log(sum, diff, mult, div, remainder, powerOf)

// Karşılaştırma Operatörleri
// '==' Değeri karşılaştırırken '===' hem değeri hemde veri türünü karşılaştırır
console.log(3 > 2)              // true
console.log(3 >= 2)             // true
console.log(3 < 2)              // false
console.log(2 < 3)              // true
console.log(2 <= 3)             // true
console.log(3 == 2)             // false
console.log(3 != 2)             // true
console.log(3 == '3')           // true
console.log(3 === '3')          // false
console.log(3 !== '3')          // true
console.log(3 != 3)             // false
console.log(3 !== 3)            // false
console.log(0 == false)         // true
console.log(0 === false)        // false
console.log(0 == '')            // true
console.log(0 == ' ')           // true
console.log(0 === '')           // false
console.log(1 == true)          // true
console.log(1 === true)         // false
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// Mantıksal Operatörler
// && (ve) şartlardan bir tanesi sağlanmadığı durumda false değeri döner

const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false

// || (ya da) iki şarttan biri sağlanıyorsa true değeri döner

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false

//! olumsuzlama (Değeri tersine döndürme)

let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn1 = true
let isLightOff = !isLightOn           // false
let isMarried1 = !false                // true

// Arttırma Operatörü
// Önceden arttırma
let count = 0
console.log(++count)        // 1
console.log(count)          // 1

// Sonradan arttırma
let count1 = 0
console.log(count1++)        // 0
console.log(count1)          // 1

// Azaltma Operatörü
let count2 = 0
console.log(--count2) // -1
console.log(count2)  // -1

let count3 = 0
console.log(count3--) // 0
console.log(count3)   // -1

// Koşul Operatörü
// true ise '?' false ise ':'
let isRaining1 = true
isRaining1
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')
isRaining1 = false

isRaining1
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

// Window prompt() metot
let number = prompt('Enter number', 'number goes here')
console.log(number)

// Window confirm() metot
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // Tıkladığımız seçeneğe göre true ya da false değeri döner

// Date Objesi
const now = new Date()
console.log(now) // Anlık tarih ve saat bilgisi verir

const now1 = new Date()
console.log(now1.getFullYear()) // Bulunduğumuz yılı verir

const now2 = new Date()
console.log(now2.getMonth()) // Bulunduğumuz aydan 1 önceki ayın sayısını verir çünkü aylar 0-11 arasında oluşuyor

const now3 = new Date()
console.log(now3.getDate()) // Bulunduğumuz ayın kaçıncı gününde olduğumuzu verir

const now4 = new Date()
console.log(now4.getDay()) // 0'dan başlayacak şekilde 6'ya kadar haftanın kaçıncı gününde bulunduğumuzu verir

const now5 = new Date()
console.log(now5.getHours()) // Saati gösterir

const now6 = new Date()
console.log(now6.getMinutes()) // Dakikayı gösterir

const now7 = new Date()
console.log(now7.getSeconds()) // Saniyeyi gösterir

const now8 = new Date()
const year = now.getFullYear() // yılı döndürür
const month = now.getMonth() + 1 // ayı döndürür (0 - 11) olduğu için +1 ekliyor
const date = now.getDate() // günü döndürür (1 - 31)
const hours = now.getHours() // sayıyı döndürür (0 - 23)
const minutes = now.getMinutes() // sayıyı döndürür (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // Gün/Ay/Yıl Saat:Dakika 