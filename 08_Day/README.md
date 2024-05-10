# JavaScript Object (Nesne)

### Boş bir nesne oluşturma

```js
const empty = {}
```
### Değerle birlikte nesne oluşturmak

Şimdi oluşturacağımız person nesnesinin firstName, lastName, age, country, city ve skills gibi bazı özellikleri olacak şekilde oluşturalım. 

```js
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
    phoneNumber: '0553 879 00 00'
}
console.log(person)
```

### Nesneden değerleri alabilmek

Nesnenin değerlerine iki yöntem kullanarak erişebiliriz:

- `.` operatörünü kullanarak erişebiliriz
- köşeli parantez kullanarak erişebiliriz

```js
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
```

### Object için yeni bir anahtar değer (key) oluşturma

```js
person.title = 'Front-End Developer'
console.log(person)
```

## Object Methodları
Bir nesneyi manipüle etmek için farklı yöntemler vardır. Mevcut yöntemlerden bazılarını görelim.

_Object.assign_:Nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır

```js
const copyPerson = Object.assign({}, person)
console.log(copyPerson)
```

#### Object.keys() methodu

_Object.keys_: Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır.

```js
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'lastName' 'age', 'country','city', 'skills','title']
```

#### Object.values() methodu

_Object.values_: Nesnenin key'lerine karşılık gelen değerleri dizi içerisinde almak için kullanılır.

```js
const values = Object.values(copyPerson)
console.log(values)
```

#### Object.entries() methodu

_Object.entries_: Bir dizideki key ve value değerlerini almak için kullanılır.

```js
const entries = Object.entries(copyPerson)
console.log(entries)
```

#### hasOwnProperty() methodu

_hasOwnProperty_: Bir nesnede belirli bir anahtar veya özelliğin bulunup bulunmadığını kontrol etmek için kullanılır.

```js
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))
```

### Kaynak
30-Days-Of-JavaScript derslerinin tamamı için [Asabeneh'in GitHub reposuna](https://github.com/Asabeneh/30-Days-Of-JavaScript) göz atabilirsiniz.