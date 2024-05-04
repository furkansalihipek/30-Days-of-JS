// Consol Metotları
// console.log()
// Çıkış tarayıcı konsolunda gösteriliyor
console.log("30 Days of JavaScript")

// CSS
// Günlük mesajına css kullanarak stil verebiliriz. Sonucu görmek için aşağıdaki kodu kopyalayıp tarayıcı konsoluna yapıştırın.
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
    '%c30 Days%c %cOf%c %cJavaScript',
    'color:green',
    '',
    'color:red',
    '',
    'color:yellow'
)

// console.warn()
// Tarayıcıda uyarı vermek için kullanılır
console.warn('This is a warning')
console.warn(
    'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

// console.error() yöntemi bir hata mesajı gösterir
console.error('This is an error message')
console.error('We all make mistakes')

// console.table() yöntemi, verileri konsolda bir tablo olarak görüntüler
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
console.table(user)

// console.info()
// Tarayıcı konsolunda bilgi mesajı görüntüler
console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

// Console.assert() yöntemleri, iddianın yanlış olması durumunda konsola bir hata mesajı yazar
console.assert(4 > 3, '4 is greater than 3')
console.assert(3 > 4, '3 is not greater than 4')

for (let i = 0; i <= 10; i += 1) {
    let errorMessage = `${i} is not even`
    console.log('the # is ' + i)
    console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

// console.group() farklı günlük gruplarının gruplandırılmasına yardımcı olabilir
const names1 = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
const user1 = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]

console.group('Names')
console.log(names1)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

// console.count() işlevinin kaç kez çağrıldığını yazdırır.
const func = () => {
    console.count('Function has been called')
}
func()
func()
func()

// console.clear() tarayıcı konsolunu temizler
console.clear()