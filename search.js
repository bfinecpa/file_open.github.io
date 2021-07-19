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
    ph=ph.getElementsByTagName("input")[0];
    ph.placeholder="검색할 "+ value + " 입력해주세요";
}



