
- [Apollo Server requires either an existing schema, modules or typeDefs]
  - 이 에러는 초기 GraphQL 설정시 존재하는 스키마 또는 모듈, 타입 정보가 없기 때문에 반드시 하나는 정의를 해야 GraphQL 초기 서비스 세팅이 완료됩니다.

- [No type definitions were found with the specified file name patterns: "${paths}". Please make sure there is at least one file that matches the given patterns]
  - 초기 설정 파일만 있고, resolver 와 schema 가 존재하지 않아 발생하는 에러 입니다.
  - 