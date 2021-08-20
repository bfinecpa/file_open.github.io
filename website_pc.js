//한글 english
var kor_btn = document.querySelector(".kor");
var eng_btn = document.querySelector(".eng");
var kor_text = document.querySelector(".join_content_wrap").getElementsByTagName("div");
var joinas = document.querySelector(".joinas");
var join_content_wrap = document.querySelector(".join_content_wrap");

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
    kor_text[2].style.fontSize="20px";
    kor_text[2].style.width="500px";
    kor_text[2].innerText=  "Yes To Slide로 좋은 사람들과 즐거운 순간을 함께 해요.";
    document.querySelector(".coordinate_start").innerText="진행자로 시작";
    document.querySelector(".participate_start").innerText="참가자로 시작";
    joinas.style.display="none";
    join_content_wrap.style.marginTop="133px";
}

function eng()
{
    eng_btn.style.color="white";
    kor_btn.style.color="rgb(255, 255, 255, 0.5)";
    kor_text[2].style.fontSize="24px"
    kor_text[2].style.width = "400px";
    kor_text[2].innerText=  "Enjoy and share pleasant moments with good people";
    document.querySelector(".coordinate_start").innerText="Coordinator";
    document.querySelector(".participate_start").innerText="Participant";
    joinas.style.display="block";
    join_content_wrap.style.marginTop="90px";
}