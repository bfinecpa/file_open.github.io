//클릭시 주황색 테두리

var file_description = document.querySelectorAll(".file_description");
for(let i = 0; i<file_description.length; i++)
{
    
    file_description[i].addEventListener("click",()=>
    {
        border_orange_clear();
        file_description[i].classList.add("file_description_focus");
        file_description[i].getElementsByTagName("img")[0].style.width="336px";   
    })
}

function border_orange_clear()
{
    for(let i = 0; i<file_description.length; i++)
    {
        if(file_description[i].classList.contains("file_description_focus")){
            file_description[i].classList.remove("file_description_focus");
            file_description[i].getElementsByTagName("img")[0].style.width="340px" 
        }
    }
}

//검색 방식에 따른 placeholder
function change_ph(x)
{
    var value=x.value;
    var ph= document.querySelector(".search_text");
    var search_text = document.getElementsByClassName("search_text");
    if(value=="날짜")
    {
        search_text[0].classList.add("display_none");
        search_text[1].classList.remove("display_none")
    }
    else
    {
        search_text[0].classList.remove("display_none");
        search_text[1].classList.add("display_none")
        ph=ph.getElementsByTagName("input")[0];
        ph.placeholder="검색할 "+ value + " 입력해주세요";
    }
    
    
}

// 리스트  형태일시 호버시 클릭시 투명도
/*
var list_contents_li = document.getElementsByClassName("list_contents_li")
for(var i = 0; i <list_contents_li.length; i++)
{
    list_contents_li[i].addEventListener("click", ()=>
    {
    
        list_contents_li[i].classList.add("click_background");
    })
}*/ 
// ------------------위에 코드 안됨 이유 찾아야함 ----------------------
    

//보기 형식에 따른

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