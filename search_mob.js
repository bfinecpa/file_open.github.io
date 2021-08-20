//클릭시 주황색 테두리
//썸네일형
var file_description = document.querySelectorAll(".file_description");
var file_thumbnail = document.querySelectorAll(".file_thumbnail");
for(let i = 0; i<file_description.length; i++)
{
    
    file_description[i].addEventListener("click",()=>
    {
        thumb_border_orange_clear();
        file_description[i].classList.add("file_description_focus");
        file_thumbnail[i].style.width="339px";   
    })
}

function thumb_border_orange_clear()
{
    for(let i = 0; i<file_description.length; i++)
    {
        if(file_description[i].classList.contains("file_description_focus")){
            file_description[i].classList.remove("file_description_focus");
            file_thumbnail[i].style.width="341px" 
        }
    }
}

//리스트 형태
var list_file_report = document.querySelectorAll(".list_file_report");
for(let i = 0; i<list_file_report.length; i++)
{
    
    list_file_report[i].addEventListener("click",()=>
    {
        list_border_orange_clear();
        list_file_report[i].classList.add("list_contents_li_focus");
    })
}

function list_border_orange_clear()
{
    for(let i = 0; i<list_file_report.length; i++)
    {
        if(list_file_report[i].classList.contains("list_contents_li_focus")){
            list_file_report[i].classList.remove("list_contents_li_focus"); 
        }
    }
}








//보기 형식에 따른 보기 변화

function change_view(x)
{
    var value= x.value;
    var list_contents = document.querySelector(".list_contents");
    var thumbnail_contents = document.querySelector(".thumbnail_contents");
    var previous_next = document.querySelector(".previous_next");
    if(value=="썸네일형 보기")
        {
            thumbnail_contents.classList.remove("display_none");
            previous_next.classList.remove("display_none");
            list_contents.classList.add("display_none");
        }
    else
    {
        list_contents.classList.remove("display_none");
        thumbnail_contents.classList.add("display_none");
        previous_next.classList.add("display_none");
    }
}

//찾기 클릭시 기준 및 입력 나오기, 닫기 클릭시 닫기

var search_off = document.querySelector(".search_off");
var search_on = document.querySelector(".search_on");
var view_foramt_dropdown = document.querySelector(".view_foramt_dropdown");
var search_dropdown = document.querySelector(".search_dropdown");
var search_text = document.querySelector(".search_text");
var search_date = document.querySelector(".search_date");
var close_btn = document.querySelector(".close_btn");
search_off.addEventListener("click", () => {
    search_off.classList.add("display_none");
    view_foramt_dropdown.classList.add("display_none");
    search_on.classList.remove("display_none");
    search_dropdown.classList.remove("display_none");
    
    close_btn.classList.remove("display_none");
    if(search_dropdown.value=="기간")
    {
        search_date.classList.remove("display_none");
    }
    else{
        search_text.classList.remove("display_none");
    }
})

close_btn.addEventListener("click", () => {
    search_off.classList.remove("display_none");
    view_foramt_dropdown.classList.remove("display_none");
    search_on.classList.add("display_none");
    search_dropdown.classList.add("display_none");
    search_text.classList.add("display_none");
    search_date.classList.add("display_none");
    close_btn.classList.add("display_none");
})

//검색 방식에 따른 placeholder

function change_ph(x)
{
    current_start_idx = 0;
    var value=x.value;
    var search_text= document.querySelector(".search_text");
    var search_date = document.querySelector(".search_date");
    if(value=="기간")
    {
        search_text.classList.add("display_none");
        search_date.classList.remove("display_none")
    }
    else
    {
        search_text.classList.remove("display_none");
        search_date.classList.add("display_none")
        search_text=search_text.getElementsByTagName("input")[0];
        search_text.placeholder=" "+ value + " 입력해주세요";
    }
}


//// 년 월 일에 숫자 넣으면 년 월 일 나오게 끔 하기

var search_year_start = document.getElementById("search_year_from");
var search_month_start = document.getElementById("search_month_from");
var search_day_start = document.getElementById("search_day_from");
var search_year_end = document.getElementById("search_year_to");
var search_month_end = document.getElementById("search_month_to");
var search_day_end = document.getElementById("search_day_to");

search_year_start.oninput= function(){
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}
search_year_start.addEventListener("change",() =>{
    search_year_start.value= search_year_start.value+"년";
})

search_month_start.oninput= function(){
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}
search_month_start.addEventListener("change",() =>{
    search_month_start.value= search_month_start.value+"월";
})
search_day_start.oninput= function(){
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}
search_day_start.addEventListener("change",() =>{
    search_day_start.value= search_day_start.value+"일";
})
search_year_end.oninput= function(){
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}
search_year_end.addEventListener("change",() =>{
    search_year_end.value= search_year_end.value+"년";
})
search_month_end.oninput= function(){
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}
search_month_end.addEventListener("change",() =>{
    search_month_end.value= search_month_end.value+"월";
})
search_day_end.oninput= function(){
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}
search_day_end.addEventListener("change",() =>{
    search_day_end.value= search_day_end.value+"일";
})


//이전 다음 버튼
var contents_row = document.getElementsByClassName("contents_row");
var cur_page;
var previous_btn = document.querySelector(".previous_btn");
var next_btn = document.querySelector(".next_btn");

for ( let i = 0 ; i < contents_row.length; i++)
    {
        if(!contents_row[i].classList.contains("display_none")){
            cur_page = i;
        }
    }
    if(cur_page==0){
        previous_btn.disabled = true;
    }



next_btn.addEventListener("click", () => {
    
    for ( let i = 0 ; i < contents_row.length; i++)
    {
        if(!contents_row[i].classList.contains("display_none")){
            cur_page = i;
        }
    }
    contents_row[cur_page].classList.add("display_none");
    contents_row[cur_page+1].classList.remove("display_none");
    previous_btn.disabled = false;
    if(cur_page==(contents_row.length-2))
    {
        next_btn.disabled=true;
    }
    
})

previous_btn.addEventListener("click", () => {
    
    for ( let i = 0 ; i < contents_row.length; i++)
    {
        if(!contents_row[i].classList.contains("display_none")){
            cur_page = i;
        }
    }
    contents_row[cur_page].classList.add("display_none");
    contents_row[cur_page-1].classList.remove("display_none");
    next_btn.disabled=false
    if(cur_page==1)
    {
        previous_btn.disabled=true;
    }
})

//유저 이름 클릭시 로그아웃 생성
var user_name = document.querySelector(".user_name");
var logout = document.querySelector(".logout");
user_name.addEventListener("click", () => {
    if(logout.style.display=="none")
        logout.style.display="block";
    else
        logout.style.display="none";
})