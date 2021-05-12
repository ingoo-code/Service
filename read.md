#Heroku 사용하기

## PORT 부분을 process.env.PORT || 5000 으로 작업해야함.

1. Nodejs 에서 package.json 파일안에 scripts start 부분 체크하기.
2. Github에 프로젝트 올리기
3. npm install -g heroku
4. heroku 사이트 가입하기.
5. 터미널에서 heroku login 치고 로그인하기
6. 로컬에있는 git를 원격 저장소에 연결하기 heroku git:remote -a [appname]
    확인 방법은 git remote -v


## Mysql연동하기

1. heroku 페이지에 들어가서 새로운 앱을 만들어주시고 overview탭 밑에 configure add-ons를 눌러줍니다
2. 오른쪽 밑의 find more add-ons를 눌러줘요
3. clearDB MySQL 클릭
4. mysql install 클릭
5. 자기자신 heroku app 내용 적고 submit