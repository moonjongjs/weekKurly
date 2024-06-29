<?
    // CORS 보내는주소 받는주소가 다른경우 오류 거부정책
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");


        $DB_SERVER = 'localhost';
        $DB_USER_NAME = 'moonjong';
        $DB_USER_PW = 'anstjswhd0105#';
        $DB_NAME =  'moonjong';

        $conn = mysqli_connect($DB_SERVER,$DB_USER_NAME, $DB_USER_PW, $DB_NAME);
        mysqli_set_charset($conn, 'utf8');


        // 회원가입폼 리액트 전송 받은 데이터 입력
        // 변수 = 값
        $userId = $_POST['userId'];
        $userPw = $_POST['userPw'];
        $userName = $_POST['userName'];
        $userEmail = $_POST['userEmail'];
        $userHp = $_POST['userHp'];
        $userPostcode = $_POST['userPostcode'];
        $userAddr1 = $_POST['userAddr1'];
        $userAddr2 = $_POST['userAddr2'];
        $userGender = $_POST['userGender'];
        $userYear = $_POST['userYear'];
        $userMonth = $_POST['userMonth'];
        $userDate = $_POST['userDate'];
        $userChooga = $_POST['userChooga'];
        $userChamyeoEvent = $_POST['userChamyeoEvent'];
        $userChoochuninId = $_POST['userChoochuninId'];
        $userService = $_POST['userService'];

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