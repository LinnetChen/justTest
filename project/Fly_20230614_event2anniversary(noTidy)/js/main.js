
// 儲值網址
function gameTimeCard(){
    window.location.href = 'https://www.digeam.com/member/billing';
}
// 寄送地址
function sendInformation(){
    window.location.href = 'https://docs.google.com/document/d/1MispXbIYcuIKbuML5pZBWR33AD2pcXVL/e';
}

// 跳窗
$(".Popupbtn").click(function() {
    $("div[id=" + $(this).attr("data-activity") +"]").fadeIn(200);
});
$(".popup_close").click(function() {
    $(".mask").fadeOut(200);
});
function maskFadeout(){
    $(".mask").fadeOut(200);
}

// 抽卡詳細跳窗印畫面
var _arrayTableB = {
    title:['經驗加成卷軸R(1天)',
    '經驗加成卷軸V(1天)',
    '經驗加成卷軸Q(1天)',
    '經驗加成卷軸P (1天)',
    '經驗加成卷軸R(1天)',
    // 5
    '經驗加成卷軸V(1天)',
    '經驗加成卷軸Q(1天)',
    '經驗加成卷軸P (1天)',
    '覺醒石',
    '覺醒石',
    // 10
    '覺醒石(小)',
    '覺醒石(小)',
    '飾品防爆卷(歸屬)',
    '防爆精鍊卷',
    '穿洞精鍊卷',
    // 15
    '取消服裝鑲嵌強化卷軸',
    '巴路那專用取消卷軸(寶石/鑲嵌槽)',
    '終極武器精鍊卷',
    '保護服裝卷軸',
    '魔法研磨石',
    // 20
    '飛行歐兜麥',
    '自然家具裝飾組(2天)',
    '想要事半功倍箱',
    '海洋之心+10',
    '海洋之心+10',
    // 25
    '付費地圖自由使用券(1日)',
    '黑白小熊軟糖隨機箱',
    '黑白小熊軟糖隨機箱',
    '天使惡魔協奏曲隨機箱',
    '天使惡魔協奏曲隨機箱',
    // 30
    '詛咒的力量之強化卷軸Ω',
    '詛咒的敏捷之強化卷軸Ω',
    '詛咒的體力之強化卷軸Ω',
    '詛咒的智能之強化卷軸Ω',
    '極光雙手劍',
    // 35
    '極光單手劍',
    '極光單手斧',
    '極光拳套',
    '極光法棒',
    '極光法杖',
    // 40
    '極光溜刃',
    '極光弓',
    '極光權杖',
    '極光盾',
    '拂曉套裝箱(男)',
    // 45
    '拂曉套裝箱(女)',
    '牛郎套裝箱(男)',
    '織女套裝箱(女)',
    '大野狼/小紅帽套裝箱',
    '魔力森巴套裝箱',
    // 50
    '拂曉套裝箱(男)',
    '拂曉套裝箱(女)',
    '牛郎套裝箱(男)',
    '織女套裝箱(女)',
    '大野狼/小紅帽套裝箱',
    // 55
    '魔力森巴套裝箱',
    '夢幻禮服隨機包',
    '飛飛二週年紀念髮型(男)',
    '飛飛二週年紀念衣服(男)',
    '飛飛二週年紀念手套(男)',
    // 60
    '飛飛二週年紀念鞋子(男)',
    '飛飛二週年紀念髮型(女)',
    '飛飛二週年紀念衣服(女)',
    '飛飛二週年紀念手套(女)',
    '飛飛二週年紀念鞋子(女)',
    // 65
    '企鵝胖饅頭吊飾',
    '企鵝胖娃娃',
    '集點卡印章1號 經驗加成卷軸Q(1天)',
    '集點卡印章2號 經驗加成卷軸P (1天)',
    '集點卡印章3號 SR穿洞鑲嵌卡片隨機包',
    // 70
    '集點卡印章4號 高階卡片隨機寶箱(18%)',
    '集點卡印章5號']
    ,
    img:['img/icon/icon_img0.png',
    'img/icon/icon_img1.png',
    'img/icon/icon_img2.png',
    'img/icon/icon_img3.png',
    'img/icon/icon_img4.png',
    'img/icon/icon_img5.png',
    'img/icon/icon_img6.png',
    'img/icon/icon_img7.png',
    'img/icon/icon_img8.png',
    'img/icon/icon_img9.png',
    'img/icon/icon_img10.png',
    'img/icon/icon_img11.png',
    'img/icon/icon_img12.png',
    'img/icon/icon_img13.png',
    'img/icon/icon_img14.png',
    'img/icon/icon_img15.png',
    'img/icon/icon_img16.png',
    'img/icon/icon_img17.png',
    'img/icon/icon_img18.png',
    'img/icon/icon_img19.png',
    'img/icon/icon_img20.png',
    'img/icon/icon_img21.png',
    'img/icon/icon_img22.png',
    'img/icon/icon_img23.png',
    'img/icon/icon_img24.png',
    'img/icon/icon_img25.png',
    'img/icon/icon_img26.png',
    'img/icon/icon_img27.png',
    'img/icon/icon_img28.png',
    'img/icon/icon_img29.png',
    'img/icon/icon_img30.png',
    'img/icon/icon_img31.png',
    'img/icon/icon_img32.png',
    'img/icon/icon_img33.png',
    'img/icon/icon_img34.png',
    'img/icon/icon_img35.png',
    'img/icon/icon_img36.png',
    'img/icon/icon_img37.png',
    'img/icon/icon_img38.png',
    'img/icon/icon_img39.png',
    'img/icon/icon_img40.png',
    'img/icon/icon_img41.png',
    'img/icon/icon_img42.png',
    'img/icon/icon_img43.png',
    'img/icon/icon_img44.png',
    'img/icon/icon_img45.png',
    'img/icon/icon_img46.png',
    'img/icon/icon_img47.png',
    'img/icon/icon_img48.png',
    'img/icon/icon_img49.png',
    'img/icon/icon_img50.png',
    'img/icon/icon_img51.png',
    'img/icon/icon_img52.png',
    'img/icon/icon_img53.png',
    'img/icon/icon_img54.png',
    'img/icon/icon_img55.png',
    'img/icon/icon_img56.png',
    'img/icon/icon_img57.png',
    'img/icon/icon_img58.png',
    'img/icon/icon_img59.png',
    'img/icon/icon_img60.png',
    'img/icon/icon_img61.png',
    'img/icon/icon_img62.png',
    'img/icon/icon_img63.png',
    'img/icon/icon_img64.png',
    'img/icon/icon_img65.png',
    'img/icon/icon_img66.png',
    'img/icon/icon_img67.png',
    'img/icon/icon_img68.png',
    'img/icon/icon_img69.png',
    'img/icon/icon_img70.png',
    'img/icon/icon_img71.png'
    ],
    content:[
    '使用後，1天內獲得經驗值增加100%，相同效果可疊加最多5個。(離線後也會扣除使用時間)。<span class="orange">※可交易</span>',
    '使用後，1天內獲得經驗值增加100%，相同效果可疊加最多5個。(離線後不會扣除使用時間)。<span class="orange">※可交易</span>',
    '使用後，1天內獲得經驗值增加200%，相同效果可疊加最多5個。(離線後也會扣除使用時間)。<span class="orange">※可交易</span>',
    '使用後，1天內獲得經驗值增加200%，相同效果可疊加最多5個。(離線後不會扣除使用時間)。<span class="orange">※可交易</span>',
    '使用後，1天內獲得經驗值增加100%，相同效果可疊加最多5個。(離線後也會扣除使用時間)。<span class="orange">※可交易</span>',
    //5
    '使用後，1天內獲得經驗值增加100%，相同效果可疊加最多5個。(離線後不會扣除使用時間)。<span class="orange">※可交易</span>',
    '使用後，1天內獲得經驗值增加200%，相同效果可疊加最多5個。(離線後也會扣除使用時間)。<span class="orange">※可交易</span>',
    '使用後，1天內獲得經驗值增加200%，相同效果可疊加最多5個。(離線後不會扣除使用時間)。<span class="orange">※可交易</span>',
    '可以跟[魔法商店]魔力夢夢交換覺醒裝備。<span class="orange">※可交易</span>',
    '可以跟[魔法商店]魔力夢夢交換覺醒裝備。<span class="orange">※可交易</span>',
    // 10
    '覺醒特定裝備所需要的材料，可以跟布拉里斯的 [覺醒小學徒] 交換覺醒裝備。<span class="orange">※可交易</span>',
    '覺醒特定裝備所需要的材料，可以跟布拉里斯的 [覺醒小學徒] 交換覺醒裝備。<span class="orange">※可交易</span>',
    '精鍊飾品前需先使用卷軸，防止因失敗造成飾品消失，無法增加精鍊成功機率，一張卷軸適用一次(不論成功或失敗)。<span class="orange">※不可交易</span>',
    '精鍊前需先使用卷軸，精鍊失敗時物品不會消失，無法增加精鍊成功機率，一張卷軸適用一次精鍊(不論成功或失敗)。<span class="orange">※可交易</span>',
    '穿洞精鍊失敗時，物品不會消失。<span class="orange">※可交易</span>',
    // 15
    '使用時，能讓最後一次套用在服裝鑲嵌上的寶石100%消除1個。<span class="orange">※可交易</span>',
    '移除巴路那等級道具的寶石屬性及鑲嵌槽屬性時，使用的卷軸，使用時以100%的機率移除最後一次賦予的屬性。<span class="orange">※可交易</span>',
    '打造終極武器與精鍊終極武器前需先使用卷軸，防止因失敗造成武器消失，無法增加精鍊成功機率，一張卷軸適用一次(不論成功或失敗)。欲進行終極武器卡片屬性精鍊請使用『防爆精鍊捲』。<span class="orange">※可交易</span>',
    '強化服裝時，防止道具消失。<span class="orange">※可交易</span>',
    '在雙手武器合成失敗時，會保護武器避免遭到破壞的魔法石頭。<span class="orange">※可交易</span>',
    // 20
    '體驗空中飆車的快感。最高時速233km/hr。<span class="orange">※可交易</span>',
    '充滿草原氣息的自然家具組。(開啟後獲得所有內容物) <span class="orange">※可交易</span>',
    '開啟後可獲得2個聖誕節的祝福、12個母親的康乃馨、4個夢想之光、2個端午節粽子。<span class="orange">※可交易</span>',
    '開啟後可以獲得海洋之心+10。<span class="orange">※可交易</span>',
    '開啟後可以獲得海洋之心+10。<span class="orange">※可交易</span>',
    // 25
    '在一定期間內可以自由使用付費地區。<span class="orange">※可交易</span>',
    '開啟後有機會獲得黑色、白色小熊軟糖套裝的隨機箱子，開啟後隨機獲得內容物中的一種。<span class="orange">※可交易</span>',
    '開啟後有機會獲得黑色、白色小熊軟糖套裝的隨機箱子，開啟後隨機獲得內容物中的一種。<span class="orange">※可交易</span>',
    '開啟後有機會獲得聖靈/夜魔面具、羽翼的隨機箱子，開啟後隨機獲得內容物中的一種。<span class="orange">※可交易</span>',
    '開啟後有機會獲得聖靈/夜魔面具、羽翼的隨機箱子，開啟後隨機獲得內容物中的一種。<span class="orange">※可交易</span>',
    // 30
    '賦予武器或防具力量-10~+25的數值。<span class="orange">※可交易</span>',
    '賦予武器或防具敏捷-10~+25的數值。<span class="orange">※可交易</span>',
    '賦予武器或防具體力-10~+25的數值。<span class="orange">※可交易</span>',
    '賦予武器或防具智力-10~+25的數值。<span class="orange">※可交易</span>',
    '無能力效果，可套用外觀。必要等級：60，職業：騎士。<span class="orange">※可交易</span>',
    // 35
    '無能力效果，可套用外觀。必要等級：60，職業：勇者。<span class="orange">※可交易</span>',
    '無能力效果，可套用外觀。必要等級：60，職業：勇者。<span class="orange">※可交易</span>',
    '無能力效果，可套用外觀。必要等級：60，職業：爆咒師。<span class="orange">※可交易</span>',
    '無能力效果，可套用外觀。必要等級：60，職業：守護者。<span class="orange">※可交易</span>',
    '無能力效果，可套用外觀。必要等級：60，職業：念力師。<span class="orange">※可交易</span>',
    // 40
    '無能力效果，可套用外觀。必要等級：60，職業：操偶師。<span class="orange">※可交易</span>',
    '無能力效果，可套用外觀。必要等級：60，職業：浪人。<span class="orange">※可交易</span>',
    '無能力效果，可套用外觀。必要等級：60，職業：研術者。<span class="orange">※可交易</span>',
    '無能力效果，可套用外觀。必要等級：60，職業：見習生。<span class="orange">※可交易</span>',
    '有機會獲得拂曉套裝(男)的隨機箱子，開啟後隨機獲得內容物的一種。<span class="orange">※可交易</span>',
    // 45
    '有機會獲得拂曉套裝(女)的隨機箱子，開啟後隨機獲得內容物的一種。<span class="orange">※可交易</span>',
    '開啟後有機會獲得牛郎套裝的隨機箱子，開啟後隨機獲得內容物中的一種。<span class="orange">※可交易</span>',
    '開啟後有機會獲得織女套裝的隨機箱子，開啟後隨機獲得內容物中的一種。<span class="orange">※可交易</span>',
    '開啟後有機會獲得大野狼/小紅帽套裝的隨機箱子，開啟後隨機獲得內容物中的一種。<span class="orange">※可交易</span>',
    '開啟後有機會獲得魔力森巴套裝的隨機箱子，開啟後隨機獲得內容物中的一種。<span class="orange">※可交易</span>',
    // 50
    '有機會獲得拂曉套裝(男)的隨機箱子，開啟後隨機獲得內容物的一種。<span class="orange">※可交易</span>',
    '有機會獲得拂曉套裝(女)的隨機箱子，開啟後隨機獲得內容物的一種。<span class="orange">※可交易</span>',
    '開啟後有機會獲得牛郎套裝的隨機箱子，開啟後隨機獲得內容物中的一種。<span class="orange">※可交易</span>',
    '開啟後有機會獲得織女套裝的隨機箱子，開啟後隨機獲得內容物中的一種。<span class="orange">※可交易</span>',
    '開啟後有機會獲得大野狼/小紅帽套裝的隨機箱子，開啟後隨機獲得內容物中的一種。<span class="orange">※可交易</span>',
    // 55
    '開啟後有機會獲得魔力森巴套裝的隨機箱子，開啟後隨機獲得內容物中的一種。<span class="orange">※可交易</span>',
    '開啟後有機會獲得夢幻禮服套裝的隨機箱子。<span class="orange">※可交易</span>',
    '慶祝夢想飛飛二週年的男性限定套裝髮型，穿上後一起來慶祝二週年快樂吧！',
    '慶祝夢想飛飛二週年的男性限定套裝衣服，穿上後一起來慶祝二週年快樂吧！',
    '慶祝夢想飛飛二週年的男性限定套裝手套，穿上後一起來慶祝二週年快樂吧！',
    // 60
    '慶祝夢想飛飛二週年的男性限定套裝鞋子，穿上後一起來慶祝二週年快樂吧！',
    '慶祝夢想飛飛二週年的女性限定套裝髮型，穿上後一起來慶祝二週年快樂吧！',
    '慶祝夢想飛飛二週年的女性限定套裝衣服，穿上後一起來慶祝二週年快樂吧！',
    '慶祝夢想飛飛二週年的女性限定套裝手套，穿上後一起來慶祝二週年快樂吧！',
    '慶祝夢想飛飛二週年的女性限定套裝鞋子，穿上後一起來慶祝二週年快樂吧！',
    // 65
    '可愛饅頭的形狀，放在手中那柔軟的觸感，讓人想無時無刻的揉捏他。購買後記得填寫收件資料喔！',
    '毛絨絨的企鵝娃娃，龐大的身軀非常的有安全感，看著他就會想起在馬德利賈大陸上冒險時，總是會來找他拿Buff的情景。購買後記得填寫收件資料喔！',
    '特殊集點卡活動的1號印章，購買後可額外獲得經驗加成卷軸Q(1天)。使用後，1天內獲得經驗值增加200%，相同效果可疊加最多5個。(離線後也會扣除使用時間)。<span class="orange">※可交易</span>',
    '特殊集點卡活動的2號印章，購買後可額外獲得經驗加成卷軸P (1天)。使用後，1天內獲得經驗值增加200%，相同效果可疊加最多5個。(離線後不會扣除使用時間)。<span class="orange">※可交易</span>',
    '特殊集點卡活動的3號印章，購買後可額外獲得SR穿洞鑲嵌卡片隨機包。使用後可獲得武器穿洞鑲嵌的SR級卡片其中一種。<span class="orange">※可交易</span>',
    // 70
    '特殊集點卡活動的4號印章，購買後可額外獲得高階卡片隨機寶箱(18%)。使用後可獲得服裝穿洞鑲嵌的18%卡片其中一種。<span class="orange">※可交易</span>',
    '特殊集點卡活動的5號印章，購買後可以完成集點卡並自選獲得統御者之核隨機箱、統御者之心隨機箱其中一種。'
    ],
    tableimg:[
        '','','','','','','','','','',//9
        // 10
        '','','','','','','','','','',
        // 20
        '','img/table/table_img22.png','img/table/table_img23.png',
        ['img/table/table_img24_1.png','img/table/table_img24_2.png'],
        '','',
        ['img/table/table_img2728_1.png','img/table/table_img2728_2.png','img/table/table_img2728_3.png','img/table/table_img2728_4.png','img/table/table_img2728_5.png'],
        ['img/table/table_img2728_1.png','img/table/table_img2728_2.png','img/table/table_img2728_3.png','img/table/table_img2728_4.png','img/table/table_img2728_5.png'],
        ['img/table/table_img2930_1.png','img/table/table_img2930_2.png','img/table/table_img2930_3.png'],
        '','',
        // 30
        '','','','','','','','','','',
        // 40
        '','','','',
        'img/table/table_img4551.png',
        'img/table/table_img4652.png',
        'img/table/table_img4753.png',
        'img/table/table_img4854.png',
        'img/table/table_img4955.png',
        'img/table/table_img5056.png',
        // 50
        'img/table/table_img4551.png',
        'img/table/table_img4652.png',
        'img/table/table_img4753.png',
        'img/table/table_img4854.png',
        'img/table/table_img4955.png',
        'img/table/table_img5056.png',
        ['img/table/table_img57_1.png','img/table/table_img57_2.png','img/table/table_img57_3.png'],
        '','','',
        // 60
        '','','','','','','','','','img/table/table_img70.png',
        // 70
        'img/table/table_img71.png',''
    ],
    wearimg:[
        '','','','','','','','','','',//9
        // 10
        '','','','','','','','','','',
        // 20
        '','','','','',
        'img/wear/wear_img2728.png',
        'img/wear/wear_img2728.png',
        '',
        '','',
        // 30
        '','','','','','','','','','',
        // 40
        '','','','',
        'img/wear/wear_img4551.png',
        'img/wear/wear_img4652.png',
        'img/wear/wear_img4753.png',
        'img/wear/wear_img4854.png',
        'img/wear/wear_img4955.png',
        'img/wear/wear_img5056.png',
        // 50
        'img/wear/wear_img4551.png',
        'img/wear/wear_img4652.png',
        'img/wear/wear_img4753.png',
        'img/wear/wear_img4854.png',
        'img/wear/wear_img4955.png',
        'img/wear/wear_img5056.png',
        'img/wear/wear_img57.png',
        'img/wear/wear_img58596061.png','img/wear/wear_img58596061.png','img/wear/wear_img58596061.png',
        // 60
        'img/wear/wear_img58596061.png',
        'img/wear/wear_img62636465.png','img/wear/wear_img62636465.png','img/wear/wear_img62636465.png','img/wear/wear_img62636465.png',
        '','','','','',
        // 70
        '',''
    ]
}

