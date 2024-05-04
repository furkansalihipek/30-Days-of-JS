// Destructing ve Spread
// Destructer, dizileri ve nesneleri açmanın ve farklı değişkenlere atamanın bir yoludur
// Destructing Dizilerde Kullanımı
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

console.log(fullStack)
console.log(frontEnd)
console.log(backEnd)

// Eğer dizideki değerleri atlanması isteniyorsa virgül(,) işareti kullanmak gerekir
const nums = [1, 2, 3]
let [numberOne, , numberThree] = nums // 2 atlandı

console.log(numberOne, numberThree)

const names = [undefined, 'Brook', 'David']
let [
    firstPerson = 'Asabeneh',
    secondPerson,
    thirdPerson,
    fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)

// Dizideki tüm elemanlara değişken atanmayabilir. İlkinin birkaçını yok edip ve kalanını spread operatörünü (...) kullanarak dizi olarak alabiliriz
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = number

console.log(num1, num2, num3)
console.log(rest)

// Iterasyon sırasında Destructuring
const countrieAndCity = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countrieAndCity) {
    console.log(country, city)
}

const full_stack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (const [first, second, third] of full_stack) {
    console.log(first, second, third)
}

// Objeye Destructuring işlemi yapma
// Destruct işleminde kullandığımız değişkenin adı, nesnenin anahtarı veya özelliği ile tamamen aynı olmalıdır
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)

// Yapılandırma sırasında yeniden adlandırma
const rectangle1 = {
    width: 20,
    height: 10,
    area: 200
}
let { width: w, height: h, area: a, perimeter: p } = rectangle1

console.log(w, h, a, p)

// Spread veya Rest Operatörleri
// Dizi ogelerinin geri kalanını almak için spread operatörü
const countries = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries

console.log(gem)
console.log(fra)
console.log(nordicCountries)

// Diziyi kopyalamak için spread operatörü
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

// Nesneyi kopyalamak için spread operatörü
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki'
}

const copiedUser = { ...user }
console.log(copiedUser)