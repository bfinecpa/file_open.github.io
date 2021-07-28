//클릭시 주황색 테두리

var file_description = document.querySelectorAll(".file_description");
for(let i = 0; i<file_description.length; i++)
{
    
    file_description[i].addEventListener("click",()=>
    {
        border_orange_clear();
        file_description[i].classList.add("file_description_focus");
    })
}

function border_orange_clear()
{
    for(let i = 0; i<file_description.length; i++)
    {
        if(file_description[i].classList.contains("file_description_focus")){
            file_description[i].classList.remove("file_description_focus");
        }
    }
}

//검색 방식에 따른 placeholder
var current_search_mode = "모든 행사";
function change_ph(x)
{

    var value = x.value;
    current_search_mode = value;
    try {
        parent.sunny.set_current_search_sheet(value);
    } catch (err) {}

    var ph= document.querySelector(".search_text");
    var search_text = document.getElementsByClassName("search_text");
    if(value=="날짜")
    {
        search_text[0].classList.add("display_none");
        search_text[1].classList.remove("display_none")
    }
    else if(value =="모든 행사")
    {
        search_text[0].classList.remove("display_none");
        search_text[1].classList.add("display_none")
        ph=ph.getElementsByTagName("input")[0];
        ph.placeholder="검색을 눌러주세요";
    }
    else
    {
        search_text[0].classList.remove("display_none");
        search_text[1].classList.add("display_none")
        ph=ph.getElementsByTagName("input")[0];
        ph.placeholder="검색할 "+ value + " 입력해주세요";
    }
    
    
}

// 리스트  형태일시 호버시 클릭시 투명도 --> html에 직접 작성
// 여기다 작성하면 이상하게 안됨 


// ------------------위에 코드 안됨 이유 찾아야함 ----------------------

//보기 형식에 따른 보기 변화

function change_view(x)
{
    var value= x.value;
    var list_contents = document.querySelector(".list_contents");
    var thumbnail_contents = document.querySelector(".thumbnail_contents");
    if(value=="썸네일형 보기")
        {
            thumbnail_contents.classList.remove("display_none");
            list_contents.classList.add("display_none");
        }
    else
    {
        list_contents.classList.remove("display_none");
        thumbnail_contents.classList.add("display_none");
    }
}

//파일 갯수에 따른 숫자 증가
//썸네일형

//########################################################################

// 년 월 일에 숫자 넣으면 년 월 일 나오게 끔 하기

var search_year_start = document.getElementById("search_year_start");
var search_month_start = document.getElementById("search_month_start");
var search_day_start = document.getElementById("search_day_start");
var search_year_end = document.getElementById("search_year_end");
var search_month_end = document.getElementById("search_month_end");
var search_day_end = document.getElementById("search_day_end");

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