function cardDetail(i){
    let tableTrue = [22,23,24,57,70,71,27,28,29,30,45,46,47,48,49,50,51,52,53,54,55,56]
    let wearTrue = [57,27,28,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60,61,62,63,64,65]
    function checkNum(tableTrue){
        return tableTrue == (i+1);
    }
    function checkNum2(wearTrue){
        return wearTrue == (i+1);
    }
    if( tableTrue.some(checkNum) == true ){
        // 有表格
        $('.textB > .titleB').html(''+_arrayTableB.title[i]+'');
        $('.textB > .imgB').html('<img src="'+_arrayTableB.img[i]+'">');
        $('.textB > .centerText').html(''+_arrayTableB.content[i]+'');
        if( Array.isArray(_arrayTableB.tableimg[i]) == true  ){
            for( var d = 0 ; d <_arrayTableB.tableimg[i].length ;d++ ){
                $('.textB > .tableBoxB').append('<img src="'+_arrayTableB.tableimg[i][d]+'"><br>');
            }
        }else {
            $('.textB > .tableBoxB').html('<img src="'+_arrayTableB.tableimg[i]+'">');
        }
        if(wearTrue.some(checkNum2) == true){
            $('.textB> .tableBoxB > .imgB2').html('<img src="'+_arrayTableB.wearimg[i]+'">');
        }
        $('.windowsB').show();
    }  else if ( tableTrue.some(checkNum) == false ) {
        // 沒表格
        $('.windowsB').hide();
        $('.titleSmall').html(''+_arrayTableB.title[i]+'');
        $('.centerSmall').html('<img src="'+_arrayTableB.img[i]+'"><br>'+_arrayTableB.content[i]);
        $('.windowsSmall >.boxSmall >.btnBox >.yes').attr('onclick','maskFadeout()');
        $('.windowsSmall').show();
    }

}

