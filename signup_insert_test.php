<?
        $DB_SERVER = 'localhost';
        $DB_USER_NAME = 'moonjong';
        $DB_USER_PW = 'anstjswhd0105#';
        $DB_NAME =  'moonjong';

        $conn = mysqli_connect($DB_SERVER,$DB_USER_NAME, $DB_USER_PW, $DB_NAME);
        mysqli_set_charset($conn, 'utf8');


        // 회원가입 데이터 더미데이터 입력
        // 변수 = 값
        $userId = "moonjong";
        $userPw = "moonjong1234";
        $userName = "이순신";
        $userEmail = "moonjong@naver.com";
        $userHp = "01079425305";
        $userPostcode = "100-12";
        $userAddr1 = "서울시 서초구 서초동";
        $userAddr2 = "서초빌딩 1303호";
        $userGender = "남자";
        $userYear = "1970";
        $userMonth = "09";
        $userDate = "29";
        $userChooga = "친구초대 추천인 아이디";
        $userChamyeoEvent = "";
        $userChoochuninId = "seonjong";
        $userService = "이용약관 동의, 개인정보 수집∙이용 동의, 본인은 만 14세 이상입니다.";

        // SQL
        $sql = "INSERT INTO week3_signup_table(userId,userPw,userName,userEmail,userHp,userPostcode,userAddr1,userAddr2,userGender,userYear,userMonth,userDate,userChooga,userChamyeoEvent,userChoochuninId,userService) 
                   VALUES('$userId','$userPw','$userName','$userEmail','$userHp','$userPostcode','$userAddr1','$userAddr2','$userGender','$userYear','$userMonth','$userDate','$userChooga','$userChamyeoEvent','$userChoochuninId','$userService')";
        $result = mysqli_query($conn, $sql);

        if($result==true){
            echo "데이터베이스 테이블에 데이터가 성공적으로 저장 되었습니다.";
        }
        else{
            echo "데이터베이스 테이블에 데이터 저장이 실패 되었습니다. 데이터를 확인하고 다시 시도해주세요.";
        }


?>