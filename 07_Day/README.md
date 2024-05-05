# JavaScript Fonskiyonlar (Functions)

### Klasik fonksiyon tanımlama
```js
function functionName() {

}
functionName()
```

### İsimsiz Fonksiyon
Expression Function: Expression function, isimsiz fonksiyonlardır.
    
İsimsiz bir fonksiyon oluşturduktan sonra bir değişkene atayarak kullanırız. 
      
Fonksiyondan bir değer geri döndürmek için değişkeni çağırmalıyız.

```js
const anonymousFun = function () {
    console.log(
        'Bu bir isimsiz fonksiyon!'
    )
}
```

### Parametresiz ve dönüş değeri olamayan fonksiyon
Fonksiyon, parametre olmadan tanımlanabilir.

**Örnek**

```js
function square() {
    let num = 2;
    let square = num * num;
    console.log(square)
}
square() // 4
```

### Bir değer döndüren fonksiyon

Fonksiyonlar geriye bir değer döndürebilir. bu işlemi `return` anahtar kelimesini kullanarak sağlarız.

**Örnek**

```js
function printFullName() {
    let firstName = "Furkan"
    let lastName = "İpek"
    let fullName = firstName + " " + lastName
    return fullName
}
console.log(printFullName())
```

### Parametreli fonksiyon

Bir fonksiyonda farklı veri türlerini (number, string, boolean, object, function) parametre olarak geçebiliriz.

**Örnek**

```js
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10))
```

### İki parametreli fonksiyon

```js
// iki parametreli fonksiyon
function functionName(parm1, parm2) {
  //istenilen kod parçası
}
functionName(parm1, parm2) //fonksiyonu çağırma sırasında parantezler arasında iki tane parametreye ihtiyaç duyar
```

**Örnek**

```js
function returnFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(returnFullName("Furkan", "İpek"))
```

### Çok parametreli fonksiyon

**Örnek**

```js
// bu fonksiyon, bir diziyi parametre olarak alır ve dizideki sayıları toplar
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];

console.log(sumArrayValues(numbers));
```

### Sınırsız sayıda parametreyle çalışan fonksiyon

Fonksiyonlarla çalışırken kaç tane parametre gerekebileceğini bilemeyebiliriz. Javascript'te bu durumda bize sınırsız sayıda parametre alan fonksiyon yazabilme imkanı tanır. Bu şekilde bir fonksiyon tanımlamanın iki yolu vardır.

#### Klasik fonksiyonda sınırsız sayıda parametre
 
Bu fonksiyonun tanımlanmasını fonksiyon scope'nda object temelli arguments anahtar kelimesi ile erişilir.

**Örnek**
```js
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
```

### Kendi kendine çağırılan fonksiyon

**Örnek**
```js
let squaredNum = function (n) {
    return n * n 
}(7)

console.log(squaredNum)
```

Yukarıdaki fonksiyon, tanımlandıktan hemen sonra çağrılır. Kendi kendini çağıran işlevlerin yararı, global ad alanını karıştırmadan (herhangi bir global bildirmeden) kodu bir kez yürütmemize olanak vermeleridir.

### Arrow Function

Klasik fonksiyona alternatif olarak kullanılan arrow function sözdiziminde ufak bir farklılık vardır. `function` anahtar kelimesi yerine `=>` işareti kullanılır. 

**Örnek**

```js
const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// kod bloğumuzda sadece bir satır kod varsa bu fonksiyon şu şekilde yazılabilir.
const square = n => n * n  // -> 4
```

### Default parametre ile fonksiyon kullanımı

Bazen parametrelere default değerler geçmek isteyebiliriz. Bu durumda fonksiyon çağırımı sırasında söz konusu parametreyi vermek zorunda olmadan kullanabiliriz. Eğer bu parametreyi vermezsek fonksiyon işlevinin parametrenin default değerini kullanarak tamamlayacaktır.

**Örnek**

```js
function greetings (name = "Furkan") {
    let message = `${name}, Welcome to 30 Day of JavaScript`
    return message;
}
console.log(greetings())
console.log(greetings("Salih"))
```

Arrow fonksiyon ile yazılmış hali

```js
const greetings1 = (name = "Furkan") => {
    let message = name + ", Welcome to 30 Days Of JavaScript"
    return message
}

console.log(greetings1())
console.log(greetings1("Ali"));
```

### Kaynak
30-Days-Of-JavaScript derslerinin tamamı için [Asabeneh'in GitHub reposuna](https://github.com/Asabeneh/30-Days-Of-JavaScript) göz atabilirsiniz.