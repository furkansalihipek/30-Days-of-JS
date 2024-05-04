// Set & Map
// Set
// Set, elemanlar topluluğudur. Set yalnızca benzersiz öğeler içerebilir
// Boş bir set oluşturma
const empty = new Set()
console.log(empty)

// Diziden set oluşturma
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

// Bir set'e eleman ekleme
const companies = new Set()
console.log(companies.size)

companies.add('Google')
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size)
console.log(companies)

// Bir elemanı set'den silme
// Has methodu bir set'de belirli bir elemanı olup olmadığını kontrol eder true veya false döndürür
console.log(companies.has('Apple'))  // false
console.log(companies.has('Facebook'))  // true

// Set'i temizleme
// Clear methodu set'deki bütün elemanları temizler.
companies.clear()
console.log(companies)

// Set'lerin birleşimi
// iki set nesnesini birleştirmek yayılma operatörü kullanılarak elde edilebilir
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

// Set'lerin kesişimi
// iki set nesnesinin kesişimini bulmak için filter methodu kullanılması gerekir
let d = [1, 2, 3, 4, 5]
let e = [3, 4, 5, 6]

let D = new Set(d)
let E = new Set(e)

let f = d.filter((num) => E.has(num))
let F = new Set(f)

console.log(F)

// Set'lerin farkı
// iki set nesnesinin farkını bulmak için filter methodu kullanılması gerekir
let g = [1, 2, 3, 4, 5]
let h = [3, 4, 5, 6]

let G = new Set(g)
let H = new Set(h)

let k = g.filter((num) => !H.has(num))
let K = new Set(k)

console.log(K)

// Map
// Boş map oluşturma
const emptyMap = new Map()
console.log(emptyMap)

// Bir diziden map oluşturma
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)

// Map'e değerler ekleme
const countriesMap = new Map()
console.log(countriesMap.size)
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

// Map'ten değer alma
console.log(countriesMap.get('Finland'))

// Map içindeki anahtarı kontrol etme
// Eğer Map içinde bir anahtarın olup olmadığını kontrol etmek istiyorsak has methodunu kullanabiliriz
console.log(countriesMap.has('Finland'))