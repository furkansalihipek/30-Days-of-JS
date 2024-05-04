// Error Handling
// try : try bloğunda hata oluşturabilecek şüpheli kodu sarın. try ifadesi, yürütülürken hatalar açısından test edilecek bir kod bloğu tanımlamamıza olanak tanır.
// catch : Bir hata oluştuğunda catch bloğuna bir şeyler yapmak için kod yazın. Catch bloğunda size hata bilgisi verecek parametreler bulunabilir. Yakalama bloğu, bir hatayı günlüğe kaydetmek veya kullanıcıya belirli mesajları görüntülemek için kullanılır.
// Finally : Finally blok, bir hatanın oluşmasına bakılmaksızın her zaman yürütülür. Son olarak blok, kalan görevi tamamlamak veya try bloğunda hata oluşmadan önce değişmiş olabilecek değişkenleri sıfırlamak için kullanılabilir.
try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log(err)
}

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log(err)
}

// Catch bloğu bir parametre alır. Bu parametre bir nesnedir ve isim ve mesaj anahtarlarına sahiptir
try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
} finally {
    console.log('In any case I will be executed')
}

// Hata Türleri
// ReferenceError: Geçersiz bir referans oluştu. Bildirilmemiş bir değişken kullanırsak ReferenceError atılır
let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName
console.log(fullName)

// SyntaxError: Bir sözdizimi hatası oluştulet square = 2 x 2
console.log(square)
console.log('Hello, world")

// TypeError: Bir tür hatası oluştu
let num = 10
console.log(num.toLowerCase())