// $ = 선언이 되어 있는 변수
// arr~ = list형태의 변수명
// f_obj = 변수명으로 함수를 실행 시키기 위해 객체 생성

let $commonUrl = "https://api.warframestat.us/pc/";
let arrAjaxReq = ["voidTrader", "dailyDeals", "sortie", "invasions", "archonHunt","cycle", "others", "constructionProgress", "nightwave", "ostron", "solaris", "entrati", "fissuresNomal", "fissuresHard", "fissuresStorm"];
let arrBtnKor = [["키 티어", "테신","다르보"], ["출격", "침공", "집정관 사냥"], ["주기", "기타", "건설 현황"], ["나이트 웨이브", "오스트론", "솔라리스", "엔트라티"], ["균열", "강길 균열", "보이드 폭풍"]];
let arrBtnEng = [["Ki’Teer", "Teshin","Darvo"], ["Sortie", "Invasions", "Arcon Hunt"], ["Cycle", "Others", "Construct"], ["Night Wave", "Ostron", "Solaris", "Entrati"], ["Fissures", "Steel Path", "Void Storm"]];
let arrBtnId = [["voidTrader", "steelPath","dailyDeals"], ["sortie", "invasions", "archonHunt"],["cycle", "others", "constructionProgress"], ["nightwave", "ostron", "solaris", "entrati"], ["fissuresNomal", "fissuresHard", "fissuresStorm"]];
let ajaxLang = "";
let timerArr = [];
// 사용자 브라우저 언어 확인 후 페이지 세팅
var $userLang ="";
if(navigator.language != null) {
	var tempLang = navigator.language
	tempLang.includes("ko") ? $userLang = "ko" : $userLang = "en";
    ajaxLang = $userLang;
} 

$(function(){
    // 배포 서버에서만 개발자 도구 block 처리 - add on 사용으로 콘솔창이 많이 더럽기 때문.
    // 사용 add on은 하기 url을 사용.
    // https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe
    if(window.location.href =="https://warframeinfo.netlify.app/"){
        devToolBlock();
    }

    loadContent($userLang);
    getAjax("");
    $('.btn-group-sm > button:first-child').click();

    
    // 로드 되었을때 확장 프로그램 설치 확인 요청.
    alert("오버 프레임, 워프레임 마켓, 워프레임 위키를 사용하시려면 \n하단의 iframe allow 확장 프로그램을 추가해 주시기 바랍니다.");
});

// 요소 생성
function loadContent(userLang){
    $.each(arrBtnKor, function(firKey,firValue){
        var $createBox = "";

        $createBox += '<div class="p-1 p-md-2 mb-4 text-dark rounded bg-light contentBox" id="firstCon'+ firKey +'">';
        $createBox += '<div class="py-2 text-center"></div>';
        $createBox += '<div class="py-2 px-4"> </div>';
        $createBox += '<div class="btn-group-vertical btn-group-sm">';

        $.each(firValue, function(secKey,secValue){
            secValue = userLang == "ko" ? secValue : arrBtnEng[firKey][secKey];
            $createBox += '<button type="button" class="btn btn-secondary" id="'+ arrBtnId[firKey][secKey] +'">' + secValue + '</button>';
        });

        $createBox += '</div>';
        $createBox += '</div>';

        $('.mainContent').append($createBox);
    });
}

// iframe 백그라운드 활성, 비활성
function popControl() {
    if($('.popArea').css('display') == 'none'){
        $('.popArea').css('display', 'block');
    } else {
        $('.popArea').css('display', 'none');
    }
}

// iframe 백그라운드 클릭 했을때 실행.
$(document).on('click', '.backDark',function(){
    popControl();
});

// 개발자 도구 열지 못하게 방지
function devToolBlock(){
    // f12 방지
    $(document).bind('keydown',function(e){
        if ( e.keyCode == 123) {
            e.preventDefault();
            e.returnValue = false;
        }
    });

    // 우측 클릭 방지
    $(document).bind('contextmenu',function(e){
        return false;
    });
}

