//클릭시 주황색 테두리
//썸네일형
/*var file_description = document.querySelectorAll(".file_description");
for(let i = 0; i<file_description.length; i++)
{
    
    file_description[i].addEventListener("click",()=>
    {
        thumb_border_orange_clear();
        file_description[i].classList.add("file_description_focus");
        file_description[i].getElementsByTagName("img")[0].style.width="336px";   
    })
}

function thumb_border_orange_clear()
{
    for(let i = 0; i<file_description.length; i++)
    {
        if(file_description[i].classList.contains("file_description_focus")){
            file_description[i].classList.remove("file_description_focus");
            file_description[i].getElementsByTagName("img")[0].style.width="340px" 
        }
    }
}

//리스트 형태
var list_contents_li = document.querySelectorAll(".list_contents_li");
for(let i = 0; i<list_contents_li.length; i++)
{
    
    list_contents_li[i].addEventListener("click",()=>
    {
        list_border_orange_clear();
        list_contents_li[i].classList.add("list_contents_li_focus");
    })
}

function list_border_orange_clear()
{
    for(let i = 0; i<list_contents_li.length; i++)
    {
        if(list_contents_li[i].classList.contains("list_contents_li_focus")){
            list_contents_li[i].classList.remove("list_contents_li_focus"); 
        }
    }
}*/








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
    search_text.classList.remove("display_none");
    close_btn.classList.remove("display_none");

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


