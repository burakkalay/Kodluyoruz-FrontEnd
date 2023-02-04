// prompt() komutu ile kullanicidan isminin bilgisini alalim.
let userName = prompt("Adınız nedir?")
// kullanicidan aldigimiz bilgiyi "myName" id'sine sahip html elementinin icine yazdiralim.
document.querySelector("#myName").innerHTML = userName;

// days adinda sabit bir degisken tanimlayip icerisine gunleri yazdigimiz bir array atayalim.
const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

// fonksiyonumuzu olusturup icerisine gerekli islemleri yazalim.
function showTime(){
    // Suanki zamani tanimlayalim.
    let currentDate = new Date();

    // Saat, Dakika ve Saniyeleri tanimlayalim.
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Gunleri tanimyalip day degiskenine atayalim.
    let day = days[currentDate.getDay()];

    // Tam tarih
    let date = currentDate.getDate();

    // Ayi ve yili tanimlayalim
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();

    // Eger saat, dakika ve saniye 10 dan kucukse basina 0 ekleyerek yazdirsin, degilse degistirmeden aynen yazsin.
    hours = (hours<10) ? `0${hours}`: hours;
    minutes = (minutes<10) ? `0${minutes}`: minutes;
    seconds = (seconds<10) ? `0${seconds}`: seconds;

    // Eger gün ve ay 10 dan kücükse basina 0 ekleyerek yazdirsin.
    date = (date<10) ? `0${date}`: date;
    month = (month<10) ? `0${month}`: month;

    // Ekrana yazdirilacak zaman formati
    var timeString = `${hours}:${minutes}:${seconds}`;
    var dateString = `${day} ${month}/${year}`;
    // myClock isimli id'yi cagirip innerHTML ile içine saati, tarihi ve gunu yazdiralim.
    document.getElementById("myClock").innerHTML = `${date}/${month}/${year} ${day} Günü, Saat ${timeString}`;
}
// setInterval() komutu ile fonksiyonumuzu her 1sn (1000ms) de bir surekli calistiralim.
setInterval(showTime, 1000);
// fonksiyonu cagiralim (calistiralim).
showTime();