// 버튼 클릭 이벤트 (비활성화 되어 있는 버튼을 활성화 할때)
$(document).on('click','.btn-secondary:button',function(){
    var btnId = $(this).attr('id') + "Str";
    $('#' + btnId).css('display', 'block');
    $('#' + btnId).siblings().css('display', 'none');

    // 클릭된 버튼의 css 변경
    $(this).removeClass('btn-secondary');
    $(this).addClass('btn-primary');

    // 형제 버튼의 css 변경
    $(this).siblings().removeClass('btn-primary');
    $(this).siblings().addClass('btn-secondary');
    $(this).parents().siblings('.text-center').html($(this).html());
    // var requsetUrl = $(this).attr('ajaxReq');
    // getAjax(requsetUrl);
});

// 사이드 버튼 클릭시 iframe 컨트롤
// warframe market, overFrame 모두 iframe 지원 x - add on으로 해결 가능. 추후 서버에서 헤더 수정 필요
$(document).on('click', '.iconArea > div:not(.useChatBot) ',function(){
    popControl();
    let $iconName = $(this).attr('class');
    let $iframeSite = "";
    let $iframeId = "iFrame" + $iconName;

    if($iconName == 'moveOverFrame'){
        $iframeSite = 'https://overframe.gg/builds/warframes/?hl=ko';
    } else if($iconName == 'moveMarket'){
        $iframeSite = 'https://warframe.market/ko/';
    } else if($iconName == 'searchInfo'){
        $iframeSite = 'https://warframe.fandom.com/wiki/WARFRAME_Wiki';
    }

    if($("#"+$iframeId).length){
        $("#"+$iframeId).css('display', 'block');
        $("#"+$iframeId).siblings().css('display', 'none');
    } else {
        $(".iFrameArea").append("<iframe width='100%' height='100%' src='"+ $iframeSite +"' id='" + $iframeId +"'></iframe>");
        $("#"+$iframeId).siblings().css('display', 'none');
        $("#"+$iframeId).css('display', 'block');
    }
});

// 모든 타이머 정지.
function timerClear(){
    $.each(timerArr, function(key, value){
        clearInterval(value);
    });
}

// 테이블 초기화.
function contentReload(){
    var reloadTarget = $('.strContent');
    $.each(reloadTarget, function(key, value){
        $(value).html();
    })
}

// 00d 00h 00m 00s => s로 계산
function processTime(time){
    var $time = time;
    let $timeToSec = 0;
    let arrProcessDay = ["d", "h", "m", "s"];
    let arrCalculTime = [86400, 3600, 60, 1];
    $.each(arrProcessDay, function(key, value){
        if( $time.includes(value) ){
            $timeToSec += $time.substr(0, $time.indexOf(value)) * arrCalculTime[key];
            $time = $time.substr($time.indexOf(value) +1 , $time.length);
        }
    });

    return $timeToSec;
}

// 타이머 함수
function setTimer(time, funcName){

    var $timeToSec = 0;

    if(!funcName.includes('nightwave')){
        $timeToSec = processTime(time);
    } else {
        let $nowTime = Date.now();
        let $expireTime = new Date(time);
        $timeToSec = Math.floor(($expireTime.getTime() - $nowTime) / 1000);
    }
    
    if($timeToSec > 0) {
        timer = setInterval(function(){
            $timeToSec--; 

            var $hour = parseInt($timeToSec/3600);
            var $min = parseInt(($timeToSec/60)%60);
            var $sec = $timeToSec%60;

            if($hour < 10 && !funcName.includes('cycle')){
                $hour = "00" + $hour;
            } else if($hour < 100 || funcName.includes('cycle')){
                $hour = "0" + $hour;
            }

            if($min < 10){
                $min = "0" + $min;
            }
            if($sec < 10){
                $sec = "0" + $sec;
            }

            $("#time"+funcName).html($hour + ":" + $min + ":" + $sec);

            if($timeToSec <=0){
                timerClear();
                contentReload();
                getAjax("");
            }
        }, 1000);
        timerArr.push(timer);
    } else {
        $("#time"+funcName).html("");
    }
}

function createTimeArr(data, timeArr){
    var $result = "";
    $.each(timeArr, function(key, value){
        if(key != timeArr.length-1){
            if(!data[value].includes("-") || value == 'expiry')
                $result = data[value];
        }
    });
    return $result;
}

