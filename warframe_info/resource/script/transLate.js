// 한글 번역
function tarnsLate(data){
    var $korVal = "";
    switch(data) {
        // 주기 번역
        case 'day':
            $korVal = '낮';
            break;
        case 'night': 
            $korVal = '저녁';
            break;
        case 'fass': 
            $korVal = '파스';
            break;
        case 'vome': 
            $korVal = '봄';
            break;
        case 'cold': 
            $korVal = '추움';
            break;
        case 'warm': 
            $korVal = '따뜻함';
            break;
        // 이상현상
        case 'Skirmish': 
            $korVal = '접전';
            break;
        // 출격
        case 'Environmental Hazard: Radiation Pockets': 
            $korVal = '방사선 장애';
            break;
        case 'Environmental Effect: Cryogenic Leakage': 
            $korVal = '극저온 누출';
            break;
        case 'Enhanced Enemy Shields': 
            $korVal = '강화된 적 실드';
            break;
        case 'Environmental Hazard: Fire': 
            $korVal = '화재';
            break;
        // 오스트론
        case 'Capture the Grineer Agent': 
            $korVal = '그리니어 사령관 생포';
            break;
        case 'Sabotage Bounty': 
            $korVal = '파괴공작 현상금';
            break;
        case 'Reclaim the Stolen Artifact': 
            $korVal = '도난당한 유물 되찾기';
            break;
        case 'Capture Their Leader': 
            $korVal = '리더 생포';
            break;
        case 'Find the Hidden Artifact': 
            $korVal = '숨겨진 유물 찾기';
            break;
        case 'Rise and Fall (Narmer)': 
            $korVal = '흥망성쇠(나르메르)';
            break;
            // 포르투나
        case 'Bury Them': 
            $korVal = '그들을 묻기';
            break;
        case 'Dirt Unit': 
            $korVal = '더트 유닛';
            break;
        case 'Trash Their Traps': 
            $korVal = '함정 폐기';
            break;
        case 'Blood Relics': 
            $korVal = '피 묻은 유물';
            break;
        case 'Dog Boards': 
            $korVal = 'Dog Boards';
            break;
        case 'Agent Down': 
            $korVal = '쓰러진 요원';
            break;
        case 'Digging for Narmer (Narmer)': 
            $korVal = '나르메르를 위하여 파다(나르메르)';
            break;
        // 엔트라티
        case 'Anomaly Retrieval': 
            $korVal = '이상 탐색';
            break;
        case 'For Science!': 
            $korVal = '과학을 위하여!';
            break;
        case 'Anomaly Retrieval (Endless)': 
            $korVal = '이상 탐색(무한미션)';
            break;
        case 'Brute Force': 
            $korVal = 'Brute Force';
            break;
        case 'Reclaim What\'s Ours': 
            $korVal = '우리의 것을 되찾기';
            break;
        case 'Core Samples': 
            $korVal = '중요한 샘플';
            break;
        case 'Isolation Vault Chamber B': 
            $korVal = '금고개방 B';
            break;
        case 'Isolation Vault Chamber A': 
            $korVal = '금고개방 A';
            break;
        case 'Isolation Vault Chamber C': 
            $korVal = '금고개방 C';
            break;

        // 나이트웨이브 - 일일
        case 'Swordsman':
            $korVal = '근접 무기만 장착한 채로 미션 완료하기';
            break;
        case 'Sword Dance': 
            $korVal = '근접 무기로 적 150체 처치';
            break;
        case 'Warning Shot': 
            $korVal = '적 200체 처치';
            break;
        case 'Air It Out': 
            $korVal = '미션 중 공중 지원 통신장치를 사용';
            break;
        case 'Just Visiting': 
            $korVal = '스포트라이트 도장 방문하기';
            break;
        case 'Grafitti': 
            $korVal = '글리프 한 개 배치';
            break;
        case 'Glider': 
            $korVal = '에임 글라이딩 중 적 20체 처치';
            break;
        case 'Attractive': 
            $korVal = '자성 피해로 적 150체 처치';
            break;
        case 'Detonator': 
            $korVal = '폭발 피해로 적 150체 처치';
            break;
        case 'Sharing Is Caring': 
            $korVal = '바이러스 피해로 적 150체 처치';
            break;
        case 'Meltdown': 
            $korVal = '부식 피해로 적 150체 처치';
            break;
        case 'Kleptomaniac': 
            $korVal = '보관함 20번 열기';
            break;
        case 'Doppelganger': 
            $korVal = '스펙터 배치하기';
            break;
        case 'Poisoner': 
            $korVal = '독성 피해로 적 150체 처치';
            break;
        case 'Deep Freeze': 
            $korVal = '냉기 피해로 적 150체 처치';
            break;
        case 'Child At Heart': 
            $korVal = '프레임 파이터, 해피 제피르 또는 워미우스 게임 플레이하기';
            break;
        case 'Marksman': 
            $korVal = '헤드샷으로 적 40체 처치';
            break;
        case 'Hands Full': 
            $korVal = '주무기만 장착한 채로 미션 완료하기';
            break;
        case 'Shiny': 
            $korVal = '모드 8개 획득';
            break;
        case 'Arsonist': 
            $korVal = '화염 피해로 적 150체 처치';
            break;
        case 'Executioner': 
            $korVal = '마무리 일격으로 적 1체 처치';
            break;
        case 'Saver': 
            $korVal = '15000 크레딧 획득';
            break;
        case 'Mow Them Down': 
            $korVal = '주무기로 적 150체 처치';
            break;
        case 'The Hunt is On': 
            $korVal = '신디케이트 메달리온 5개 찾기';
            break;
        case 'Gatherer': 
            $korVal = '자원 100개 수집하기';
            break;
        case 'Hush': 
            $korVal = '쿠바 노예 처치하기';
            break;
        case 'Biohazard': 
            $korVal = '가스 피해로 적 150체 처치';
            break;
        case 'Accelerator': 
            $korVal = '슬라이딩 중 적 20체 처치';
            break;
        case 'Energizing': 
            $korVal = '에너지 오브를 20개 획득';
            break;
        case 'Agent': 
            $korVal = '미션 한 개 완료';
            break;
        case 'Researcher': 
            $korVal = '25개의 물체나 적을 스캔';
            break;
        case 'Friendly Fire': 
            $korVal = '탈취한 크루쉽 조종 중 적 전투 기체 3체 파괴하기';
            break;
        case 'Reactor': 
            $korVal = '방사능 피해로 적 150체 처치';
            break;
        case 'No Mercy': 
            $korVal = '적에게 자비의 일격 가하기';
            break;
        case 'Smaller Is Bigger': 
            $korVal = '보조 무기로 적 150체 처치';
            break;
        case 'Loyalty': 
            $korVal = '쿠브로 또는 카밧과 상호반응 하기';
            break;
        case 'Communicator': 
            $korVal = '웨이포인트로 모드 및 자원 5개 표시';
            break;
        case 'Reclaimed': 
            $korVal = '리치 영향권 아래의 노드 완료하기';
            break;
        case 'Trampoline': 
            $korVal = '불릿 점프 150번 수행';
            break;
        case 'Power Trip': 
            $korVal = '어빌리티로 적 150체 처치';
            break;
        case 'Expressive': 
            $korVal = '감정 표현 1번 수행';
            break;
        case 'Short Circuit': 
            $korVal = '전기 피해로 적 150체 처치';
            break;
        case 'Hacker': 
            $korVal = '콘솔 8개 해킹';
            break;
        case 'Deep Impact': 
            $korVal = '한 번의 지면 강타 공격으로 적 5체 이상을 공중으로 띄우기';
            break;
        case 'Patron': 
            $korVal = '레베리안에 기부하기';
            break;
        case 'Sidearm': 
            $korVal = '보조 무기만 장착한 채로 미션 완료하기';
            break;
        case 'Everything Old is New Again': 
            $korVal = '모드 변환 3번 완료하기';
            break;
        case 'Stay on Top': 
            $korVal = '네크라메크 호버링 중에 적 20체 처치';
            break;
        case 'Reanimator': 
            $korVal = '데이모스에서 쓰러진 네크라메크를 조종하기';
            break;
        // 나이트웨이브 - 주간
        case 'Not a Warning Shot': 
            $korVal = '적 500체 처치';
            break;
        case 'Now Boarding': 
            $korVal = '오브 협곡에서 서로 다른 K-드라이브 경주 3개 완료';
            break;
        case 'Jailer': 
            $korVal = '생포 미션 3번 완수';
            break;
        case 'Rescuer': 
            $korVal = '구출 미션 3번 완수';
            break;
        case 'Polarized': 
            $korVal = '포르마를 사용하여 극성 1번 변경 (시뮬라크럼에서 제외)';
            break;
        case 'Venus Miner': 
            $korVal = '오브 협곡에서 레어 보석 또는 광물 6개 채광';
            break;
        case 'Venus Fisher': 
            $korVal = '오브 협곡에서 레어 서보피쉬 6마리 포획';
            break;
        case 'Venus Bounty Hunter': 
            $korVal = '오브 협곡에서 의뢰 5개 완수';
            break;
        case 'Flawless': 
            $korVal = '워프레임이 피해를 입지 않고 레일잭의 침입자 그룹 처치하기';
            break;
        case 'Vault Looter': 
            $korVal = '오로킨 볼트 4개 열기';
            break;
        case 'Sanctuary Researcher': 
            $korVal = '세팔론 시마리스 스캔 5회 완료';
            break;
        case 'Protector': 
            $korVal = '모바일 방어 미션 3번 완수';
            break;
        case 'Sound Sleeper': 
            $korVal = '아무 종류의 나이트메어 미션 3번 완수';
            break;
        case 'Test Subject': 
            $korVal = '생츄어리 맹습에서 3웨이브 격파';
            break;
        case 'Assassin': 
            $korVal = '암살 미션 3번 완수';
            break;
        case 'Confiscated': 
            $korVal = '적 크루쉽 탈취하기';
            break;
        case 'Forward Thinking': 
            $korVal = '전면포로 크루쉽 파괴하기';
            break;
        case 'Animator': 
            $korVal = '아야탄 조각상 3개 채우기';
            break;
        case 'Enhance': 
            $korVal = '레어 모드 8개 픽업';
            break;
        case 'Eximus Eliminator': 
            $korVal = '엑시무스 30체 처치';
            break;
        case 'Unlock Relics': 
            $korVal = '성유물 3개 해금';
            break;
        case 'Conservationist': 
            $korVal = '서로 다른 동물들을 완벽한 포획으로 6회 완료';
            break;
        case 'Cache Hunter': 
            $korVal = '3번의 파괴공작 미션에서 모든 저장고를 발견';
            break;
        case 'Eliminator': 
            $korVal = '섬멸 미션 3번 완수';
            break;
        case 'Good Friend': 
            $korVal = '클렘의 주간 미션 도와주기';
            break;
        case 'Heavy Ordnance': 
            $korVal = '아크윙 총기로 적 500체 처치하기';
            break;
        case 'Earth Miner': 
            $korVal = '아이돌론의 평원에서 레어 보석 또는 광물 6개 채광';
            break;
        case 'Earth Fisher': 
            $korVal = '아이돌론의 평원에서 레어 물고기 6마리 포획';
            break;
        case 'Earth Bounty Hunter': 
            $korVal = '아이돌론의 평원에서 의뢰 5개 완수';
            break;
        case 'Supporter': 
            $korVal = '신디케이트 미션 10번 완수';
            break;
        case 'Operative': 
            $korVal = '첩보활동 미션 3번 완수';
            break;
        case 'Sortie Specialist': 
            $korVal = '출격 1번 완수';
            break;
        case 'Invader': 
            $korVal = '아무 종류의 침공 미션 9번 완수';
            break;
        case 'Explorer': 
            $korVal = '레일잭 미션 3회 완료하기';
            break;
        case 'Tusk Thumpin\'': 
            $korVal = '아이돌론 평원에서 터스크 썸퍼 처치';
            break;
        case 'Don\'t Blow It': 
            $korVal = '교란 미션에서 도관 12개 완수';
            break;
        case 'Saboteur': 
            $korVal = '파괴공작 미션 3번 완수';
            break;
        // 나이트웨이브 - 엘리트 주간.
        case 'Machine Interface': 
            $korVal = '첩보활동 미션에서 알람을 울리지 않고 콘솔을 3번 직접 해킹하여 완료하기';
            break;
        case 'Speedster': 
            $korVal = '90초 이내에 생포 미션 완료하기';
            break;
        case 'Day Trader': 
            $korVal = '한 번의 인덱스 매치에서 적이 득점하지 않은 상태로 판돈 3번 연속 획득';
            break;
        case 'Walk Without Rhythm': 
            $korVal = '아이돌론 평원에서 터스크 썸퍼 도마 처치';
            break;
        case 'Defense': 
            $korVal = '방어 미션에서 최소 20 웨이브 격파';
            break;
        case 'Survival': 
            $korVal = '생존 미션에서 최소 30분 도달';
            break;
        case 'Unlock Relics': 
            $korVal = '성유물 10개 해금';
            break;
        case 'Hold Your Breath': 
            $korVal = '쿠바 생존 미션에서 생명 유지 장치를 가동하지 않고 30분 이상 생존';
            break;
        case 'Grove Guardian': 
            $korVal = '그로브 스펙터 1체 처치';
            break;
        case 'Night Terror': 
            $korVal = '아무 종류의 나이트메어 미션 10번 완수';
            break;
        case 'Eximus Executioner': 
            $korVal = '엑시무스 100체 처치';
            break;
        case 'Elite Test Subject': 
            $korVal = '엘리트 생츄어리 맹습에서 8라운드 완수';
            break;
        case 'Elite Explorer': 
            $korVal = '레일잭 미션 8회 완료하기';
            break;
        case 'Grand': 
            $korVal = '익스플로이터 오브 처치하기';
            break;
        case 'Silent Eliminator': 
            $korVal = '레벨 30 이상의 적이 있는섬멸 미션을 경보를 울리지 않고 완수하기';
            break;
        case 'Ascendant': 
            $korVal = '루아에서 승화의 홀 4번 완수';
            break;
        case 'Sortie Expert': 
            $korVal = '출격 3번 완수';
            break;
        case 'Kill Shot': 
            $korVal = '적 1500체 처치';
            break;
        case 'Kill Profit-Taker': 
            $korVal = '프로핏-테이커 처치';
            break;
        case 'Hydrolyst Hunter': 
            $korVal = '아이돌론 하이드롤리스트를 생포하거나 처치';
            break;
        case 'Choose Wisely': 
            $korVal = '쿠바 리치를 전향 또는 격파하기';
            break;
        case 'Cold Steel': 
            $korVal = '강철의 길에서 적 1000체 처치';
            break;
        case 'Fallen Angel': 
            $korVal = '자리만에서 천사 5체 처치';
            break;
        case 'Flying High': 
            $korVal = '로팔로리스트 처치';
            break;
        case 'Antiquarian': 
            $korVal = '각 티어의 유물(리스, 메소, 네오, 엑시)을 하나씩 열기';
            break;
        case 'Antiquarian': 
            $korVal = '각 티어의 유물(리스, 메소, 네오, 엑시)을 하나씩 열기';
            break;
        case 'The Many Made Whole': 
            $korVal = '10개의 리벤 조각을 리벤 모드로 바꾸기';
            break;
        default:
            $korVal = data;
            break;
        }
    return $korVal;
}