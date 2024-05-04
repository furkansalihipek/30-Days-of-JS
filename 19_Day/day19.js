// Closure (İç içe fonksiyon)
// JavaScript, bir outer(dış) fonksiyonu içine yazma fonksiyonu izni verir. İstediğimiz kadar inner(iç) fonksiyon yazabiliriz. Inner fonksiyon, outer fonksiyonun değişkenlerine erişiyorsa, buna closure(kapatma) denir.

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())

// Örnek

function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)