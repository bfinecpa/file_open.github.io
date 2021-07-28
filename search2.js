//data object
let list_data = [
  
  
  {
    list_img:
      "https://docs.google.com/presentation/d/1wJeY0T4ZGlCSyo2YnKiNRSvai84FDd-CdaC9FUJrU-c/preview?rm=minimal&slide=id.SLIDES_API1655905382_0",
    list_file_name: "coordinator_20210702",
    list_profile_img: "./search_img/list_profile.png",
    list_profile_name: "홍길동",
    list_date: "2021년 7월 2일",
    list_desc: "코로나 없는 추억여행",
    total_img: 34,
  },/*
  {
    list_img: "./search_img/img100.jpg",
    list_file_name: "coordinator_20200216",
    list_profile_img: "./search_img/list_profile.png",
    list_profile_name: "김하나",
    list_date: "2020년 2월 16일",
    list_desc: "2020년 겨울 친구들과 함께한 여행",
    total_img: 24,
  },
  {
    list_img: "./search_img/img100.jpg",
    list_file_name: "coordinator_20191230",
    list_profile_img: "./search_img/list_profile.png",
    list_profile_name: "박명수",
    list_date: "2019년 12월 30일",
    list_desc: "작년겨울 가족끼리 모여서 찍은 사진",
    total_img: 18,
  },
  {
    list_img: "./search_img/img100.jpg",
    list_file_name: "coordinator_2021327",
    list_profile_img: "./search_img/list_profile.png",
    list_profile_name: "안산",
    list_date: "2021년 3월 27일",
    list_desc: "생일날 모여서 찍은 사진",
    total_img: 15,
  },*/
];
add_whole_data();

function add_whole_data() {
  if(document.title=="search"){
    //목록형보기 data추가
    add_list_data();
    //썸네일형보기 data추가
    add_thumnails_data();
  }
  else if(document.title=="search_mob"){
    add_mob_list_data();
    add_mob_thumnails_data();
  }
  
}

//목록형 보기 data를 list_contents_ul에 추가
function add_list_data() {
  const ul = document.getElementsByClassName("list_contents_ul")[0];
  let html = "";
  //ul안에 넣을 html 합치기
  list_data.forEach((data, index) => {
    index += 1; //넘버링 1부터 시작
    html += `<div class="list_contents_li">
        <div class="list_file_num">${index < 10 ? "0" + index : index}</div>
        <div class="list_iframe">
          <iframe class="list_file_image" src="${data.list_img}" ></iframe>
          <div class="list_veil"></div>
        </div>
        <div class="list_file_images_num">외 ${data.total_img - 1}장</div>
        <div class="list_file_name">${data.list_file_name}</div>
        <div class="list_file_coordn">
            <img src="${data.list_profile_img}" alt="">
            <div style="width: 8px;"></div>
            ${data.list_profile_name}
        </div>
        <div class="list_file_mdate">${data.list_date}</div>
        <div class="list_file_desc">${data.list_desc}</div>
        <div class="view_down">
            <button class="view_file" onclick="open_presentation('${data.list_img_org}')">
                <img src="./search_img/view_alt_white_24dp.png" alt="">
                <span>파일보기</span>
            </button>
            <div style="height: 8px;"></div>
            <button class="down_file">
                <img src="./search_img/save_alt_white_24dp.png" alt="">
                <span>다운로드</span>
            </button>
        </div>
    </div>`;
  });
  //더한 html을 ul안에 넣기
  ul.innerHTML = html;
}

//썸네일형 보기 data를 thumbnail_contents에 추가
function add_thumnails_data() {
  const ul = document.getElementsByClassName("thumbnail_contents")[0];
  let html = "";
  //row안에 넣을 html 합치기
  list_data.forEach((data, index) => {
    html += `<div class="file_wrap">
        <div class="file_num">${index + 1 < 10 ? "0" + (index + 1) : index + 1}</div>
        <div class="file_description">
          <iframe class="file_thumbnail" src="${data.list_img}" ></iframe>
            <div class="file_image_num">외 ${data.total_img - 1}장</div>
            <div class="file_data">
                <div class="user_icon">
                    <img src="${data.list_profile_img}" alt="">
                </div>
                <div>
                    <div class="file_name">${data.list_file_name}</div>
                    <div class="file_user_date flex-row">
                        <div class="file_user">${data.list_profile_name}</div>
                        <div>&nbsp;&nbsp;|&nbsp;&nbsp;</div>
                        <div class="file_date">${data.list_date}</div>
                    </div>
                </div>
            </div>
            <div class="file_message">${data.list_desc}</div>
            <div class="file_veil"></div>
            <div class="btn_wrap">
            <button>
                <img src="./search_mob_img/save_alt_white_24dp@2x.png" width="26px" height="26px" alt="">
                <div style="width: 8px;"></div>
                파일보기
            </button>
            <div style="width: 9px;"></div>
            <button>
                <img src="./search_mob_img/down_alt_white_24dp@2x.png" width="26px" height="26px" alt="">
                <div style="width: 8px;"></div>
                다운로드
            </button>
        </div>
        </div>
    </div>`;
    //3개 단위로 row안에 넣기
    if (index % 3 == 2) {
      let div = document.createElement("div");
      div.classList.add("contents_row");
      div.innerHTML += html;
      ul.appendChild(div);
      html = "";
    }
  });
  //남은 data 추가
  let div = document.createElement("div");
  div.classList.add("contents_row");
  div.innerHTML += html;
  ul.appendChild(div);
}
function open_presentation(url)
{
  document.querySelector("#org_present").src = url;
  document.querySelector("#tobe_full").classList.remove("d-none");
  document.querySelector("#main_div").classList.add("d-none");

  
}
function close_presentation()
{
  document.querySelector("#org_present").src = "";
  document.querySelector("#tobe_full").classList.add("d-none");
  document.querySelector("#main_div").classList.remove("d-none");
 
}

