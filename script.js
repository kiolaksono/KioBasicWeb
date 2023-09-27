/*
    Script.js digunakan untuk melakukan fungsi javascript dimana ketika
    navigation bar di click akan menampilkan artikel yang sesuai dengan
    navigation tersebut. Adapun fungsi juga akan berjalan ketika user
    melakukan scroll page yang akan mengaktifkan navigation bar sesuai
    dengan artikel yang tampil
*/

const links = document.querySelectorAll(".links")
const articles = document.querySelectorAll("article")

function activeMenu(){
    let len=articles.length
    while(--len && window.scrollY < articles[len].offsetTop){}
    links.forEach(ltx => ltx.classList.remove("active"))
    links[len].classList.add("active");
    // console.log("saya", len)
    // console.log("anda", window.scrollY)
    // console.log("itu", articles[len].offsetTop)
    // console.log("ini", --len)

}

activeMenu();
window.addEventListener("scroll", activeMenu); 