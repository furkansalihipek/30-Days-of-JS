# JavaScript Higher Order Function

Yüksek dereceden (high order) fonksiyonlar, parametre olarak başka bir fonksiyonu içerisine alan veya bir başka fonksiyonu değer olarak döndürebilen fonksiyonlardır.

Bir fonksiyon parametre olarak geçilebiliyorsa bu fonksiyona ise **callback** fonksiyon denir.

### Callback
```js
const callback = (n) => {
    return n ** 2
}

// bir başka fonksiyonu callback olarak alan fonksiyon
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))
```

### Returning function

Yüksek dereceden fonksiyonlar bir fonksiyonu değer olarak geri döndürebilir.

```js
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
    let sum = 0
    const callback = function (element) {
        sum += element
    }
    arr.forEach(callback)
    return sum

}
console.log(sumArray(numbers))
```

### Setting time

JavaScript'te bazı fonksiyonları belirli bir zaman aralığında yürütebiliriz veya bazı fonksiyonları yürütmek için belirli bir süre planlama (bekleme) yapabiliriz.

- setInterval
- setTimeout

#### **setInterval** fonksiyonu ile süre ayarlama

```js
function sayHello() {
    console.log('Hello')
}
setInterval(sayHello, 1000) // saniyede 1 Hello yazdırır
```

#### **setTimeout** ile zaman ayarlama

```js
// setTimeout ile zaman ayarlama
function sayMerhaba() {
    console.log('Merhaba')
}
setTimeout(sayMerhaba, 2000) //2 saniye bekledikten sonra "Merhaba" yazdıracak
```

## Functional Programming - Fonksiyonel Programalama

JavaScript'in en son sürümü, normal döngü yazmak yerine karmaşık sorunları çözmemize yardımcı olabilecek birçok yerleşik yöntem sunmuştur. forEach, map, filter, find, every, some, and sort metodlarını göreceğiz

### forEach

_forEach_: Bir dizi elemanlarını sırasıyla gezer. "element", "index" ve dizinin kendisi ile callback fonksiyonunu parametre olarak alabilir

```js
let sum = 0;
const numbers1 = [2, 3, 4, 5, 6];
numbers1.forEach(num => sum += num)

console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))
```

### map

_map_: Bir dizi elemanını yinelemek ve dizi öğelerini değiştirmek. callback fonksiyonla birlikte "elements", "index" yeni bir diziyi parametre olarak alabilir.

```js
const numbers2 = [1, 2, 3, 4, 5]
const numbersSquare = numbers2.map((num) => num * num)

console.log(numbersSquare)
```
### Filter

_Filter_: Dizi içerisinden istediğimiz koşullara uyan elemanları filtreleyerek geri döndürür

```js
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
    'Kenya',
]
const countriesContainingLand = countries1.filter((country) =>
    country.includes('land')
)
console.log(countriesContainingLand) // "land" ifadesini içeren ülkeler
```

### every

_every_:  Tüm elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Booelan türünde geri dönüş yapar

```js
const num = [4, 6, 7, 92, 1]
const areAllNum = num.every((num) => typeof num === "number") // hepsi sayı mı?

console.log(areAllNum)
```

### find

_find_: İstenilen koşulu karşılayan ilk elemanı geri döndürür.

```js
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)
```

### findIndex

_findIndex_: koşulu karşılayan ilk elemanın index değerini döndürür.

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages1 = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age1 = ages1.findIndex((age) => age < 20)
console.log(age1) // 5
```

### some

_some_: Bazı elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Boolean türünde geri dönüş yapar.

```js
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true
```

### sort

_sort_: Bir diziyi, öğelerini dizelere dönüştürür ve bu dizeleri alfabetik olarak sıralar. Yeni bir dizi oluşturmadan eldeki olan diziyi düzenler

```js
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products)
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
```