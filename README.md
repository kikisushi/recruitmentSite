# recruitmentSite

# 커밋 컨벤션

타입
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
refactor: 코드 리팩토링
chore: 빌드 업무 수정, 패키지 매니저 수정, production code와 무관한 부분들 (.gitignore, build.gradle 같은)
comment: 주석 추가 및 변경
remove: 파일, 폴더 삭제
rename: 파일, 폴더명 수정

# 프로젝트를 초기화합니다.

yarn init -y

# 라이브러리를 설치합니다.

yarn add express prisma @prisma/client cookie-parser jsonwebtoken

# nodemon 라이브러리를 DevDependency로 설치합니다.

yarn add -D nodemon

# 설치한 Prisma를 초기화 하여, Prisma를 사용할 수 있는 구조를 생성합니다.

npx prisma init