// 요소 파싱 함수 - 파싱할 데이터, 파싱할 요소(2중 배열)
// 파싱할 요소 배열 형태 - [[파싱할 구성 요소],[시작시간, 마감시간],[칼럼 명]] 
// 파싱 후 html 적용 (표 생성)
function parseElement(funcName, data, totalArr, timeData){

    var $tempElement = totalArr[0];
    var $tempTime = totalArr[1];
    var $tempTdName = totalArr[2];
    var arrExtractTime = [];
    var $tempHtml = "";

    // 테이블 html 코드 작성
    $tempHtml += '<div id="' + funcName +'Str" class="strContent">';
    $tempHtml += '<table class="table table-sm">';
    $.each($tempElement, function(key, value){
        $tempHtml += '<th>' + $tempTdName[key] + '</th>';
    });

    if($tempTime.length > 0){
        var tdTimeName = "남은 시간";
        if(funcName == 'voidTrader' && $tempTime[0].includes('start'))
            tdTimeName ="도착까지";
        else if(funcName == 'voidTrader' && $tempTime[0].includes('end'))
            tdTimeName ="떠나기까지";
        $tempHtml += '<th id="left' + funcName + '">' + tdTimeName + '</th>';
    }
    
    // 데이터가 여러가지 일경우
    // ex) 출격, 침공, 균열 등
    if(data.length > 1){
        $.each(data,function(firKey, firValue){
            
            $tempHtml += '<tr>';
            $.each($tempElement, function(secKey, secValue){
                // 데이터 안에서 데이터를 또 꺼내야 하는 경우 
                // ex) 침공 데이터 -{defenderReward: {items: Array(0), countedItems: Array(1), credits: 0, asString: '데라 반달 배럴', itemString: '데라 반달 배럴', …}, eta: "1d 9h 30m 30s"}
                if(secValue.search(/\[.*\]/) > 0){
                    var $firLocation = secValue.substr(0, secValue.indexOf('['));
                    var $secLocation = secValue.substring(secValue.indexOf('[')+1, secValue.indexOf(']'));

                    // 침공의 경우 뮤탈리스트 알라드 v 내비 코디네이터가 너무 길어 표가 깨지는 현상이 있음.
                    // 해당 현상을 해결 하기 위해 뮤탈리스트를 제거.
                    // 코드로 작성이 가능하지만 코드로 작성할 경우 길어져, 하드 코딩으로 대체.
                    if(firValue[$firLocation][$secLocation].includes("뮤탈리스트")){
                        firValue[$firLocation][$secLocation] = "알라드 V 내비 코디네이터"; 
                    }
                    $tempHtml += '<td>' + firValue[$firLocation][$secLocation] + '</td>';

                // 데이터 안에서 꺼내기만 하면 될때
                // ex) 출격 - {missionType: '구출', modifier: 'Enhanced Enemy Shields', ...}
                } else {
                    //if(funcName == 'nightwave'){
                        // firValue[secValue] = $userLang == 'ko' ? tarnsLate(firValue[secValue]) : firValue[secValue];
                    // } else if(funcName == 'sortie'){
                        firValue[secValue] = $userLang == 'ko' ? tarnsLate(firValue[secValue]) : firValue[secValue];
                    // }
                    $tempHtml += '<td>' + firValue[secValue] + '</td>';
                }
            });
            
            // 시간이 여러개 붙어 있을 때
            // ex) 침공, 균열 등.
            if($tempTime.length > 0 && $tempTime.includes("in")){
                $tempHtml += '<td id="time' + funcName + firKey +'"></td>';
                var $timeElemet = createTimeArr(firValue, $tempTime);
                arrExtractTime.push($timeElemet);

            // 시간이 하나만 있을 때
            // ex) 출격, 집정관 사냥 등.
            } else if(firKey == (Math.floor(data.length /2))){
                $tempHtml += '<td id="time' + funcName + '"></td>';
                if(timeData){
                    var $timeElemet = createTimeArr(timeData, $tempTime);
                } else {
                    var $timeElemet = createTimeArr(data, $tempTime);
                }
                arrExtractTime.push($timeElemet);
            } else {
                $tempHtml += '<td></td>';
            }
            $tempHtml += '</tr>';
        });
    
    // 데이터가 하나일 경우
    // ex) 키티어, 다르보
    } else {
        $tempHtml += '<tr>';
        $.each($tempElement, function(secKey, value){
            if(funcName == 'dailyDeals' && secKey == $tempElement.length -1){
                $tempHtml += '<td>' + value + '</td>';    
            } else {
                $tempHtml += '<td>' + data[value] + '</td>';
            }
        });
        if($tempTime.length > 0){
            $tempHtml += '<td id="time' + funcName + '"></td>';
            if(timeData){
                var $timeElemet = createTimeArr(timeData, $tempTime);
            }else {
                var $timeElemet = createTimeArr(data, $tempTime);
            }
            arrExtractTime.push($timeElemet);
        }
        $tempHtml += '</tr>';
    }

    $tempHtml += '</table>';
    $tempHtml += '</div>';
    $('#' + funcName).parents().siblings('.px-4').append($tempHtml);

    // 타이머 설정.
    if(arrExtractTime.length > 0){
        $.each(arrExtractTime, function(key, value){
            var $timerId = arrExtractTime.length > 1 ? funcName + key : funcName
            setTimer(value, $timerId);
        });
    }
}

