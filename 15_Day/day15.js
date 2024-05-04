// Classes(Sınfılar)
// Sınıfın Tanımı (Instantiation)
class empty {

}

// Sınıf Örneklemesi
// Sınfıtan nesne oluşturmak için new anahtar kelimesi kullanılır
class ExampleClass {

}
const exampleClassInstance = new ExampleClass();
console.log(exampleClassInstance);


// Sınıf Oluşturucu (Constructor)
class Person {
    constructor(firstName, lastName) {
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person = new Person()

console.log(person)

// Nesnenin tüm anahtarları tanımsızdır(undefined)
const person1 = new Person("Furkan", "İpek")

console.log(person1)

// Person sınıfını kullanarak birden fazla kişi nesnesi oluşturalım
const person2 = new Person("Özgür Adar", "Birgül")
const person3 = new Person("Baran", "Sernikli")
const person4 = new Person("Eda", "Yalçın")

console.log(person2)
console.log(person3)
console.log(person4)

// Sınıfa biraz özelkllik ekleyelim
class User {
    constructor(firstName, lastName, age, conutry, city) {
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.conutry = conutry
        this.city = city
    }
}

const user = new User("Furkan", "İpek", 20, "Türkiye", "İzmir")

console.log(user)

// Constructor ile varsayılan değerler
class defaultValuedClass {
    constructor(
        firstName = "Furkan",
        lastName = "İpek",
        age = 20,
        conutry = "Türkiye",
        city = "İzmir"
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.conutry = conutry
        this.city = city
    }
}

const user1 = new defaultValuedClass()
const user2 = new defaultValuedClass("Lidiya", "Tekle", 28, "Finland", "Espoo")

console.log(user1)
console.log(user2)

// Sınıf methodları
// Bir sınıfın içindeki constructor, nesne için bir tasklak oluşturmamıza izin veren yerleşik bir fonksiyondur
class Person1 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
    getFullName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName
    }
}

const person5 = new Person1("Furkan", "İpek", 20, "Türkiye", "İzmir")
const person6 = new Person1("Lidiya", "Tekle", 28, "Finland", "Espoo")

console.log(person5.getFullName())
console.log(person6.getFullName())
