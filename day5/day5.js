// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Turkish/05_Day_Arrays/05_day_arrays.md

// Diziler

// Array constructor'ı ( yapıcı metot ) kullanmak
const arr = Array()
// ya da let arr = new Array()
console.log(arr) // []

// Köşeli parantez kullanmak[]
// Bu boş bir dizi oluşturmak için en çok tavsiye edilen yöntemdir
const arr1 = []
console.log(arr)

// Değerlere sahip bir dizi nasıl oluşturulur
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // sayı dizisi
const fruits = ['banana', 'orange', 'mango', 'lemon'] // string dizisi, meyveler
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // string dizisi, sebzeler
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // string dizisi, ürünler
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // string dizisi, web teknolojileri
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // string dizisi, ülkeler

// Diziyi ve dizinin uzunluğunu yazdırmak
console.log('Numbers:', numbers)
console.log(numbers.length)

console.log('Fruits:', fruits)
console.log(fruits.length)

console.log('Vegetables:', vegetables)
console.log(vegetables.length)

console.log('Animal products:', animalProducts)
console.log(animalProducts.length)

console.log('Web technologies:', webTechs)
console.log(webTechs.length)

console.log('Countries:', countries)
console.log(countries.length)

// Dizinin farklı veri tiplerinde elemanları olabilir

const arr2 = [

    'Furkan',

    250,

    true,

    { country: 'Turkey', city: 'İzmir' },

    { skills: ['HTML', 'CSS', 'JS'] }

]
console.log(arr)

// Split kullanarak dizi oluşturmak
let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(words)


const fruits1 = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // 1. eleman'a o elemanın indexini kullanarak erişiyoruz.
console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon

// Son elemana bu şeklide de ulaşılabilir
let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
console.log(lastFruit) // lemon


const numbers1 = [0, 3.14, 9.81, 37, 98.6, 100] // sayı dizisi

console.log(numbers.length) // Dizinin uzunluğunu verir
console.log(numbers) // [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]) // 0
console.log(numbers[5]) // 100

let lastIndex1 = numbers.length - 1;
console.log(numbers[lastIndex1]) // 100

// Web teknolojilerinin Listesi

const webTechs1 = [

    'HTML',

    'CSS',

    'JavaScript',

    'React',

    'Redux',

    'Node',

    'MongoDB'

]

console.log(webTechs1) // Dizi elemanlarının hepsi
console.log(webTechs1.length) // dizinin uzunluğu
console.log(webTechs1[0]) // HTML
console.log(webTechs1[6]) // MongoDB

let lastIndex2 = webTechs1.length - 1
console.log(webTechs1[lastIndex2]) // MongoDB


// Dizi elemanlarını düzenlemek
const numbers2 = [1, 2, 3, 4, 5]

numbers2[0] = 10  // index 0'daki 1 elemanını 10 elemanı olarak değiştirdik
numbers2[1] = 20  // index 2'deki 2 elemanını 20 elemanı olarak değiştirdik
console.log(numbers2) // [10, 20, 3, 4, 5]

const countries1 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

countries1[0] = 'Türkiye'  // Albania yerini Türkiye aldı
let lastIndex3 = countries1.length - 1
countries1[lastIndex3] = 'Korea'  // Kenya yerini Korea aldı
console.log(countries1)

// Methods for managing arrays

// Array:Bir dizi yaratmak için kullanılır
const arr3 = Array() // boş bir dizi yaratır

console.log(arr3)
const eightEmptyValues = Array(8) // sekiz tane boş değer yaratır
console.log(eightEmptyValues) // [empty x 8]

// fill: Bütün dizi elemanlarını statik değerle doldurur
const arr4 = Array() // Boş bir dizi yaratır
console.log(arr4)

const eightXvalues = Array(8).fill('X') // 'X'değerine sahip 8 tane eleman oluşuturur.
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // '0' değerine sahip 8 tane eleman oluşturur.
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) //'4' değerine sahip 8 tane eleman oluşturur.
console.log(four4values) // [4, 4, 4, 4]

// concat: Dizi birleştirmek için kullanılır

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]


const fruits2 = ['banana', 'orange', 'mango', 'lemon'] // meyveler dizisi
const vegetables1 = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // sebzeler dizisi
const fruitsAndVegetables = fruits2.concat(vegetables1) // iki diziyi birleştirdik