// 가로로 출력해야 하는 내용의 표 생성 함수.
// ex) 주기, 건설 현황, others(중재, 이상현상)
function tableRow(funcName, tdName, rowData, timeData){
    var $tempHtml = "";
    var $arrExtractTime = [];

    // 테이블 html 코드 작성
    $tempHtml += '<div id="' + funcName +'Str" class="strContent">';
    $tempHtml += '<table class="table table-sm">';
    $.each(tdName, function(key, value){
        $tempHtml += '<th>' + value + '</th>';
    });

    if(funcName == "others"){
        $.each(rowData, function(firKey, firVal){
            $tempHtml += '<tr>';
            $.each(firVal, function(secKey, secVal){
                $tempHtml += '<td>' + secVal + '</td>';
            });
            $tempHtml += '</tr>';
        });
    } else {
        $tempHtml += '<tr>';
        $.each(rowData, function(key, value){
            $tempHtml += '<td>' + value + '</td>';
        });
        $tempHtml += '</tr>';
    }

    if(timeData){
        $tempHtml += '<tr>';
        $.each(timeData, function(key, value){
            if(key == 0){
                $tempHtml += '<td>' + value + '</td>';
            } else {
                var $count = key -1;
                $tempHtml += '<td id="time' + funcName + $count + '"></td>';
                $arrExtractTime.push(value);
            }
        });
        $tempHtml += '</tr>';
    }

    $('#' + funcName).parents().siblings('.px-4').append($tempHtml);

    // 타이머 설정.
    if($arrExtractTime.length > 0){
        $.each($arrExtractTime, function(key, value){
            var $timerId = funcName + key;
            setTimer(value, $timerId);
        });
    }
}

// get AJax Info
// 서버 부하와 클라이언트 부하를 해결 하기 위해 전체 정보를 호출하여 가공하는 방법을 선택.
function getAjax(reqUrl){
    $.get(
        $commonUrl + reqUrl,
        {language : ajaxLang},
        function(data, status ){
            if(status == "success"){
                console.log(data);
                voidTrader(data);
                steelPath(data);
                dailyDeals(data);
                sortie(data);
                invasions(data);
                archonHunt(data);
                cycle(data);
                constructionProgress(data);
                etc(data);
                nightWave(data);
                syndicate(data);
                fissure(data);
            } else {
                alert("정보 로딩에 실패 했습니다.\n 메일로 문의 바랍니다.");
            }
        }
    );
}

// 키티어
function voidTrader(data){
    var $data = data["voidTrader"];

    if($data["active"] == true)
        var $tempTime = ["endString", "out"];
    else 
        var $tempTime = ["startString", "out"];

    var $tempParse = ["location"];
    var $tempTdName = ["위치"];
    var $totalArr = [$tempParse, $tempTime, $tempTdName];

    parseElement("voidTrader", $data, $totalArr);    
}

// 테신
function steelPath(data){
    var $umbraData = data["steelPath"]
    var $data = $umbraData["currentReward"];
    var $timeData = data["steelPath"];
    var $tempTime = ["remaining", "out"];
    var $tempParse = ["name", "cost"];
    var $tempTdName = ["중요 아이템", "필요 스틸 에센스"];
    var $totalArr = [$tempParse, $tempTime, $tempTdName];

    parseElement("steelPath", $data, $totalArr, $timeData);
    whenUmbra($umbraData);
}

