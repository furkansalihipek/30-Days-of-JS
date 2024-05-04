// JSON
// JSON çoğunlukla bir sunucudan bir istemciye veri gönderildiğinde kullanılır
{
    "users"[
        {
            "firstName": "Asabeneh",
            "lastName": "Yetayeh",
            "age": 250,
            "email": "asab@asb.com"
        },
        {
            "firstName": "Alex",
            "lastName": "James",
            "age": 25,
            "email": "alex@alex.com"
        },
        {
            "firstName": "Lidiya",
            "lastName": "Tekle",
            "age": 28,
            "email": "lidiya@lidiya.com"
        }
    ]
}

// JSON'u JavaScript Nesnesine Dönüştürme
// JSON'u bir nesneye dönüştürmek istediğimizde JSON.parse() kullanırız
//  Nesneyi JSON olarak değiştirmek istediğimizde JSON.stringify() kullanırız
// JSON.parse()
const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`

const usersObj = JSON.parse(usersText, undefined, 4)
console.log(usersObj)

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node'
        ],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    }
}

const txt = JSON.stringify(users, undefined, 4)
console.log(txt)

// JSON.stringify ile Filtre Dizisi Kullanma
const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 250,
    isLoggedIn: false,
    points: 30
}

const text = JSON.stringify(user, ['firstName', 'lastName', 'country', 'city', 'age'], 4)
console.log(text)

