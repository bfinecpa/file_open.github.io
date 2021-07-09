window.onload = function(){
    var set = document.querySelector(".setting_btn");
    var set_img = set.getElementsByTagName("img")[0];
    var collect_img= document.querySelector(".collect_btn").getElementsByTagName("img")[0];
    var openfile_img= document.querySelector(".file_btn").getElementsByTagName("img")[0];
    var parti_img= document.querySelector(".ptct_btn").getElementsByTagName("img")[0];
    var image_img= document.querySelector(".picture_btn").getElementsByTagName("img")[0];
    var manual_btn = document.querySelector(".manual_btn");


    set_img.addEventListener("click", () => {
        sett_on_off();
    })
    collect_img.addEventListener("click", () => {
        colleting_onoff();
    })
    openfile_img.addEventListener("click", () => {
        openfile_onoff();
    })
    parti_img.addEventListener("click", () => {
        parti_onoff();
    })
    image_img.addEventListener("click", () => {
        image_onoff();
    })
    manual_btn.addEventListener("click",() => {
        change_manual();
    })

    function sett_on_off(){
        if(set_img.src.match("m_settings_off@2x"))
        {
            set_img.src="mob_controll_img/m_settings_on@2x.png";
        }
        else
        {
            set_img.src="mob_controll_img/m_settings_off@2x.png";
        }
    }

    function colleting_onoff()
    {
        if(collect_img.src.match("button_collecting_off@2x"))
        {
            collect_img.src="mob_controll_img/button_collecting_on@2x.png";
        }
        else
        {
            collect_img.src="mob_controll_img/button_collecting_off@2x.png";
        }
    }

    function openfile_onoff(){
        if(openfile_img.src.match("button_openfile_off@2x"))
        {
            openfile_img.src="mob_controll_img/button_openfile_on@2x.png";
        }
        else
        {
            openfile_img.src="mob_controll_img/button_openfile_off@2x.png";
        }
    }

    function parti_onoff(){
        if(parti_img.src.match("button_participants_off@2x"))
        {
            parti_img.src="mob_controll_img/button_participants_on@2x.png";
        }
        else
        {
            parti_img.src="mob_controll_img/button_participants_off@2x.png";
        }
    }
    function image_onoff(){
        if(image_img.src.match("button_images&videos_off@2x"))
        {
            image_img.src="mob_controll_img/button_images&videos_on@2x.png";
        }
        else
        {
            image_img.src="mob_controll_img/button_images&videos_off@2x.png";
        }
    }
    function change_manual(){
        if(!manual_btn.classList.contains("selected_btn"))
        {
            manual_btn.classList.add("selected_btn");
        }
        else if(manual_btn.classList.contains("auto_btn"))
        {
            manual_btn.classList.remove("auto_btn");
            manual_btn.classList.remove("selected_btn");
        }
        else if(manual_btn.classList.contains("selected_btn"))
        {
            manual_btn.classList.add("auto_btn");
        }
        //아니 else if 자리바꾸면 안된고 바꾸면 왜 되냐?
    }
}