console.log(fruitsAndVegetables)

// indexOf: O elemanın dizide olup olmadığını kontrol eder.Eğer o eleman dizide mevcutsa index numarasını, mevcut değilse -1 döner.

const numbers3 = [1, 2, 3, 4, 5]

console.log(numbers3.indexOf(5)) // 4
console.log(numbers3.indexOf(0)) // -1
console.log(numbers3.indexOf(1)) // 0
console.log(numbers3.indexOf(6)) // -1


// dizide bir banana olup olmadığını kontrol etme
const fruits3 = ['banana', 'orange', 'mango', 'lemon']
let index = fruits3.indexOf('banana') // 0

if (index === -1) {
    console.log('Bu meyve dizide mevcut değil')
} else {
    console.log('Bu meyve dizide mevcut')
}

index === -1 ? console.log('Bu meyve dizide mevcut değil') : console.log('Bu meyve dizide mevcut')

let indexOfAvocado = fruits3.indexOf('avocado') // -1, eğer eleman dizide yoksa -1 döner

if (indexOfAvocado === -1) {
    console.log('Bu meyve dizide mevcut değil')
} else {
    console.log('Bu meyve dizide mevcut')
}

// lastIndexOf: Dizideki son elemanın pozisyonunu verir. Eğer mevcutsa o elemanın index numarasını döner, mevcut değilse -1 döner.

const numbers4 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers4.lastIndexOf(2)) // 7
console.log(numbers4.lastIndexOf(0)) // -1
console.log(numbers4.lastIndexOf(1)) // 6
console.log(numbers4.lastIndexOf(4)) // 3
console.log(numbers4.lastIndexOf(6)) // -1

// includes:Bir dizide bir öğenin olup olmadığını kontrol etmek için kullanılır.Mevcut ise, true değerini döndürür, aksi takdirde false değerini döndürür.

const numbers5 = [1, 2, 3, 4, 5]

console.log(numbers5.includes(5)) // true
console.log(numbers5.includes(0)) // false
console.log(numbers5.includes(1)) // true
console.log(numbers5.includes(6)) // false

const webTechs2 = [

    'HTML',

    'CSS',

    'JavaScript',

    'React',

    'Redux',

    'Node',

    'MongoDB'

]
console.log(webTechs2.includes('Node')) // true
console.log(webTechs2.includes('C')) // false

// Array.isArray: Veri tipinin bir dizi olup olmadığını kontrol etmek için kullanılır.

const numbers6 = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers6)) // true

const number = 100
console.log(Array.isArray(number)) // false

// toString:Diziyi string bir ifadeye çevirir.

const numbers7 = [1, 2, 3, 4, 5]
console.log(numbers7.toString()) // 1,2,3,4,5

const names = ['Furkan', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Furkan,Mathias,Elias,Brook

// Push: Dizinin sonuna eleman ekler.Varolan bir diziye eleman eklemek için push metodunu kullanırız.
const  arr5 = ['item1', 'item2','item3']

arr5.push('new item')
console.log(arr5) // ['item1', 'item2','item3','new item']

// pop: Dizinin sonundaki elemanı siler.
const  numbers8 = [1, 2, 3, 4, 5]

console.log(numbers8) // [1,2,3,4,5]
numbers8.pop() // Dizinin sonundan bir eleman çıkarır.
console.log(numbers8) // [1,2,3,4]

// shift: Dizinin en başındaki elemanı siler.
const  numbers9 = [1, 2, 3, 4, 5]

numbers9.shift() // baştan bir elemanı kaldırır.
console.log(numbers9) // [2,3,4,5]

// unshift: Dizinin başına dizi elemanı ekler.
const  numbers10 = [1, 2, 3, 4, 5]

numbers10.unshift(0) // -> en başa eleman ekler
console.log(numbers10) // -> [0,1,2,3,4,5]

// reverse: Dizi sıralamasını terse çevirir.


const  numbers11 = [1, 2, 3, 4, 5]

numbers11.reverse() // -> ters dizi sırası
console.log(numbers11) // [5, 4, 3, 2, 1]
numbers11.reverse()
console.log(numbers11) // [1, 2, 3, 4, 5]

// Dizi içinde diziler
const  frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const  backEnd = ['Node','Express', 'MongoDB']
const  fullStack = [frontEnd, backEnd]

console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length) // 2
console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]