function search_specific_data() {
  if (!parent.ready_history_data) {
    alert("not ready");
    return;
  }

  document.querySelector(".thumbnail_contents").innerHTML = "";
  var svalue = document.getElementById("search_input").value;
  parent.sunny.find_from_history(svalue,current_search_mode, function (rst) {
    console.log(rst);
    list_data = [];
    var search_sheet = parent.sunny.get_current_search_sheet();
    for (var i = 0; i < rst.length; i++) {
      var each_list_data = {
        list_img: "",
        list_img_org:"",
        list_file_name: "coordinator_20200216",
        list_profile_img: "./search_img/list_profile.png",
        list_profile_name: "김하나",
        list_date: "2020년 2월 16일",
        list_desc: "",
        total_img: 24,
      };
      var url =
        "https://docs.google.com/presentation/d/" +
        rst[i].PresentationID +
        "/preview?slide=id." +
        rst[i].SlideId +
        "&rm=minimal";

      each_list_data.list_img = url;
//https://docs.google.com/presentation/d/12sHoVwWWxdEVVwlUCnZ5Sp5_fKwe4vsAU1_tpQRMKpI/edit#slide=id.SLIDES_API62210478_0
      url =
        "https://docs.google.com/presentation/d/" +
        rst[i].OriginPresent +
        "/edit#slide=id." +
        rst[i].SlideId_Org
        

      each_list_data.list_img_org = url;
      

      if(search_sheet =="Presentations")
      {
        each_list_data.list_profile_name = rst[i].CoordiName;
        each_list_data.list_desc = rst[i].ConferenceExplain;
        each_list_data.list_file_name = rst[i].ConferenceName;
        
      }
      else
      {
        each_list_data.list_profile_name ="";
        each_list_data.list_desc = rst[i].Comment;
      }
        
      list_data.push(each_list_data);

      console.log(url);
    }
    add_whole_data();
  });
  document.getElementById("search_input").value = "";
}









//-----------------------------------------------모바일 일때 가져온 것--------------------------------------------
function add_mob_list_data() {
  const ul = document.getElementsByClassName("list_contents_ul")[0];
  let html = "";
  //ul안에 넣을 html 합치기
  list_data.forEach((data, index) => {
    index += 1; //넘버링 1부터 시작
    html += `<div class="list_contents_li">
    <div class="list_file_num">${index < 10 ? "0" + index : index}</div>
    <div class="list_file_report">
        <div class="list_img_imfo_wrap">
            <div class="list_file_image"> 
                <img src="${data.list_img}" alt="">
            </div>
            <div class="restofimagenum">외 ${data.total_img - 1}장</div>
            <div class="list_file_name">${data.list_file_name}</div>
            <div class="list_file_coordn">
                <img src="${data.list_profile_img}" alt="">
                <div  style="width: 8px;"></div>
                ${data.list_profile_name}
                <div style="margin-left: 5px;">|</div>
            </div>
            <div class="list_file_mdate">${data.list_date}</div>
        </div>
        <div class="list_file_desc">${data.list_desc}</div>
        <div class="btn_wrap">
            <button >
                <img src="./search_mob_img/save_alt_white_24dp@2x.png" width="26px" height="26px" alt="">
                <div style="width: 8px;"></div>
                파일보기
            </button>
            <div style="width: 9px;"></div>
            <button>
                <img src="./search_mob_img/down_alt_white_24dp@2x.png" width="26px" height="26px" alt="">
                <div style="width: 8px;"></div>
                다운로드
            </button>
        </div>
    </div>
</div>`;
  });
  //더한 html을 ul안에 넣기
  ul.innerHTML = html;
}

function add_mob_thumnails_data() {
  const ul = document.getElementsByClassName("thumbnail_contents")[0];
  let html = "";
  //row안에 넣을 html 합치기
  list_data.forEach((data, index) => {
    html += `<div class="file_wrap">
    <div class="file_num">${index + 1 < 10 ? "0" + (index + 1) : index + 1}</div>
    <div class="file_description ">
        <div class="file_thumbnail">
            <img src="${data.list_img}"  alt="">
        </div>
        <div class="file_image_num">외 ${data.total_img - 1}장</div>
        <div class="file_data">
            <div class="user_icon">
                <img src="${data.list_profile_img}" alt="">
            </div>
            <div>
                <div class="file_name"> ${data.list_file_name}</div>
                <div class="file_user_date flex-row">
                    <div class="file_user">${data.list_profile_name}</div>
                    <div>&nbsp;&nbsp;|&nbsp;&nbsp;</div>
                    <div class="file_date">${data.list_date}</div>
                </div>
            </div>
            
        </div>
        <div class="file_message">${data.list_desc}</div>
        <div class="btn_wrap">
            <button>
                <img src="./search_mob_img/save_alt_white_24dp@2x.png" width="26px" height="26px" alt="">
                <div style="width: 8px;"></div>
                파일보기
            </button>
            <div style="width: 9px;"></div>
            <button>
                <img src="./search_mob_img/down_alt_white_24dp@2x.png" width="26px" height="26px" alt="">
                <div style="width: 8px;"></div>
                다운로드
            </button>
        </div>
    </div>
</div>`;
  });
  ul.innerHTML = html;
}