// 買卡片
function buy(iconBuy_content){
    let res = {
        status : 1
    }
    //     $.post('https://webapi.digeam.com//flyff/flyffevent20230614',{
    //     type : 'buy',
    //     user : $(".account").text(),
    //     char : $(".charSelect").find(":selected").val(),
    //     item_id : iconBuy_content

    // },function(res){
        if( res.status == -99 ){
            $(".centerEmpty").html('點數不足');
            $(".windowsEmpty").show();
        }else if( res.status == 1 ){
            let entity_name = ['企鵝胖饅頭吊飾','企鵝胖娃娃']
            if ( iconBuy_content == 65 || iconBuy_content == 66 ){
                $(".titleEmpty").html('購買成功');
                $(".centerEmpty").html('恭喜獲得「'+entity_name[iconBuy_content-65]+'」');
                $(".leftEmpty").html('※僅限台灣玩家領取，請於購買成功後30天內填寫寄送資訊，並寄回客服信箱，逾期視同放棄獎勵。');
                $(".windowsEmpty >.boxEmpty >.btnBox").html('<button class="sendInformation" onclick="sendInformation()" >填寫寄送資訊​</button>');
                $(".windowsEmpty").show();

            }else{
                $(".centerEmpty").html('購買成功');
                $(".windowsEmpty").show();
                window.setTimeout( function(){
                    location.reload();
                } ,3000)
            }
        }
        
    // })

}



