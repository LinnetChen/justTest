// 假登入開關
var _loading = 0;
var _login = 0;


// 判定登入.點數.抽次數.兌換道具.集點.抽到的卡

get_setting();

function get_setting() {
    let res = {
        "status": 1,
        "point": 9901,
        "char": [
            {
                "CharID": "0071845",
                "CharName": "minnn"
            }
        ],
        "refresh_num": 0,
        "refresh_list": [
            73,
            74,
            75
        ],
        "accumulate": 151,
        "lottery_content": [
            {
                "id": 19,
                "img": "18",
                "item_name": "保護服裝卷軸",
                "price": 750,
                "sale_price": 593,
                "content": "18"
            },
            {
                "id": 22,
                "img": "21",
                "item_name": "自然家具裝飾組(2天)",
                "price": 69,
                "sale_price": 55,
                "content": "21"
            },
            {
                "id": 39,
                "img": "38",
                "item_name": "極光法棒",
                "price": 500,
                "sale_price": 345,
                "content": "38"
            },
            {
                "id": 27,
                "img": "26",
                "item_name": "黑白小熊軟糖隨機箱",
                "price": 1590,
                "sale_price": 1415,
                "content": "26"
            }
            // {
            //     "id": 0
            // }
        ],
        "stamp": 69
    }
    // $.post('https://webapi.digeam.com//flyff/flyffevent20230614',{
        //     type : 'login',
        //     // user : $(".account").text() // 抓account文字
        
        // },function(res){

            if ( res.status == -99){
                // 沒登入
                $(".stamp1, .stamp2, .stamp3, .stamp4, .stamp5").hide();
                $(".cardBtn").attr("onclick","loginReminder();");
                $(".buyRecord").attr("onclick","loginReminder();");
                $(".buyRecord").removeAttr("data-activity");
                $('.mask2').hide();

        }else if ( res.status == 1 ){
            $('.mask2').hide();
            $('.mask2StageBox >button').attr('style','visibility: hidden;');
            $('.mask2StageBox >button >img').attr('style','visibility: hidden;');
            $('.login').html('登出')

            // 判定道具陣列，播放動畫
            for ( $n = 0 ; $n <=3 ; $n++ ){
                if ( res.lottery_content[$n].id != 0 ){
                    $('.cardBox > .card'+[$n]+'').addClass("turnOverCard");
                    $('.cardFace'+$n+' > .icon').html('<img src="img/icon/icon_img'+res.lottery_content[$n].img+'.png">');
                    $('.cardFace'+$n+' > .iconPrice1').html('原價'+res.lottery_content[$n].price+'');
                    $('.cardFace'+$n+' > .iconPrice2').html('折扣價'+res.lottery_content[$n].sale_price+'');
                    $('.buttonBox'+$n+' > .detailed ').attr('onclick','cardDetail('+res.lottery_content[$n].content+')')
                    $('.buttonBox'+$n+' > .iconBuy ').attr('onclick','buy('+res.lottery_content[$n].content+')')

                    var Entity_num = [65,66]
                    function checkNum3(Entity_num){
                        return Entity_num == (res.lottery_content[$n].img);
                    }
                    if( Entity_num.some(checkNum3) == true ){
                        $('.cardFace'+$n+' > .iconName').html(''+res.lottery_content[$n].item_name+'(僅限台灣地區玩家領取)');
                    }else{
                        $('.cardFace'+$n+' > .iconName').html(''+res.lottery_content[$n].item_name+'');
                    }
                }
                
            }
            
            // 抓角色
            if ( res.char.length == 0 ) {
                $(".charSelect option").remove();
                $(".charSelect").append(
                $("<option></option>").attr("value", "0").text("請選擇角色"));
            } else {
                $(".charSelect option").remove();
                $(".charSelect").append(
                $("<option></option>").attr("value", "0").text("請選擇角色"));
                res.char.forEach((i) => {
                $(".charSelect").append(
                    $("<option></option>").attr("value", i.CharID).text(i.CharName));
                });
            }
            $('.pointsBox > span').html(res.point);

            // 階段獎勵
            if( res.accumulate > 0 && res.refresh_list.length > 0 ){
                //印翻卡值
                $('.stageText > span').html(res.accumulate);
                if( res.accumulate== 1 || res.accumulate==50 || res.accumulate== 100 || 
                    res.accumulate== 150 || res.accumulate==250 || res.accumulate== 350 || res.accumulate==500 ){
                        $('.mask2').show();
                        $('.mask2StageBox >button:nth-child('+(res.refresh_list.length+1)+')').attr('style','visibility: visible;');;
                        $('.mask2StageBox >button:nth-child('+(res.refresh_list.length+1)+')').attr('onclick','stageExchange('+res.refresh_list.length+')');
                        $('.mask2StageBox >button:nth-child('+(res.refresh_list.length+1)+') >img').attr('style','visibility: visible;');;
                        // $('.mask2StageBox').html('<button onclick="stageExchange('+res.refresh_list+')"><img class="halo" src="img/stageIcon'+(res.refresh_list.length+1)+'.png"></button>');
                        // $('.stageLine > .box > .stage'+(res.refresh_list.length)+'').html('<button onClick="stageExchange('+res.refresh_list+')"><img class="halo" src="img/stageIcon'+(res.refresh_list.length+1)+'.png"></button>');
                    }
                // 獎勵已兌換，換圖
                for( $i = 0 ; $i < res.refresh_list.length ; $i++ ){
                    $('.stageLine > .box > .stage'+$i+'').html('<img src="img/stageRedeened'+($i+1)+'.png">');
                }
                
            }

            // 集點卡印章
            $(".stamp1, .stamp2, .stamp3, .stamp4, .stamp5").hide();
            if( res.stamp > 0 ){
                if ( res.stamp == 68 ){
                    $(".stamp1").show();
                }else if( res.stamp == 69 ){
                    $(".stamp1, .stamp2").show();
                }else if( res.stamp == 70 ){
                    $(".stamp1, .stamp2, .stamp3").show();
                }else if( res.stamp == 71 ){
                    $(".stamp1, .stamp2, .stamp3, .stamp4").show();
                }else if( res.stamp == 72 ){
                    $('.mask2').show();
                    // 集點卡增加zindex
                    var pointCardBoxZ = document.querySelector('.pointCardBox');
                    pointCardBoxZ.style.zIndex = 3;
                    $(".stamp1, .stamp2, .stamp3, .stamp4, .stamp5").show();
                    $('.pointCard').attr('onclick','pointCardExchange()');
                    $('.pointCard').addClass('pointCard_Animation');
                }
            }

            // 印抽卡資料
            // for( $c = 0 ; $c < 4 ; $c++ ){
            //     $('.cardFace'+$c+' > .icon').html('<img src="img/icon/icon_img'+res.lottery_content[$c].img+'.png">');
            //     $('.cardFace'+$c+' > .iconName').html(''+res.lottery_content[$c].item_name+'');
            //     $('.cardFace'+$c+' > .iconPrice1').html('原價'+res.lottery_content[$c].price+'');
            //     $('.cardFace'+$c+' > .iconPrice2').html('折扣價'+res.lottery_content[$c].sale_price+'');
            //     $('.buttonBox'+$c+' > .detailed ').attr('onclick','cardDetail('+res.lottery_content[$c].content+')')
            //     $('.buttonBox'+$c+' > .iconBuy ').attr('onclick','buy('+res.lottery_content[$c].content+')')
            // }

            // 免費.付費次數顯示
            if ( res.refresh_num > 0 ){
                $(".cardBtnBox > .cardBtn > .text ").html("每日免費"+res.refresh_num+"次");
            }else {
                $(".cardBtnBox > .cardBtn > .text ").html("消耗5點數抽卡1次");
            }
            // 抽卡API函式
            $('.cardBtn').attr("onclick","lotteryReminder("+res.refresh_num+");");

        }
    // })
};

