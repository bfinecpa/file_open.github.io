//클릭시 주황색 테두리
//썸네일형
var file_description = document.querySelectorAll(".file_description");
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
        ph.placeholder=" "+ value + " 입력해주세요";
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
var file_wrap = document.querySelectorAll(".file_wrap");
if(file_wrap.length<9)
{
    for(let i =0 ; i< file_wrap.length; i++)
    { 
        file_wrap[i].querySelector(".file_num").innerText="0"+(i+1);
    }
}
else
{
    for(let i =0 ; i< 9; i++)
    { 
        file_wrap[i].querySelector(".file_num").innerText="0"+(i+1);
    }
    for(let i =9 ; i< list_contents_li.length; i++)
    { 
        file_wrap[i].querySelector(".file_num").innerText=(i+1);
    }
}

//리스트형
var list_contents_li = document.querySelectorAll(".list_contents_li");
if(list_contents_li.length<9)
{
    for(let i =0 ; i< list_contents_li.length; i++)
    { 
        list_contents_li[i].querySelector(".list_file_num").innerText="0"+(i+1);
    }
}
else
{
    for(let i =0 ; i< 9; i++)
    { 
        list_contents_li[i].querySelector(".list_file_num").innerText="0"+(i+1);
    }
    for(let i =9 ; i< list_contents_li.length; i++)
    { 
        list_contents_li[i].querySelector(".list_file_num").innerText=(i+1);
    }
}

//########################################################################

