// Object (Nense)
// Boş bir nesne oluştuma
const empty = {}

// Değeri olan bir nesne oluşturma 
const person = {
    firstName: 'Furkan',
    lastName: 'İpek',
    age: 20,
    country: 'Türkiye',
    city: 'İzmir',
    skills: [
        'HTML',
        'CSS',
        'JavaScript'
    ],
    isMarried: false,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    phoneNumber: '0553 879 32 31'
}
console.log(person)

// Nesneden değerleri alabilmek
// Nesnenin değerine iki şekilde ulaşabiliriz
// . operatörünü kullanarak erişebiliriz
// köşeli parantez kullanarak erişebiliriz

// "." operatörü kullanarak
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.phoneNumber)
console.log(person.location) // undefined

// Köşeli parantez kullanarak
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['phoneNumber'])
console.log(person['age'])
console.log(person['location']) // undefined

// Object için yeni bir anahtar değer (key) oluşturma
person.title = 'Front-End Developer'
console.log(person)

// Object methodları
// Object.assign: Nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır
const copyPerson = Object.assign({}, person)
console.log(copyPerson)

// Object.keys: Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'lastName' 'age', 'country','city', 'skills','title']

// Object.values: Nesnenin key'lerine karşılık gelen değerleri dizi içerisinde almak için kullanılır
const values = Object.values(copyPerson)
console.log(values)

// Object.entries: Bir dizideki key ve value değerlerini almak için kullanılır
const entries = Object.entries(copyPerson)
console.log(entries)

// hasOwnProperty: Bir nesnede belirli bir anahtar veya özelliğin bulunup bulunmadığını kontrol etmek için kullanılır
console.log(copyPerson.hasOwnProperty('firstName'))
console.log(copyPerson.hasOwnProperty('score'))