// HTML5 Web Storage
// sessionStorage: tarayıcıda verileri oturum boyunca saklayan JavaScript API'sidir. Oturum sona erdiğinde veya tarayıcı kapandığında veriler silinir.
// localStorage: Tarayıcıda verileri kalıcı olarak saklamak için kullanılan bir JavaScript API'sidir.

// localStorage - localStorage nesnesini görüntülemek için
// localStorage.clear() - localStrogedaki her şeyi kaldırmak için
// localStorage.setItem() - verileri localStorage'da depolamak için. Bir anahtar ve bir değer parametresi alır.
// localStorage.getItem() - localStorage'da depolanan verileri görüntülemek için. Parametre olarak bir anahtar alır.
// localStorage.removeItem() - depolanan öğeyi localStorage'dan kaldırmak için. Parametre olarak bir anahtar alır.
// localStorage.key() - localStorage'da depolanan verileri görüntülemek için. Parametre olarak indeks alır.

// Öğeyi localStorage'a ayarlama
// Verileri localStorage'da localStorage.setItem yöntemini kullanarak depolarız.
localStorage.setItem("key", "value")

//String ifadeleri localStorage üzerinde saklama
localStorage.setItem("Name", "Furkan")
console.log(localStorage)

// Number ifadeleri localStorage üzerinde saklama
localStorage.setItem("age", 20)
console.log(localStorage)

// Öğeyi localStorage'dan alma
// localStorage.getItem() yöntemini kullanarak yerel depodan veri alıyoruz.
localStorage.getItem('key')

// localStorage'ı temizleme
localStorage.clear()