// 點擊 抽卡API
function lotteryReminder(refresh_num){
    // console.log($(".charSelect").find(":selected").text());

    if( refresh_num > 0 ){
        $(".centerEmpty").html('確認免費抽卡1次?');
        $(".windowsEmpty").show();
        $(".windowsEmpty > .boxEmpty > .btnBox").html('<button class="cancle" onClick="maskFadeout()">否</button><button class="yes popup_close" onClick="lottery()">是</button>');
        // $(".windowsEmpty > .boxEmpty > .btnBox > .yes ").attr("onClick","lottery()");
    }else if ( refresh_num == 0 ){
        $(".centerEmpty").html('確認消耗5點數，抽卡1次?');
        $(".windowsEmpty").show();
        $(".windowsEmpty > .boxEmpty > .btnBox").html('<button class="cancle" onClick="maskFadeout()">否</button><button class="yes popup_close" onClick="lottery()">是</button>');
    }
}

function lottery(){
    $(".windowsEmpty").hide();
    // console.log($('.charSelect > option:nth-child(2)').attr('value'));

    let res_2 = {
        type : 'lottery',
        user : '$(".account").text()',
        char : $(".charSelect").find(":selected").val()
    
    }

    // console.log(res_2.char);

    let res = {
        "status": 1,
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
        ]
    }
    // $.post('https://webapi.digeam.com//flyff/flyffevent20230614',{
    //     type : 'lottery',
    //     user : '$(".account").text()',
    //     char : $(".charSelect").find(":selected").val()
    
    // },function(res){

        if(res.status == 1){
            // 成功可以抽卡
            location.reload();
            // $('.cardBox > .card').addClass("turnOverCard");
            // for( $c = 0 ; $c < 4 ; $c++ ){
            //     $('.cardFace'+$c+' > .icon').html('<img src="img/icon/icon_img'+res.lottery_content[$c].img+'.png">');
            //     $('.cardFace'+$c+' > .iconName').html(''+res.lottery_content[$c].item_name+'');
            //     $('.cardFace'+$c+' > .iconPrice1').html('原價'+res.lottery_content[$c].price+'');
            //     $('.cardFace'+$c+' > .iconPrice2').html('折扣價'+res.lottery_content[$c].sale_price+'');
            //     $('.buttonBox'+$c+' > .detailed ').attr('onclick','cardDetail('+res.lottery_content[$c].content+')')
            //     // $('.buttonBox'+$c+' > .iconBuy ').attr('onclick','buy('+res.lottery_content[$c].content+',"'+res.lottery_content[$c].item_name+'")')
            //     $('.buttonBox'+$c+' > .iconBuy ').attr('onclick','buy('+res.lottery_content[$c].content+')')
            // }
        }else if ( res.status == -99 ) {
            // 點數不足
            $(".centerEmpty").html('點數不足無法抽卡');
            $(".windowsEmpty").show();
        }
        // else if ( res.status == -98 ) {
        //     // 請選擇角色
        //     $(".centerEmpty").html('請選擇角色');
        //     $(".windowsEmpty").show();
            
        // }else if ( res.status == -96 ) {
        //     // 請先領取獎勵
        //     $(".centerEmpty").html('請先領取獎勵');
        //     $(".windowsEmpty").show();
        // }
    // })
}


