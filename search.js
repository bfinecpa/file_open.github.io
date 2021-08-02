//클릭시 주황색 테두리
// 썸네일 일때
var file_description = document.querySelectorAll(".file_description");
for(let i = 0; i<file_description.length; i++)
{
    
    file_description[i].addEventListener("click",()=>
    {
        thumb_border_orange_clear();
        file_description[i].classList.add("file_description_focus");
    })
}

function thumb_border_orange_clear()
{
    for(let i = 0; i<file_description.length; i++)
    {
        if(file_description[i].classList.contains("file_description_focus")){
            file_description[i].classList.remove("file_description_focus");
        }
    }
}
// 리스트형일때
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


//보기 형식에 따른 보기 변화
// 리스트 번호 위치에 맞게 썸네일 순서도 맞춤

function change_view(x)
{
    var value= x.value;
    var list_contents = document.querySelector(".list_contents");
    var thumbnail_contents = document.querySelector(".thumbnail_contents");
    
    var list_page = document.getElementsByClassName("list_page");
    var contents_row = document.getElementsByClassName("contents_row");
    var cur_page;
    var previous_btn = document.querySelector(".previous_btn");
    var next_btn = document.querySelector(".next_btn");

    if(value=="썸네일형 보기")
        {
            for ( let i = 0 ; i < list_page.length; i++)
            {
                if(!list_page[i].classList.contains("display_none")){
                    cur_page = i;
                }
            }
            var cur_filenume=list_page[cur_page].querySelector(".list_file_num").textContent;
            cur_filenume = Number(cur_filenume)/3;
            var changed_num = Math.floor(cur_filenume);
            if(cur_filenume-changed_num==0)
            {
                changed_num = changed_num-1;
            }
            for ( let i = 0 ; i < contents_row.length; i++)
            {
                if(!contents_row[i].classList.contains("display_none")){
                    cur_page = i;
                }
            }
            contents_row[cur_page].classList.add("display_none");
            contents_row[changed_num].classList.remove("display_none");
            //바뀌고 나서 이전 다음 버튼 조정
            if(contents_row.length<2)
            {
                previous_btn.disabled = true;
                inactive_opacity(previous_btn);
                next_btn.disabled = true;
                inactive_opacity(next_btn);
            }
            else if(contents_row.length-1 == changed_num)
            {
                previous_btn.disabled = false;
                active_opacity(previous_btn);
                next_btn.disabled = true;
                inactive_opacity(next_btn);
            }
            else if(changed_num==0)
            {
                previous_btn.disabled = true;
                inactive_opacity(previous_btn);
                next_btn.disabled = false;
                active_opacity(next_btn);
            }
            else{
                previous_btn.disabled = false;
                active_opacity(previous_btn);
                next_btn.disabled = false;
                active_opacity(next_btn);
            }
            thumbnail_contents.classList.remove("display_none");
            list_contents.classList.add("display_none");
            
        }
    else//목록형 보기
    {
        for ( let i = 0 ; i < contents_row.length; i++)
        {
            if(!contents_row[i].classList.contains("display_none")){
                cur_page = i;
            }
        }
        var cur_filenume = contents_row[cur_page].querySelector(".file_num").textContent;
        cur_filenume = Number(cur_filenume)/5;
        var changed_num = Math.floor(cur_filenume);
        if(cur_filenume-changed_num==0)
        {
            changed_num = changed_num-1;
        }
        for ( let i = 0 ; i < list_page.length; i++)
        {
            if(!list_page[i].classList.contains("display_none")){
                cur_page = i;
            }
        }
        list_page[cur_page].classList.add("display_none");
        list_page[changed_num].classList.remove("display_none");
        //바뀌고 나서 이전 다음 버튼 조정
        if(list_page.length<2)
        {
            previous_btn.disabled = true;
            inactive_opacity(previous_btn);
            next_btn.disabled = true;
            inactive_opacity(next_btn);
        }
        else if(list_page.length-1 == changed_num)
        {
            previous_btn.disabled = false;
            active_opacity(previous_btn);
            next_btn.disabled = true;
            inactive_opacity(next_btn);
        }
        else if(changed_num==0)
        {
            previous_btn.disabled = true;
            inactive_opacity(previous_btn);
            next_btn.disabled = false;
            active_opacity(next_btn);
        }
        else{
            previous_btn.disabled = false;
            active_opacity(previous_btn);
            next_btn.disabled = false;
            active_opacity(next_btn);
        }
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


//----------이전 다음 버튼 ---------------------


var list_contents = document.querySelector(".list_contents ");
var thumbnail_contents = document.querySelector(".thumbnail_contents");
var list_page = document.getElementsByClassName("list_page");
var contents_row = document.getElementsByClassName("contents_row");
var cur_page;
var previous_btn = document.querySelector(".previous_btn");
var next_btn = document.querySelector(".next_btn");


if(list_page.length < 2)
{
    previous_btn.disabled = true;
    inactive_opacity(previous_btn);
    next_btn.disabled = true;
    inactive_opacity(next_btn);
}
else{
    //여러개 있을때 기준
for ( let i = 0 ; i < list_page.length; i++)
{
    if(!list_page[i].classList.contains("display_none")){
        cur_page = i;
    }
}
if(cur_page==0){
    previous_btn.disabled = true;
    inactive_opacity(previous_btn);
}
}




next_btn.addEventListener("click", () => {
    if(!(list_contents.classList.contains("display_none")))
    {
        for ( let i = 0 ; i < list_page.length; i++)
        {
            if(!list_page[i].classList.contains("display_none")){
                cur_page = i;
            }
        }
        list_page[cur_page].classList.add("display_none");
        list_page[cur_page+1].classList.remove("display_none");
        previous_btn.disabled = false;
        active_opacity(previous_btn);
        if(cur_page==(list_page.length-2))
        {
            next_btn.disabled=true;
            inactive_opacity(next_btn);
        }
    }

    else if(!(thumbnail_contents.classList.contains("display_none")))
    {
        for ( let i = 0 ; i < contents_row.length; i++)
        {
            if(!contents_row[i].classList.contains("display_none")){
                cur_page = i;
            }
        }
        contents_row[cur_page].classList.add("display_none");
        contents_row[cur_page+1].classList.remove("display_none");
        previous_btn.disabled = false;
        active_opacity(previous_btn);
        if(cur_page==(contents_row.length-2))
        {
            next_btn.disabled=true;
            inactive_opacity(next_btn);
        }
    }

    
})

previous_btn.addEventListener("click", () => {
    if(!(list_contents.classList.contains("display_none")))
    {
        for ( let i = 0 ; i < list_page.length; i++)
        {
            if(!list_page[i].classList.contains("display_none")){
                cur_page = i;
            }
        }

        list_page[cur_page].classList.add("display_none");
        list_page[cur_page-1].classList.remove("display_none");
        next_btn.disabled=false
        active_opacity(next_btn);
        if(cur_page==1)
        {
            previous_btn.disabled=true;
            inactive_opacity(previous_btn);
        }
    }

    else if(!(thumbnail_contents.classList.contains("display_none")))
    {
        for ( let i = 0 ; i < contents_row.length; i++)
        {
            if(!contents_row[i].classList.contains("display_none")){
                cur_page = i;
            }
        }

        contents_row[cur_page].classList.add("display_none");
        contents_row[cur_page-1].classList.remove("display_none");
        next_btn.disabled=false
        active_opacity(next_btn);
        if(cur_page==1)
        {
            previous_btn.disabled=true;
            inactive_opacity(previous_btn);
        }
    }
    
})

// opacity 변경
function inactive_opacity(x)
{
    x.classList.add("inactive");
}

function active_opacity(x)
{
    x.classList.remove("inactive");
}

