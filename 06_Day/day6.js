// Loops

// for
// for döngüsü, belirli bir koşul sağlandığı sürece belirli bir kod bloğunu tekrar tekrar çalıştıran bir döngü yapısıdır.
for (let i = 0; i <= 5; i++) {
    console.log("i", i)
}

for (let i = 5; i >= 0; i--) {
    console.log("i", i)
}

for (let i = 1; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

const fruit = ["Elma", "Armut", "Portakal", "Mango"]
for (i = 0; i <= 4; i++) {
    console.log(fruit[i])
}

const fruit1 = ["Elma", "Armut", "Portakal", "Mango", "Avokado", "Mandalina"]
for (i = 0; i <= fruit1.length; i++) {
    console.log(fruit1[i])
}

const numbers = [1, 2, 3, 4, 5]
let toplam = 0;
for (let i = 0; i <= numbers.length; i++) {
    toplam += numbers[i]
    console.log(toplam);
}

// while Loop
// while döngüsü belirli bir koşul sağlandığı sürece çalışan bir döngü yapısıdır
i = 0;
while (i <= 5) {
    console.log(i)
    i++
}

// do while
// Döngü bloğunu en az bir kez çalıştırır sonra koşulu kontrol eder ve eğer koşul sağlanıyorsa tekrar çalışmaya devam eder.
do {
    console.log(i)
    i++
} while (i <= 5);

// for of
for (const number of numbers) {
    console.log("Sayı", number)
}

// Break
// Döngüyü durdurmak için kullanılır
for (const meyve of fruit1) {
    if (meyve === "Mango") {
        console.log(`${meyve} bulundu`)
        break
    }
    console.log(meyve)
}

// Continue
// Belirli bir döngü aşamasını atlamak için kullanılır
for (const meyve of fruit1) {
    if (meyve === "Mango") {
        continue
    }
    console.log(meyve)
}