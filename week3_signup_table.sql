-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- 생성 시간: 24-06-29 13:29
-- 서버 버전: 8.0.36
-- PHP 버전: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `moonjong`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `week3_signup_table`
--

CREATE TABLE `week3_signup_table` (
  `idx` int NOT NULL COMMENT '자동 증가 번호',
  `userId` varchar(16) COLLATE utf8mb4_general_ci NOT NULL COMMENT '아이디',
  `userPw` varchar(16) COLLATE utf8mb4_general_ci NOT NULL COMMENT '비밀번호',
  `userName` varchar(50) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이름',
  `userEmail` varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이메일',
  `userHp` varchar(11) COLLATE utf8mb4_general_ci NOT NULL COMMENT '휴대폰',
  `userPostcode` varchar(6) COLLATE utf8mb4_general_ci NOT NULL COMMENT '우편번호',
  `userAddr1` varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT '주소1',
  `userAddr2` varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT '주소2',
  `userGender` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '성별',
  `userYear` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '생년',
  `userMonth` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '생월',
  `userDate` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '생일',
  `userChooga` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '추가 입력 사항',
  `userChamyeoEvent` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '참여 이벤트 명',
  `userChoochuninId` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '추천인 아이디',
  `userService` varchar(500) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이용 약관 동의',
  `userGaib` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '가입일'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='마켓컬리 회원가입폼 테이블';

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `week3_signup_table`
--
ALTER TABLE `week3_signup_table`
  ADD PRIMARY KEY (`idx`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `week3_signup_table`
--
ALTER TABLE `week3_signup_table`
  MODIFY `idx` int NOT NULL AUTO_INCREMENT COMMENT '자동 증가 번호';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