// 抽獎資料撈取
function cha() {
    let res = {
        "status": 1,
        "char": [
            {
                "CharID": "0068623",
                "CharName": "火玄同學"
            },
            {
                "CharID": "0068691",
                "CharName": "火玄小同學"
            }
        ]
    }
    var $loading = showLoading();
    $.post('https://webapi.digeam.com//flyff/flyffevent20230614',{
        type: "Get_char",
        user : $(".account").text()
    },
    function (res) {
        if ( res.char.length == 0 ) {
            $(".charSelect option").remove();
            $(".charSelect").append(
            $("<option></option>").attr("value", "0").text("請選擇角色"));
        } else {
            $(".charSelect option").remove();
            $(".charSelect").append(
            $("<option></option>").attr("value", "0").text("請選擇角色"));
            res.char.forEach((i) => {
            $(".charSelect").append(
                $("<option></option>").attr("value", i.CharID).text(i.CharName));
            });
        }
    }
    ,
    "json"
    ).always(function() {
        $loading.remove();
    });
}

// 請先登入 跳窗
function loginReminder() {
    $(".centerEmpty").html('請先登入');
    $(".windowsEmpty").show();
}

// 請先兌換 跳窗
function exchangeReminder() {
    $(".centerEmpty").html('請先領取獎勵');
    $(".windowsEmpty").show();
}

function loginAccount() {
    window.open("https://www.digeam.com/login", "_self");
}

//撈取角色
// function get_char() {
//     let res = {
//         "status": 1,
//         "char": [
//             {
//                 "CharID": "0071845",
//                 "CharName": "minnn"
//             }
//         ]
//     }

//     // var $loading = showLoading();
//     // $.post('https://webapi.digeam.com//flyff/flyffevent20230614',{
//     //     type: "Get_char",
//     //     user : $(".account").text()
//     // },
//     // function (res) {
//         if ( res.char.length == 0 ) {
//             $(".charSelect option").remove();
//             $(".charSelect").append(
//             $("<option></option>").attr("value", "0").text("請選擇角色"));
//         } else {
//             $(".charSelect option").remove();
//             $(".charSelect").append(
//             $("<option></option>").attr("value", "0").text("請選擇角色"));
//             res.char.forEach((i) => {
//             $(".charSelect").append(
//                 $("<option></option>").attr("value", i.CharID).text(i.CharName));
//             });
//             // console.log($(".charSelect").find(":selected").val());
//         }
//     // }
//     // ,
//     // "json"
//     // ).always(function() {
//     //     $loading.remove();
//     // });
// }