// 다르보
function dailyDeals(data){
    var $data = data["dailyDeals"][0];
    var $tempTime = ["eta", "out"];
    var $tempParse = ["item", "discount", "salePrice", data["dailyDeals"][0]["total"] - data["dailyDeals"][0]["sold"]];
    var $tempTdName = ["아이템" , "할인율%", "가격(p)", "재고"];
    var $totalArr = [$tempParse, $tempTime, $tempTdName];

    parseElement("dailyDeals", $data, $totalArr);
}

// 출격
function sortie(data){
    var $data = data["sortie"]["variants"];
    var $timeData = data["sortie"];
    var $tempTime = ["startString","eta", "out"];
    var $tempParse = ["missionType", "modifier", "node"];
    var $tempTdName = ["미션" , "변경점", "노드"];
    var $totalArr = [$tempParse, $tempTime, $tempTdName];

    parseElement("sortie", $data, $totalArr, $timeData);
}

// 침공
function invasions(data){
    var $data = data["invasions"];
    var $tempTime = ["startString","eta", "in"];
    var $tempParse = ["attackerReward[asString]", "defenderReward[asString]", "node"];
    var $tempTdName = ["공격 보상" , "방어 보상", "노드"];
    var $totalArr = [$tempParse, $tempTime, $tempTdName];

    parseElement("invasions", $data, $totalArr);
}

// 집정관
function archonHunt(data){
    var $data = data["archonHunt"]["missions"];
    var $timeData = data["archonHunt"];
    var $tempTime = ["startString","eta", "out"];
    var $tempParse = ["type", "node"];
    var $tempTdName = ["미션" , "노드"];
    var $totalArr = [$tempParse, $tempTime, $tempTdName];

    parseElement("archonHunt", $data, $totalArr, $timeData);
}

// 주기
function cycle(data){
    var $cycleData = ["cetusCycle", "vallisCycle", "cambionCycle"];
    var $parseArr = ["active","state","timeLeft"];

    var $tempTdName = ["" , "시터스", "포르투나", "캠피온"];
    var $tdData =["상태"];
    var $timeArr = ["남은 시간"];

    $.each($cycleData, function(firKey, firValue){
        $.each($parseArr, function(secKey, secValue){
            if(data[firValue][secValue]){
                if(secValue != "timeLeft"){
                    var $state = $userLang != 'ko' ? data[firValue][secValue] : tarnsLate(data[firValue][secValue]);
                    $tdData.push($state);
                } else {
                    $timeArr.push(data[firValue][secValue]);
                }
            }
        });
    });

    tableRow("cycle", $tempTdName, $tdData, $timeArr);
}

// 건설 현황
function constructionProgress(data){
    var $data = data["constructionProgress"];
    var $parseArr = ["fomorianProgress","razorbackProgress"];

    var $tempTdName = ["" , "포모리안", "레이저백"];
    var $tdData =["건설 진행도"];

    $.each($parseArr, function(secKey, secValue){
        $tdData.push($data[secValue] + '%');
    });

    tableRow("constructionProgress", $tempTdName, $tdData);
}

// 기타 (중재, 이상현상)
function etc(data){
    var $data = ["sentientOutposts[mission]", "arbitration"];
    var $parseArr = ["node","type"];

    var $tempTdName = ["" , "노드", "미션"];
    var $arbitratArr =["중재"];
    var $sentientArr =["이상현상"];
    var $parseData = "";
    $.each($data, function(firKey, firValue){
        if(data["sentientOutposts"]["active"] == true && firValue.search(/\[.*\]/) > 0){
            var $firLocation = firValue.substr(0, firValue.indexOf('['));
            var $secLocation = firValue.substring(firValue.indexOf('[')+1, firValue.indexOf(']'));
            $parseData = data[$firLocation][$secLocation];
        } else {
            $parseData = data[firValue];
        }
        $.each($parseArr, function(secKey, secValue){
                if($parseData[secValue]){
                    if(firValue == "arbitration"){
                        $arbitratArr.push($parseData[secValue]);
                    } else {
                        if($parseData[secValue])
                        $sentientArr.push($parseData[secValue] == 'Skirmish' ? '접전' : $parseData[secValue]);
                    }
                }
        });
    });

    var $tdData = [$arbitratArr, $sentientArr];
    tableRow("others", $tempTdName, $tdData);
}

