//한글 english
var kor_btn = document.querySelector(".kor");
var eng_btn = document.querySelector(".eng");
var kor_text = document.querySelector(".join_content_wrap").getElementsByTagName("div");

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
    kor_text[2].innerText=  "Yes To Slide로 좋은 사람들과 즐거운 순간을 함께 해요.";
    document.querySelector(".coordinate_start").innerText="진행자로 시작";
    document.querySelector(".participate_start").innerText="참가자로 시작";

}

function eng()
{
    eng_btn.style.color="white";
    kor_btn.style.color="rgb(255, 255, 255, 0.5)";
    kor_text[2].innerText=  "Let's have a good time with good people with Yes To Slide.";
    document.querySelector(".coordinate_start").innerText="Coordinator";
    document.querySelector(".participate_start").innerText="Participant";
}