// 點擊兌換階段獎勵API
var stageName =[
'經驗加成卷軸V(12小時) (歸屬)',
'夢想飛飛二週年紀念洋傘',
'夢想蛋糕',
'VIP Buff(15天)',
'梅塔歐尼克之怒(30天)',
'解除歸屬卷軸',
'高階卡片隨機寶箱(15%)'
]
var stageNumber =[
1,50,100,150,250,350,500
]
function stageExchange(refresh_num){
    $(".centerSmall").html('確定兌換「'+stageName[refresh_num]+'」?');
    $(".windowsSmall").show();
    $(".windowsSmall > .boxSmall > .btnBox > button ").removeClass("popup_close");
    $(".windowsSmall > .boxSmall > .btnBox > .yes ").removeClass("popup_close");
    $(".windowsSmall > .boxSmall > .btnBox > .yes ").attr("onClick","sureExchange("+(refresh_num+73)+")");
}
function sureExchange(item_id){
    let res = {
        "status": 1
    }
    //道具ID從73開始
    // $.post('https://webapi.digeam.com//flyff/flyffevent20230614',{
    //     type : 'exchange',
    //     user : $(".account").text(),
    //     char : $(".charSelect").find(":selected").val(),
    //     item_id : item_id

    // },function(res){
        if( res.status == 1 ){
            $(".windowsSmall").hide();
            setTimeout(
                $(".titleEmpty").html('兌換成功'),
                $(".centerEmpty").html('恭喜獲得累計翻開卡片'+stageNumber[(item_id-73)]+'次獎勵<br>「'+stageName[(item_id-73)]+'」'),
                $(".leftEmpty").html('※獎勵將會發送至選擇角色的背包中，重新登入遊戲即可獲得。')
                ,3000)
            $(".windowsEmpty").show();
            window.setTimeout( function(){
                location.reload();
            } ,3000)
        }else if( res.status == -99 ){
            $(".centerEmpty").html('請選擇角色');
            $(".windowsEmpty").show();
        }
    // })
}


