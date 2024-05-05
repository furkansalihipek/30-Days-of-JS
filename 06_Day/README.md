# JavaScript Döngüler (Loops)

## for döngüsü
for döngüsü, belirli bir koşul sağlandığı sürece belirli bir kod bloğunu tekrar tekrar çalıştıran bir döngü yapısıdır.

## Örnek
```js
for (let i = 0; i <= 5; i++) {
    console.log("i", i)
}
```

i değişkeni <= 5 olana kadar tekrar çalışarak her defasında consola i yazar.

## while döngüsü
while döngüsü belirli bir koşul sağlandığı sürece çalışan bir döngü yapısıdır.

## Örnek
```js
i = 0;
while (i <= 5) {
    console.log(i)
    i++
}
```

Bu döngü 0'dan 5'e kadar olan sayıları consola yazar. 

Başlangıca i'nin değeri 0 döngü çalışır. console.log(i) ifadesiyle i'nin değeri consola yazıldıktan sonra i++ ile i'nin değeri 1 arttırılır ve bu döngü i 5'e eşit olasıya kadar çalışmaya devam eder.

## do while döngüsü
Döngü bloğunu en az bir kez çalıştırır sonra koşulu kontrol eder ve eğer koşul sağlanıyorsa tekrar çalışmaya devam eder.

## Örnek
```js
do {
    console.log(i)
    i++
} while (i <= 5);
```

i adında bir değişken oluşturulur ve başlangıç değeri 0 olarak atanır.

do anahtar kelimesiyle başlayan bir döngü bloğu oluşturulur.

Her döngü adımında, console.log(i) ifadesi kullanılarak i değişkeninin değeri konsola yazdırılır.

Daha sonra i değişkeninin değeri i++ ifadesiyle bir artırılır. Bu sayede her döngü adımında i değeri bir artırılarak bir sonraki sayıya geçilir.

Döngü şartı while (i <= 5); kullanılarak i değişkeninin değerinin 5'ten küçük veya eşit olup olmadığı kontrol edilir. Eğer i değişkeninin değeri 5'ten küçük veya eşitse döngü tekrar eder

## for of
Dizi, set, argument nesnesi veya başka bir özelliğin değerlerini üzerinde gezinmek için kullanılan bir döngü yapısıdır.

## Örnek
```js
const numbers = [1, 2, 3, 4, 5]

for (const number of numbers) {
    console.log("Sayı", number)
}
```
numbers dizisinin her bir elemanı için döngü çalıştırılır. Her döngü adımında, o anki eleman number değişkenine atanır.

Döngü her çalıştığında, Sayı kelimesi ve o anki number değeri consola yazılır.

Döngü, numbers dizisindeki tüm elemanlar üzerinde işlem yapana kadar devam eder.

## Break
Döngüyü durdurmak için kullanulır.

## Örnek
```js
const fruit = ["Elma", "Armut", "Portakal", "Mango", "Avokado", "Mandalina"]

for (const meyve of fruit) {
    if (meyve === "Mango") {
        console.log(`${meyve} bulundu`)
        break
    }
    console.log(meyve)
}
```
Döngüde meyve Mangoya eşit olduğunda break komutu ile döngü durdurulur.

## Continue
Belirli bir döngü aşamasını atlamak için kullanılır.
```js
for (const meyve of fruit) {
    if (meyve === "Mango") {
        continue
    }
    console.log(meyve)
}
```
Meyveleri consola yazarken Mangoyu atlayarak devem eder.

### Kaynak
30-Days-Of-JavaScript derslerinin tamamı için [Asabeneh'in GitHub reposuna](https://github.com/Asabeneh/30-Days-Of-JavaScript) göz atabilirsiniz.