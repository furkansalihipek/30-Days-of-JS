// Primitive Data Types (Değeri değiştirilemez)
let word = 'JavaScript'
word[0] = 'Y'

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo) // true çıktısı alırız çünkü Primitive Data Types değerine göre karşılaştırılır

let js = 'JavaScript'
let py = 'Python'

console.log(js == py) // false

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff)  // false

//Non-Primitive Data Types (Değeri değiştirilebilir)
let nums1 = [1, 2, 3, 4]
let nums2 = [1, 2, 3, 4]
console.log(nums1);

nums1[0] = 5;
console.log(nums1);

console.log(nums1 == nums2); // false çıktısı alırız çünkü Non-Primitive Data Types referansına göre karşılaştırılır 


let user1 = {
    name: "Furkan",
    surname: "İpek",
}

let user2 = {
    name: "Furkan",
    surname: "İpek"
}

console.log(user1 == user2); // false 


let number1 = [1, 2, 3, 4]
let number2 = number1

console.log(number1 == number2); // true çıktısı alırız çünkü number2 number1'i referans alıyor

let userOne = {
    name: "Furkan",
    surname: "İpek",
}

let userTwo = userOne

console.log(userOne == userTwo); // true

// Number Data Types 
let age = 35;
const Pi = 3.14; // sabit değer
let mass = 58;  // değişebilen değer


// Math Object
const PI = Math.PI
console.log(PI);

console.log(Math.round(PI));  // Math.round yuvarlama en yakın tam sayıya yuvarlama işlemi için kullanılır
console.log(Math.floor(PI)); // Math.floor girdiğimiz değere en yakın bir küçük tam sayıya yuvarlamak için kullanılır
console.log(Math.ceil(PI)); // Math.floor girdiğimiz değere en yakın bir büyük tam sayıya yuvarlamak için kullanılır

console.log(Math.min(-1, 3, 5, 13, -4, -43)); // Sayı kümesindeki en küçük değeri döndürür
console.log(Math.max(-1, 3, 5, 13, -4, -43)); // Sayı kümesindeki en büyük değeri döndürür


const randomNum = Math.random // 0-1 arasında random değerler döndürür

const num = Math.floor(Math.random() * 11); // 0-10 arasında random değer döndürür
console.log(num);

console.log(Math.abs(-20)); // Girilen değerin mutlak değerini alır
console.log(Math.sqrt(25)); // Girilen değerin karekökünü alır
console.log(Math.pow(3,3)); // İlk girilen değeri ikinci girilen değer kadar çarpar (Üs alır) 3 ** 3 şeklinde de yapılabilir

Math.log(10) // Logaritma
//Trigonometri
Math.sin(0)
Math.cos(60)

// Strings
let space = " " // String boş değer alabilir
let name = "Furkan"

// Stirngs Concatenation (String Birleştirme)
let firstName = "Furkan";
let lastName = "İpek";

let fullName1 = firstName + lastName
console.log(fullName1); // Furkanİpek

let fullName2 = firstName + " " + lastName;
console.log(fullName2); // Furkan İpek

let fullName3 = `${firstName} ${lastName}`;
console.log(fullName3);

let paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph) // Tek satıra sığmayacak uzunlukta bir şey tanımlıyorsak "\" işareti ile istediğimiz uzunlukta tanımlama yapabilriz

let prag = "1\n2\n3" // \n ile yeni satıra geçilir
console.log(prag);

// \n: new line
// \t: Tab, means 8 spaces
 // \\: Back slash
// \': Single quote (')
// \": Double quote (")

let Js = "Javascript"
console.log(Js.length) // 10

let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter) // J

let secondLetter = string[1] // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter) // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex]) // t

let str = 'JavaScript'

console.log(string.toUpperCase()) // JAVASCRIPT
console.log(string.toLowerCase()) // javascript
console.log(string.substr(4,6)) // Script
console.log(string.substring(0,4)) // Java
console.log(string.substring(4,10)) // Script
console.log(string.substring(4))  // Script


let ad = 'Furkan' 

console.log(ad.toUpperCase()) // FURKAN
console.log(ad.toLowerCase()) // furkan

console.log(ad.split())    // ["Furkan"]
console.log(ad.split(''))  // ["F", "u", "r", "k", "a", "n"]

let string1 = '   30 Days Of JavaScript   '

console.log(string1)
console.log(string1.trim(' '))

let country = 'Turkey'
console.log(country.charAt(3)) // k
console.log(country.charCodeAt(3)) // ASCII Kod 171

console.log(country.includes('tur'))     // false
console.log(country.includes('Tur'))     // true
console.log(country.includes('key'))    // true
console.log(country.includes('Key'))    // false

let string2 = '30 Days Of JavaScript'
console.log(string2.replace('JavaScript', 'Python')) // 30 Days Of Python

let string3 = 'Merhaba Furkan \nNasılsın Furkan?'
console.log(string3.replaceAll('Furkan', 'Salih')); // Merhaba Salih Nasılsın Salih?

// indexOf(): Bir alt dize alır ve eğer alt dize bir dizede mevcutsa, alt dizenin ilk konumunu döndürür, yoksa -1 değerini döndürür.
let string4 = '30 Days Of JavaScript'

console.log(string4.indexOf('D'))          // 3
console.log(string4.indexOf('Days'))       // 3
console.log(string4.indexOf('days'))       // -1
console.log(string4.indexOf('a'))          // 4
console.log(string4.indexOf('JavaScript')) // 11
console.log(string4.indexOf('Script'))     //15
console.log(string4.indexOf('script'))     // -1

//lastIndexOf(): Bir alt dize alır ve eğer alt dize bir dizede mevcutsa, alt dizenin son konumunu döndürür, yoksa -1 değerini döndürür.
let string5 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string5.lastIndexOf('love'))       // 67
console.log(string5.lastIndexOf('you'))        // 63
console.log(string5.lastIndexOf('JavaScript')) // 38

// startWith: argüman olarak bir alt dize alır ve dizenin belirtilen alt dizeyle başlayıp başlamadığını kontrol eder. Doğru veya yanlış döndürür.

let string6 = 'Love is the best to in this world'

console.log(string6.startsWith('Love'))   // true
console.log(string6.startsWith('love'))   // false
console.log(string6.startsWith('world'))  // false

// endWith: argüman olarak bir alt dize alır ve dizenin belirtilen alt dizeyle bitip bitmediğini kontrol eder. doğru veya yanlış döndürür.
let string7 = 'Love is the most powerful feeling in the world'

console.log(string7.endsWith('world'))         // true
console.log(string7.endsWith('love'))          // false
console.log(string7.endsWith('in the world')) // true

// search: argüman olarak bir alt dize alır ve ilk eşleşmenin dizinini döndürür. Arama değeri bir dize veya normal ifade modeli olabilir.
let string8 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string8.search('love'))          // 2
console.log(string8.search(/javascript/gi))  // 7


let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

let name1 = "Furkan"
console.log(name1.repeat(10)) //FurkanFurkanFurkanFurkanFurkanFurkanFurkanFurkanFurkanFurkan