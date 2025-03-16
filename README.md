<div align="center">
<img src="./readme/layout/imgLogo.png" width=300px />
</div>

## 우리들의 추억 저장소, WOOMS

개방적인 SNS에 피로감을 느끼는 사람들을 위한 메타버스, WOOMS <br> 소수의 인원이
그룹을 구성해 방명록, 사연 남기기, 픽셀 변환 사진 저장, 편지 주고 받기 등 다양한
방식으로 추억을 저장하고 소통할 수 있는 공간입니다 😊 <br>

> 개발 기간: 2024.07.08 ~ 2024.08.16

## 목차

### - [주요 기능](#주요-기능)

### - [서비스 화면](#서비스-화면)

### - [기술 스택](#기술-스택)

### - [팀원 구성](#팀원-구성)

### - [회고](#회고)

<br><br>

## 주요 기능

### 그룹 내 멀티 플레이어 모션 및 실시간 채팅

- 같은 그룹에 있는 온라인 사용자끼리 위치 정보를 주고 받아 서로의 움직임을
  확인할 수 있습니다.
- 실시간으로 채팅을 주고 받을 수 있고, 이를 말풍선 및 채팅창으로 확인할 수
  있습니다.

### 편지 작성

- 내가 가입한 그룹 내에 있는 사람들에게 편지를 작성할 수 있습니다.
- 편지 도착 예정일을 지정할 수 있습니다.(하루 뒤, 사흘 뒤, 일주일 뒤)

### 편지함

- 읽은 편지와 안 읽은 편지를 구분해, 안 읽은 편지를 먼저 띄웁니다.
- 편지가 오는 중인지 아닌지 알 수 있습니다.

### 사진관

- 그룹 내 사람들끼리 공유하는 사진관입니다.
- 사진을 픽셀 변환해 업로드 할 수 있습니다.
- 픽셀 변환의 정도와 색상 팔레트를 선택할 수 있습니다.
- 사진을 더이상 보여주기 싫다면 사진을 뒤집어놓을 수 있습니다.

### 사진 지도(채움)

- 업로드 한 사진의 메타데이터로 지도의 어느 위치에 해당하는지 확인해, 지도에
  있는 픽셀의 색을 채웁니다.
- 그룹 별로 방장이 색을 지정할 수 있으며, 같은 위치에 업로드 된 사진이 많을수록
  색이 진해집니다.

### 방명록

- 그룹 내 사람들끼리 공유하는 방명록입니다.
- 하루에 한 번 작성할 수 있습니다.

### 라디오

- 그룹 내 인원들끼리 공유합니다.
- 사연을 작성하면, AI가 실제 라디오 DJ처럼 스크립트를 작성해 읽어줍니다. (TTS)

<br><br>

## 서비스 화면

### 메인 페이지

![main](./readme/layout/image.png)

|                        로그인                         |                       회원가입                       |
| :---------------------------------------------------: | :--------------------------------------------------: |
| <img src="./readme/layout/login.png" width="300px" /> | <img src="./readme/layout/join.png" width="300px" /> |

### 개인 공간 페이지

![solo](./readme/map/solo.png)

|                           편지 작성                           |                            편지함                            |                           편지 읽기                           |
| :-----------------------------------------------------------: | :----------------------------------------------------------: | :-----------------------------------------------------------: |
| <img src="./readme/feature/letter-write.png" width="200px" /> | <img src="./readme/feature/letter-read.png" width="200px" /> | <img src="./readme/feature/letter-read2.png" width="200px" /> |

### 그룹 공간 페이지

![group](./readme/map/introMap.png)

|                      사진 픽셀 변환                      |                          사진 지도                          |
| :------------------------------------------------------: | :---------------------------------------------------------: |
| <img src="./readme/feature/photoImg.png" width="300px"/> | <img src="./readme/feature/photoMapImg.png" width="300px"/> |

|                          방명록                           |                          라디오                          |
| :-------------------------------------------------------: | :------------------------------------------------------: |
| <img src="./readme/feature/guestbook.png" width="300px"/> | <img src="./readme/feature/radioImg.png" width="300px"/> |

|  실제 화면 및 적용한 애니메이션 효과   |
| :------------------------------------: |
| <img src="./readme/map/animation.gif"> |

|          말풍선 사용 (UCC 일부)           |
| :---------------------------------------: |
| <img src="./readme/map/speechbubble.gif"> |

## 기술 스택

### FRONTEND

![react](http://img.shields.io/badge/React-2E2E2E?style=for-the-badge&logo=React&logoColor=61DAFB)
![js](http://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![pixijs](http://img.shields.io/badge/pixijs-E72264?style=for-the-badge)
![stompjs](http://img.shields.io/badge/stompjs-57CFB9?style=for-the-badge)
![redux](http://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux)
![axios](http://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&)
![vite](http://img.shields.io/badge/vite-fafafa?style=for-the-badge&logo=vite)
![tailwind](http://img.shields.io/badge/tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

### BACKEND

![java](http://img.shields.io/badge/java-1774B8?style=for-the-badge)
![springboot](http://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![security](http://img.shields.io/badge/security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![dataJPA](http://img.shields.io/badge/data_Jpa-6DB33F?style=for-the-badge)
![swagger](http://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![OAuth2](http://img.shields.io/badge/oauth_2.0-212121?style=for-the-badge)
![openAI](http://img.shields.io/badge/openai-412991?style=for-the-badge&logo=openai&logoColor=white)
![websocket](http://img.shields.io/badge/websocket-212121?style=for-the-badge)
![SMTP](http://img.shields.io/badge/SMTP-454545?style=for-the-badge)

---

### INFRA

![AWS EC2](http://img.shields.io/badge/aws_ec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white)
![Jenkins](http://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![nginx](http://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![prometheus](http://img.shields.io/badge/prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)
![grafana](http://img.shields.io/badge/grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white)

---

### DATA

![MySQL](http://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white)
![Redis](http://img.shields.io/badge/Redis-FF4438?style=for-the-badge&logo=redis&logoColor=white)
![S3](http://img.shields.io/badge/amazon_s3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)

---

### TOOLS

![git](http://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)
![jira](http://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white)
![notion](http://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![slack](http://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

<br><br>

## 팀원 구성

| 송도언(팀장) | 김도예 | 윤대영 | 이현수 | 정 훈 |  홍성우   |
| :----------: | :----: | :----: | :----: | :---: | :-------: |
|      BE      |   FE   |   FE   |   BE   |  FE   | Infra, BE |
