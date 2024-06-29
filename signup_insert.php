<?
    // 1. 권한설정
    //  PHP 변수는 반드시 
    // 첫글자 $ 반드시 사인 사용
    // 끝에는 ; 반드시 쎄미콜론 사용한다.
    // 등호 뒤에 = value 값은 반드시 문자열은 인용부호로 감싸준다.
    // 1-1. 변수설정
    $DB_SERVER = 'localhost';
    $DB_USER_NAME = 'moonjong';
    $DB_USER_PW = 'anstjswhd0105#';
    $DB_NAME =  'moonjong';

    // 1-2. 데이터베이스 컨넥션(연결) Connection => connect
    $conn = mysqli_connect($DB_SERVER,$DB_USER_NAME, $DB_USER_PW, $DB_NAME);
    mysqli_set_charset($conn, 'utf8');

    // 1-3. 데이터베이스 컨넥션(연결) 확인 => true 또는 false
    if($conn ==false){
        echo "데이터베이스 컨넥션(연결) 실패! 접속정보 확인하고 다시 시도해주세요";
    }
    else{
        echo "데이터베이스 컨넥션(연결) 성공! 반갑습니다.^^";
    }
    
    
    // 2. 본문
    // 2-1. 회원가입 입력 INSERT
    





    // 3. 결문
?>