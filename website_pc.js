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
    kor_text[2].innerText=  "Yes To Slide와 함께 추억을 나누세요";
    kor_text[3].innerText = "참가하는 모두가 VIP입니다";
    document.querySelector(".coordinate_start").innerText="진행자로 시작";
    document.querySelector(".participate_start").innerText="참가자로 시작";

}

function eng()
{
    eng_btn.style.color="white";
    kor_btn.style.color="rgb(255, 255, 255, 0.5)";
    kor_text[2].innerText=  "Share your memories with Yes To Slide";
    kor_text[3].innerText = "Everyone participating is VIP";
    document.querySelector(".coordinate_start").innerText="Coordinator";
    document.querySelector(".participate_start").innerText="Participant";
}