function whenUmbra(data){
    var $tableHtml = "";
    var $timeData = data["remaining"];
    var $rotationArr = [];
    var $currentReword = data["currentReward"]["name"];

    $.each(data["rotation"],function(key,value){
        $rotationArr.push(value["name"]);
    });

    $seqNo = ($rotationArr.length - 1) - $rotationArr.indexOf($currentReword);

    // 데이만 파싱하여 더함.
    // 0일 경우 카운트다운으로 변경되게 하려는 의도.
    var $leftDay = $seqNo * 7 + Number($timeData.substr(0, $timeData.indexOf('d')));

    $tableHtml += '<tr class="whenUmbra">';
    $tableHtml += '<td colspan="3"> 움브라 포르마까지 : ';
    $tableHtml += '<div id="timeUmbra">' + $leftDay + '일 </div>';
    $tableHtml += '</td> <tr/>';

    if($leftDay == 0)
        setTimer($timeData, "Umbra");
        
    if(!$('.whenUmbra').length){
        $('#steelPathStr table tbody').append($tableHtml);
    }
}

// 나이트 웨이브 파싱
function nightWave(data){
    var $data = data["nightwave"]["activeChallenges"];;
    var $tempTime = ["expiry", "in"];
    var $tempParse = ["title"];
    var $tempTdName = ["미션 내용"];
    var $totalArr = [$tempParse, $tempTime, $tempTdName];

    parseElement("nightwave", $data, $totalArr);
}

// 신디케이트
function syndicate(data){
    var $data = data["syndicateMissions"];
    var $cetusParseData = "";
    var $entratiParseData = "";
    var $solarisParseData = "";
    var $zarimanParseData = "";
    var $parseElementArr = ["CetusSyndicate", "EntratiSyndicate", "SolarisSyndicate", "ZarimanSyndicate"];

    $.each($data,function(firKey, firVal){
        $.each($parseElementArr, function(secKey, secVal){
            if(firVal["id"].includes(secVal)){
                if(secVal == "CetusSyndicate")
                    $cetusParseData = firVal;
                else if(secVal == "EntratiSyndicate")
                    $entratiParseData = firVal;
                else if(secVal == "SolarisSyndicate")
                    $solarisParseData = firVal;
                else if(secVal == "ZarimanSyndicate")
                    $zarimanParseData = firVal;
            }
        });
    });

    // 파싱 데이터 설정.
    var $tempTime = ["eta", "out"];
    var $tempParse = ["type"];
    var $tempTdName = ["미션 내용"];
    var $totalArr = [$tempParse, $tempTime, $tempTdName];

    // 오스트론 (시터스)
    var $cetusData = $cetusParseData["jobs"];
    parseElement("ostron", $cetusData, $totalArr, $cetusParseData);
    
    // 솔라리스 (포르투나)
    var $solarisData = $solarisParseData["jobs"];
    parseElement("solaris", $solarisData, $totalArr, $solarisParseData);

    // 엔트라티 (데이모스)
    var $entratiData = $entratiParseData["jobs"];
    parseElement("entrati", $entratiData, $totalArr, $entratiParseData);

    /*
    // 자리만 (자리만)
    var $zarimanData = $zarimanParseData["jobs"];
    parseElement("zariman", $zarimanData, $totalArr, $zarimanParseData);
    */
}

// 균열
function fissure(data){
    var $data = data["fissures"];
    var $nomalParseData = [];
    var $hardParseData = [];
    var $stormParseDate = [];
    var $parseArr = ["isHard", "isStorm"];

    $.each($data, function(firKey, firVal){
        $.each($parseArr, function(secKey, secVal){
            if(firVal[secVal] == true ){
                if(secVal == 'isHard'){
                    $hardParseData.push(firVal);
                } else if(secVal == 'isStorm'){
                    $stormParseDate.push(firVal);
                }
            } 
        });

        if(firVal["isHard"] == false && firVal["isStorm"] == false){
            $nomalParseData.push(firVal);
        }
    });

    var $tempTime = ["eta", "in"];
    var $tempParse = ["tier", "node", "missionType", "enemy"];
    var $tempTdName = ["티어", "노드", "미션", "진영"];
    var $totalArr = [$tempParse, $tempTime, $tempTdName];

    // 일반 균열
    parseElement("fissuresNomal", $nomalParseData, $totalArr);

    // 강길 균열
    parseElement("fissuresHard", $hardParseData, $totalArr);

    // 보이드 폭풍
    parseElement("fissuresStorm", $stormParseDate, $totalArr);
}

