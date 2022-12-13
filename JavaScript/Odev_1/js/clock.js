// prompt() komutu ile kullanicidan isminin bilgisini alalim.
let userName = prompt("Adınız nedir?")
// kullanicidan aldigimiz bilgiyi "myName" id'sine sahip html elementinin icine yazdiralim.
document.querySelector("#myName").innerHTML = userName;

// days adinda sabit bir degisken tanimlayip icerisine gunleri yazdigimiz bir array atayalim.
const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

// fonksiyonumuzu olusturup icerisine gerekli islemleri yazalim.
function showTime(){
    // Suanki zamanı tanimlayalim.
    let currentDate = new Date();

    // Saat, Dakika ve Saniyeleri tanimlayalim.
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Gunleri tanimyalip day degiskenine atayalim.
    let day = days[currentDate.getDay()];

    // Eger saat, dakika ve saniye 10 dan kucukse basina 0 ekleyerek yazdirsin, degilse degistirmeden aynen yazsin.
    hours = (hours<10) ? `0${hours}`: hours;
    minutes = (minutes<10) ? `0${minutes}`: minutes;
    seconds = (seconds<10) ? `0${seconds}`: seconds;

    // Ekrana yazdirilacak zaman formati
    var timeString = `${hours}:${minutes}:${seconds}`;
    // myClock isimli id'yi cagirip innerHTML ile içine saati ve gunu yazdiralim.
    document.getElementById("myClock").innerHTML = `${timeString} ${day}`;
}
// setInterval() komutu ile fonksiyonumuzu her 1sn (1000ms) de bir surekli calistiralim.
setInterval(showTime, 1000);
// fonksiyonu cagiralim (calistiralim).
showTime();