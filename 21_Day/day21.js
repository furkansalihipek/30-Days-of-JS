// DOM (Document Object Model)
// HTML elementini seçmek için etiket adı, id, sınıf adı veya diğer öznitelikler kullanılır

// getElementsByTagName(): Etiket adına göre elemetleri almak
document.getElementsByTagName("tagname")

const allTitles = document.getElementsByTagName("h1")

console.log(allTitles)
console.log(allTitles.length)

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i])
}

// getElementsByClassName(): Sınıf adına göre elementleri almak
document.getElementsByClassName("classname")

const allTitles1 = document.getElementsByClassName("title")

console.log(allTitles1)
console.log(allTitles1.length)

for (let i = 0; i < allTitles1.length; i++) {
    console.log(allTitles1[i])
}

// getElementById(): Id'ye göre element almak
document.getElementById("id")

let firstTitle = document.getElementById('first-title')
console.log(firstTitle)

// querySelector yöntemi kullanarak elementleri almak: Bu yöntemi kullanarak tagName, Id veya className'e göre HTML elementleri seçilebilir
let firstTitle1 = document.querySelector('h1') // tagName kullanılırsa sadece ilk element seçilir
let firstTitle2 = document.querySelector('#first-title') // first-title id'sine sahip element seçilir
let firstTitle3 = document.querySelector('.title') // title class'ına sahip elementler seçilir

// Nitelik Ekleme
// Yaygın HTML nitelikleri: id, class, src, style, href,disabled, title, alt

const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'

// setAttribute() metodu kullanarak nitelik ekleme
// setattribute() metodu, herhangi bir HTML nitelik ekler İki parametre alır: öznitelik türü ve öznitelik adı
const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')

// SetAttribute olmadan nitelik ekleme
// Normalde bir nitelik atamak için normal nesne atama yöntemini kullanabiliriz ancak bu tüm elemanlar için geçerli olmayabilir. Bazı nitelikler DOM nesnesi özellikleridir ve direk olarak atanabilirler. Örneğin, id ve class gibi.
titles[3].className = 'title'
titles[3].id = 'fourth-title'

// classList kullanarak sınıf ekleme
// Eğer bir sınıf var ise, orijinal sınıfı geçersiz kılmaz, eleman için ek sınıf ekler
titles[3].classList.add('title', 'header-title')

// remove kullanarak sınıfı kaldırma
titles[3].classList.remove('title', 'header-title')

// Element oluşturma
document.createElement("tagname")

// Birden fazla element oluşturmak için döngü kullanılır. Döngülerle istediğimiz kadar elemt oluşturabiliriz
let title
for (let i = 0; i < 3; i++) {
    title = document.createElement('h1')
    title.className = 'title'
    title.style.fontSize = '24px'
    title.textContent = i
    console.log(title)
    document.body.appendChild(title) // Oluşturduğumuz elementi HTML'de görmek için document.body.appendChild() metodunu kullanabiliriz
}

// Elementi kaldırmak istersek ise removeChild() metodunu kullanırız.
const ul = document.querySelector('ul')
const lists = document.querySelectorAll('li')
for (const list of lists) {
    ul.removeChild(list)

}

ul.innerHTML = '' // innerHTML metodunu kullanarak kaldırma

// addEventLiseners ile herhangi bir DOM nesnesine olay dinleyici yöntemi ekleyebiliriz
// HTML öğelerinde farklı olay türlerini dinlemek için addEventListener() yöntemini kullanırız

selectedElement.addEventListener("eventlistner", function (e) {
    // olaydan sonra olmasını istediğiniz aktivite
});

// or

selectedElement.addEventListener("eventlistner", (e) => {
    // olaydan sonra olmasını istediğiniz aktivite
});

// Sık kullanılan olay dinleyicisi türleri

/*
click - eleman tıklandığında
dblclick - eleman çift tıklandığında
mouseenter - fare noktası öğeye girdiğinde
mouseleave - fare işaretçisi öğeden ayrıldığında
mousemove - fare işaretçisi öğe üzerinde hareket ettiğinde
mouseover - fare işaretçisi öğe üzerinde hareket ettiğinde
mouseout - fare işaretçisi öğeden dışarı çıktığında
input - değer giriş alanına girildiğinde
change - giriş alanında değer değiştiğinde
blur - öğe odaklanmadığında
keydown - bir tuş düştüğünde
keyup - bir anahtar bittiğinde
keypress - herhangi bir tuşa bastığımızda
onload - tarayıcı bir sayfayı yüklemeyi bitirdiğinde
*/