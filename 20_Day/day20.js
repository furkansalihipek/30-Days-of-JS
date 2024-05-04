// Temiz Kod Yazımı

// Değişkenler 
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
const PI = Math.PI
const gravity = 9.81

// Diziler
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const languages = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']

// Fonksiyonlar
// Bir kişinin tam adını döndüren fonksiyon
const printFullName = (firstName, lastName) => firstName + ' ' + lastName
// Bir sayının karesini döndüren fonksiyon
const square = (n) => n * n
// Rastgele hexa renkleri oluşturan fonksiyon
const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length)
        hexa += str[index]
    }
    return hexa
}
// Tarih ve saati gösteren bir fonskiyon
const showDateTime = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    const dateMonthYear = date + '.' + month + '.' + year
    const time = hours + ':' + minutes
    const fullTime = dateMonthYear + ' ' + time
    return fullTime
}

// Döngüler
for (let i = 0; i < n; i++) {
    console.log()
}
// Dizi değişkenlerini tanımlıyoruz
const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// Normal for döngüsü kullanarak bir diziyi yineleme
let len = names1.length;
for (let i = 0; i < len; i++) {
    console.log(names1[i].toUpperCase())
}
// for of kullanarak bir diziyi yinelemek
for (const name of names1) {
    console.log(name.toUpperCase())
}
// forEach kullanarak bir diziyi yineleme 
names1.forEach((name) => name.toUpperCase())
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js'],
    isMarried: true
}
for (const key in person) {
    console.log(key)
}

// Nesneler
// nesne değişmezi tanımlama
const person1 = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js'],
    isMarried: true
}
// nesne anahtarları aracılığıyla yineleme
for (const key in person1) {
    console.log(key, person1[key])
}

// Koşullar
// if else
let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
} else {
    console.log(`${num} is a negative number`)
}

// if else if else if else
let a = 0
if (a > 0) {
    console.log(`${a} is a positive number`)
} else if (a < 0) {
    console.log(`${a} is a negative number`)
} else if (a == 0) {
    console.log(`${a} is zero`)
} else {
    console.log(`${a} is not a number`)
}

// ternary (Üçlü)
let isRaining = true
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

// Sınıflar
class Person {
    constructor(firstName, lastName) {
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
    }
}