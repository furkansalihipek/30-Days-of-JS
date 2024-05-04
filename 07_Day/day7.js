// Fonskiyonlar
// Klasik Fonksiyon Tanımlama
function functionName() {

}
functionName()

// İsimsiz Fonksiyon
const anonymousFun = function () {
    console.log(
        'Bu bir isimsiz fonksiyon!'
    )
}

// Expression Function: Expression function, isimsiz fonksiyonlardır.
// İsimsiz bir fonksiyon oluşturduktan sonra bir değişkene atayarak kullanırız. 
// Fonksiyondan bir değer geri döndürmek için değişkeni çağırmalıyız.
const expression = function () {
    console.log("Bu bir expression function türünde fonksiyondur")
}

// Parametresiz ve dönüş değeri olamayan fonksiyon
function square() {
    let num = 2;
    let square = num * num;
    console.log(square)
}
square() // 4

function addTwoNumbers() {
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;
    console.log(sum)
}
addTwoNumbers() // 30

// Bir değer döndüren fonksiyon
function printFullName() {
    let firstName = "Furkan"
    let lastName = "İpek"
    let fullName = firstName + " " + lastName
    return fullName
}
console.log(printFullName())

// Parametreli fonksiyon
// Bir fonksiyonda farklı veri türlerini (number, string, boolean, object, function) parametre olarak geçebiliriz.
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10))

// İki parametreli fonksiyon
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo;
    return sum
}
console.log(sumTwoNumbers(20, 38))

function returnFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(returnFullName("Furkan", "İpek"))

// Çok parametreli fonksiyon
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5]
console.log(sumArrayValues(numbers))

// Sınırsız sayıda parametreyle çalışan fonksiyon 
// Fonksiyonlarla çalışırken kaç tane parametre gerekebileceğini bilemeyebiliriz
// Javascript'te bu durumda sınırsız sayıda parametre alan fonksiyon yazabilme imkanı tanır

// Klasik fonksiyonda sınırsız sayıda parametre
// Bu fonksiyonun tanımlanmasını fonksiyon scope'nda object temelli arguments anahtar kelimesi ile erişilir.
function sumAllNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// Kendi kendine çağırılan fonksiyon
let squaredNum = function (n) {
    return n * n 
}(7)

console.log(squaredNum)

// Yukarıdaki fonksiyon, tanımlandıktan hemen sonra çağrılır
// Kendi kendini çağıran işlevlerin yararı, herhangi bir global bildirmeden kodu bir kez yürütmemize olanak vermeleridir

// Arrow Function
// Klasik fonksiyonla arrow function arasında sözdiziminde ufak bir farklılık vardır. function anahtar kelimesi yerine => işareti kullanılır

const carpim = n => {
    return n * n 
}
console.log(carpim(5))

const carpim1 = n => n * n // Eğer tek satırlık bir fonskiyon yazıyorsak bu şekilde de yazabiliriz
console.log(carpim1(3))

// Arrow function'da sınırsız sayıda parametre
const sumNums = (...args) => {
    let sum = 0;
    for (const elements of args) {
        sum += elements
    }
    return sum
}
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// Default parametre ile fonksiyon kullanımı
function greetings (name = "Furkan") {
    let message = `${name}, Welcome to 30 Day of JavaScript`
    return message;
}
console.log(greetings())
console.log(greetings("Salih"))

// Arrow fonksiyon ile yazılmış hali

const greetings1 = (name = "Furkan") => {
    let message = name + ", Welcome to 30 Days Of JavaScript"
    return message
}

console.log(greetings1())
console.log(greetings1("Ali"));