// 購買紀錄

function Get_record(){
    // $.post('https://webapi.digeam.com//flyff/flyffevent20230614',{
    // type : 'Get_record',
    // user : '$(".account").text()',
    // char : $(".charSelect").find(":selected").val()
    // },function(res){
        let res ={
            "status": 1,
            "buy_record": [
                {
                    "user_id": "minnn112",
                    "char": "0071845",
                    "item_name": "集點卡印章2號\n經驗加成卷軸P (1天)",
                    "count": 1,
                    "img": "68"
                },
                {
                    "user_id": "minnn112",
                    "char": "0071845",
                    "item_name": "海洋之心+10",
                    "count": 1,
                    "img": "23"
                },
                {
                    "user_id": "minnn112",
                    "char": "0071845",
                    "item_name": "自然家具裝飾組(2天)",
                    "count": 1,
                    "img": "21"
                },
                {
                    "user_id": "minnn112",
                    "char_id": "0071845",
                    "item_name": "實體",
                    "count": 1,
                    "img": "66",
                }
            ]
        }
        if ( res.status == -99 ){
            $(".centerEmpty").html('請選擇角色');
            $(".windowsEmpty").show();
        }else if ( res.status == 1 ){
            let _record1 = "";
            let _record2 = "";
            for( $c = 0 ; $c < res.buy_record.length ; $c++ ){
                if( res.buy_record[$c].img != 65 && res.buy_record[$c].img != 66 ){
                    _record1 +=
                    '<tr><td><img src="img/icon/icon_img'+res.buy_record[$c].img+'.png">'+res.buy_record[$c].item_name+'</td><td>'+res.buy_record[$c].count+'</td></tr>'
                }else if( res.buy_record[$c].img == 65 || res.buy_record[$c].img == 66 ){
                    _record2 +=
                    '<tr><td><div class="textFlexBox"><img src="img/icon/icon_img'+res.buy_record[$c].img+'.png">'+res.buy_record[$c].item_name+'​<a href="https://docs.google.com/document/d/1MispXbIYcuIKbuML5pZBWR33AD2pcXVL/edit">填寫寄送資訊​</a></div></td><td>'+res.buy_record[$c].count+'</td></tr>'
                }
            }
            $('.tableVirtualTbody').html(_record1);
            $('.tableEntityTbody').html(_record2);
        }
    // })
}


