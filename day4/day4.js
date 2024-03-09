// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Turkish/04_Day_Conditionals/04_day_conditionals.md

// If
let num = 3
if (num > 0) {
  console.log(`${num} pozitif bir sayıdır`)
}

let isRaining = true
if (isRaining) {
  console.log('Şemsiye almalıyım')
}

// If Else
let num1 = 3
if (num1 > 0) {
  console.log(`${num1} pozitif bir sayıdır`)
} else {
  console.log(`${num1} negatif bir sayıdır`)
}

num1 = -3
if (num1 > 0) {
  console.log(`${num1} pozitif bir sayıdır`)
} else {
  console.log(`${num1} negatif bir sayıdır`)
}

let isRaining1 = true
if (isRaining1) {
  console.log('Şemsiye almalıyım')
} else {
  console.log('Şemsiye almama gerek yok')
}

isRaining1 = false
if (isRaining1) {
  console.log('Şemsiye almalıyım')
} else {
  console.log('Şemsiye almama gerek yok')
}

// If Else if Else
let a = 0
if (a > 0) {
  console.log(`${a} pozitiftir`)
} else if (a < 0) {
  console.log(`${a} negatiftir`)
} else if (a == 0) {
  console.log(`${a}'a eşit`)
} else {
  console.log(`${a} sayı değildir`)
}

let weather = 'sunny'
if (weather === 'rainy') {
  console.log('Yağmurluk gerekebilir.')
} else if (weather === 'cloudy') {
  console.log('Hava muhtemelen soğuktur, ceket gerekebilir.')
} else if (weather === 'sunny') {
  console.log('Özgürce dışarı çıkabilirsin.')
} else {
  console.log('Yağmurluk gerekmez.')
}

// Switch
let weather1 = 'cloudy'
switch (weather1) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

let dayUserInput = prompt('Haftanın kaçıncı günündeyiz ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case '1':
    console.log('Bu Gün Pazartesi')
    break
  case '2':
    console.log('Bu Gün Salı')
    break
  case '3':
    console.log('Bu Gün Çarşamba')
    break
  case '4':
    console.log('Bu Gün Perşembe')
    break
  case '5':
    console.log('Bu Gün Cuma')
    break
  case '6':
    console.log('Bu Gün Cumartesi')
    break
  case '7':
    console.log('Bu Gün Pazar')
    break
  default:
    console.log('Hata')
}

// Ternary Operatörü
let isRaining2 = true
isRaining2
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')