//한글 english
var kor_btn = document.querySelector(".kor");
var eng_btn = document.querySelector(".eng");
kor_btn.addEventListener("click",()=>{
    kor();
})


eng_btn.addEventListener("click",()=>{
    eng();
})

function kor()
{
    kor_btn.style.color="white";
    eng_btn.style.color="rgb(255, 255, 255, 0.5)";
}

function eng()
{
    eng_btn.style.color="white";
    kor_btn.style.color="rgb(255, 255, 255, 0.5)";
}