// 兌換集點卡
function pointCardExchange(){
    $('.windowsA5').show();
    $('.tableReceiveTbody >tr:first-child >td >button').attr('onclick','receive(80)');
    $('.tableReceiveTbody >tr:last-child >td >button').attr('onclick','receive(81)');
}
function receive(Item_id){
    var res = {
        "status": 1
    }
    // $.post('https://webapi.digeam.com//flyff/flyffevent20230614',{
        // type : 'exchange',
        // user : '$(".account").text()',
        // char : $(".charSelect").find(":selected").val(),
        // Item_id: Item_id
        // },function(res){

        var item_name = [
            '統御者之核隨機箱','統御者之心隨機箱'
        ]
        if ( res.status == -99 ){
            $('.windowsA5').hide();
            $(".centerEmpty").html('請選擇角色');
            $(".windowsEmpty").show();
        }else if ( res.status == 1 ){
            $('.windowsA5').hide();
            setTimeout(""+$(".centerEmpty").html('「'+item_name[(Item_id-80)]+'」兌換成功')+"",3000)
            $(".windowsEmpty").show();
        }
    // })
}



// 略過動畫.確認按鈕
// function check(a){
//     var set = $('.buttonSkip'+a).attr('data-set');
//     if ( set == 'false' ){
//         $(".buttonSkip"+a).removeClass(".uncheck");
//         $(".buttonSkip"+a).addClass("checked");
//         $(".buttonSkip"+a).attr("data-set","true");
//         if( a == 1 ){
//             // 加上動畫class
//         }else if ( a == 2 ){
//             // 加上pop確認
//         }
//     }else if ( set == 'true' ){
//         if( a == 1 ){
//         $(".buttonSkip"+a).removeClass("checked");
//         $(".buttonSkip"+a).addClass("uncheck");
//         $(".buttonSkip"+a).attr("data-set","false");
//         $(".centerBox > .title").removeClass(".title_Animation");
//         }else if ( a == 2 ){
//             // 拿掉pop確認
//         }
//     }
// }

