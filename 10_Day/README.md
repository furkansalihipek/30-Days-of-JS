# JavaScript Set and Map

## Set
  
Set, elemanlar topluluğudur. Set yalnızca benzersiz öğeler içerebilir.

### Boş bir set oluşturma

```js
const empty = new Set()
console.log(empty)
```

### Diziden set oluşturma

```js
const languages = [
    'English',
    'Turkish',
    'French',
    'Spanish',
    'English',
    'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)
```

### Bir set'e eleman ekleme

```js
const companies = new Set() // Boş bir set
console.log(companies.size) // 0

companies.add('Google')
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5
console.log(companies)
```

### Bir elemanı set'den silme
  
Set'den delete methodunu kullanrak bir eleman silebiliriz.
  
```js
console.log(companies.delete('Google'))
console.log(companies.size)  // Set'de 4 eleman kaldı
```

### Set'deki bir elemanı kontrol etme
  
Has methodu bir set'de belirli bir elemanı olup olmadığını kontrol eder true veya false döndürür.

```js
console.log(companies.has('Apple'))  // false
console.log(companies.has('Facebook'))  // true
```

### Set'i temizleme

Clear methodu set'deki bütün elemanları temizler.

```js
companies.clear()
console.log(companies)
```

### Set'lerin birleşimi

İki set nesnesini birleştirmek yayılma operatörü kullanılarak elde edilebilir

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)
```

### Set'lerin kesişimi

İki set nesnesinin kesişimini bulmak için filter methodu kullanılması gerekir

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
  
let A = new Set(a)
let B = new Set(b)
  
let c = a.filter((num) = B.has(num))
let C = new Set(c)
  
console.log(C)
```

### Set'lerin farkı

İki set nesnesinin farkını bulmak için filter methodu kullanılması gerekir

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
  
let A = new Set(a)
let B = new Set(b)
  
let c = a.filter((num) = !B.has(num))
let C = new Set(c)
  
console.log(C)
```

## Map
  
### Boş map oluşturma
  
```js
const map = new Map()
console.log(map)
```

### Bir diziden map oluşturma

```js
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)
```

### Map'e değerler ekleme

```js
const countriesMap = new Map()
console.log(countriesMap.size)
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')

console.log(countriesMap)
console.log(countriesMap.size)
```

### Map'ten değer alma

```js
console.log(countriesMap.get('Finland'))
```

### Map içindeki anahtarı kontrol etme

Eğer Map içinde bir anahtarın olup olmadığını kontrol etmek istiyorsak has methodunu kullanabiliriz.

```js
console.log(countriesMap.has('Finland'))
```

### Kaynak
30-Days-Of-JavaScript derslerinin tamamı için [Asabeneh'in GitHub reposuna](https://github.com/Asabeneh/30-Days-Of-JavaScript) göz atabilirsiniz.