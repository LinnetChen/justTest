// 錨點
$(document).ready(function () {
    $(".box3 img").on("click", function () {
        $("html,body").animate({ scrollTop: $("#section2").offset().top }, 500);
    });
    $(".top").on("click", function () {
        $("html,body").animate({ scrollTop: $("#section1").offset().top }, 500);
    });
});

tab_btn(0);

// 小狗介紹tab
function tab_btn(i) {
    $(".btn img").removeClass("active");
    switch (i) {
        case 0:
            value = char0;
            img = "char0";
            break;
        case 1:
            value = char1;
            img = "char1";
            break;
        case 2:
            value = char2;
            img = "char2";
            break;
        case 3:
            value = char3;
            img = "char3";
            break;
        case 4:
            value = char4;
            img = "char4";
            break;
        case 5:
            value = char5;
            img = "char5";
            break;
    }
    $(".btn").eq(i).find("img").addClass("active");
    $(".text1_box .title").html(value.title1);
    $(".text1_box p").html(value.text1);
    $(".text2_box .title").html(value.title2);
    $(".text2_box p").html(value.text2);
    $(".sec4_box3 .imgBox").html('<img src="img/front/sec4_' + img + '.png">');
}

// sliderL選單
const button = document.querySelector(".button");
const menuList = document.querySelector(".menu_list");

const handleClick = () => {
    menuList.classList.toggle("menu_list--animate");
    $(".triangle").toggleClass("rotate");
}; // 定義點擊事件的監聽函式

button.addEventListener("click", handleClick); // 點擊事件監聽
button.click();

// 滾動出現.隱藏選單
$(document).scroll(function () {
    var topy = $(this).scrollTop();
    if (topy > 400) {
        $(".slideBarL , .slideBarR , .slideBarDown").addClass("appear");
    } else {
        $(".slideBarL , .slideBarR , .slideBarDown").removeClass("appear");
    }
});

// 跳窗
function pop(i) {
    switch (i) {
        case "point_text":
            value = point_text;
            break;
    }
    $(".info .title").html(value.title);
    $(".info .text").html(value.text);
    $(".info .img").html(value.img);
    $("html").css("overflow", "hidden");
    $(".popup").show();
}
function closePopup() {
    $(".popup").fadeOut();
    $("html").css("overflow-y", "scroll");
}

// 手機MENU收起，並到a連結
document.addEventListener("DOMContentLoaded", function () {
    var menuToggleCheckbox = document.querySelector(
        '#menuToggle input[type="checkbox"]'
    );
    var menuLinks = document.querySelectorAll("#menu a");

    // 監聽菜單連結的點擊事件
    menuLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // 取消 #menuToggle 的 checkbox 勾選狀態
            menuToggleCheckbox.checked = false;

            // 取得目標區塊的 id
            var targetId = link.getAttribute("href").substring(1);

            // 找到目標區塊
            var targetElement = document.getElementById(targetId);

            // 如果目標區塊存在，則進行滾動
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                });

                // 阻止預設點擊事件，避免頁面跳轉
                event.preventDefault();
            }
        });
    });
});

// 公告輪播
$('.slickBox').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
});

