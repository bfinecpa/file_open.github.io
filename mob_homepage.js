//한글 english
var kor_btn = document.querySelector(".kor");
var eng_btn = document.querySelector(".eng");
var main_line2 = document.querySelector(".main_line2");
var contents_controll = document.querySelector(".contents_controll");
var joinas = document.querySelector(".joinas");

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
    main_line2.innerText=  "Yes To Slide로 좋은 사람들과 즐거운 순간을 함께 해요.";
    document.querySelector(".coordi_btn").innerText="진행자로 시작";
    document.querySelector(".parti_btn").innerText="참가자로 시작";
    main_line2.style.width="280px";
    main_line2.classList.remove("main_line2_eng");
    contents_controll.style.marginTop="58px"
    joinas.style.display="none";
}

function eng()
{
    eng_btn.style.color="white";
    kor_btn.style.color="rgb(255, 255, 255, 0.5)";
    main_line2.innerText=  "Enjoy and share pleasant moments with good people.";
    document.querySelector(".coordi_btn").innerText="Coordinator";
    document.querySelector(".parti_btn").innerText="Participant";
    main_line2.classList.add("main_line2_eng");
    contents_controll.style.marginTop="11px";
    joinas.style.display="block";
}