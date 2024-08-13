export default function Career() {
  return (
    <>
      <div className="py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              커리어💻
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {/* One block  */}
              <div className="relative pl-16">
                <hr />
                <dt className="text-base font-semibold leading-7 ">
                  대웅제약 - 인턴
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  2023-09 ~ 2024-03
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  * AI추진팀에서 풀스택 개발자로 현업에 가능한 AI기능을 통합한
                  웹서비스를 개발하였습니다.
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  * 대웅재단 AI&BigData의 국내외 장학생들을 멘토링하며, 팀과
                  협력하여 업무를 자동화하는 서비스를 구현하였습니다.
                </dd>
                <dd className="mt-2 text-base leading-7 text-blue-800 dark:text-gray-100">
                  <a
                    className="text-blue-800 dark:text-blue-100"
                    href="https://m.daewoong.co.kr/kr/main/index"
                  >
                    회사 홈페이지
                  </a>
                </dd>
              </div>
              {/* One block  */}
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  AI회의록 시스템 - 음성을 텍스트로 바꿔주며 회의를 요약하고
                  문서로 만들어주는 시스템입니다.
                </dt>
                {/* <dd className="mt-2 text-base leading-7 text-gray-600">
                    
                  </dd> */}
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ Celery를 사용한 비동기 Multiprocessing 작업을 구현하여
                  발화자 식별 및 요약 처리 기능을 개발하였습니다.
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ WebSocket을 사용하여 실시간으로 음성 발화와 요약 처리를
                  보여주는 기능을 구현하였습니다.
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ Naver Clova 보다 더 상세한 음성 기반 요약을 제공하는
                  시스템을 개발하였습니다.
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ Docker와 아마존 CloudFront, S3 Bucket, EC2를 사용하고
                  안전한 웹서비스를 배포하였습니다.
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ <u>ReactJS</u> Typescript에서 반응형 웹디자인을
                  만들었습니다.
                </dd>
              </div>
              <div className="relative pl-16"></div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  대용량 기사 데이터의 검색 통합 시스템을 팀과 협업하여 개발.
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ 안전한 RestAPI 30개 이상을 구축하였고 ReactJS와
                  연동하였습니다.
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ WebSocket을 이요하여 실시간 기사와 관련되 챗봇 기능을
                  구현하였습니다.
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ 자연어 검색 기능을 적용하고, 최약의 경우에도 검색 응답
                  시간을 2초로 단축시켰습니다.
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ 아마존의 CloudFront, S3 Bucket, EC2, SSL 사용하고 안전한
                  웹서비스를 배포하였습니다.
                </dd>
              </div>
              <div className="relative pl-16"></div>

              {/* One block  */}
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  <a href="https://www.idstrust.com/en">idsTrust</a>의 개발팀과
                  협업하여 OCR(서류 이미지 인식 및 데이터 추출)
                  API구현하였습니다.
                </dt>
                {/* <dd className="mt-2 text-base leading-7 text-gray-600">
                    
                  </dd> */}
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ Flask RestAPI를 통해 이미지를 인식하여 추출된 데이터를
                  전달하는 기능을 구축하였습니다.
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ 프로젝트를 Docker에서 배포 및 유지보수 문서 작성하였습니다.
                </dd>
              </div>

              {/* One block  */}
              {/* One block  */}
              <div className="relative pl-16">
                <hr />
                <dt className="text-base font-semibold leading-7 dark:text-gray-100">
                  대웅제약 - AI & BigData 직장체험
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  2023-07 ~ 2023-08
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  AI추진 팀 - AI회의록 시스템 개발과 데이터 스크래핑하였습니다.
                </dd>
                <dd className="mt-2 text-base leading-7 text-blue-800 dark:text-gray-100">
                  <a
                    className="text-blue-800 dark:text-blue-100"
                    href="https://m.daewoong.co.kr/kr/main/index"
                  >
                    회사 홈페이지
                  </a>
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  2만개 이상 건강 기사 스크래핑
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ BeautifulSoup 및 Selenium을 활용하여 데이터
                  스크래핑했습니다.
                </dd>
              </div>
              {/* One block  */}
              <div className="relative pl-16"></div>
              {/* One block  */}
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  마케팅 AI회의록 시스템 - 음성과 피피티 파일 기반으로 요약
                  해주는 서비스를 개발하였습니다.
                </dt>
                {/* <dd className="mt-2 text-base leading-7 text-gray-600">
                    <b>OpenAI(Whisper, ChatGPT), LangChain</b>을 사용하여 회의의{' '}
                    <b>음성</b>과 <b>Ppt</b> 파일 기반으로 데이터 추출과 요약을
                    자동화하는 시스템을 구축 했습니다.
                  </dd> */}
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ Python 에서 OpenAI(Whisper)라이브러리를 활용하여 회의의
                  음성의 텍스트로 변환하고 화자 별로 구분하여 Word 문서로
                  저장하는 기능을 구현했습니다.
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ <u>Django</u>를 사용하여 FrontEnd 와 데이터를 교환하기 위한
                  RestAPI와 JWT인증을 구축하였습니다.
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ <u>ReactJS</u>에서 반응형 디자인과 Axios 라이브러리를
                  활용하여 백엔드와 API 를 통해 연동했습니다.
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ AWS EC2서버에서 Nginx와 Docker를 사용하여 프로젝트를
                  배포했습니다.
                </dd>
              </div>
              {/* One block  */}

              {/* One block  */}

              {/* One block  */}
              <div className="relative pl-16">
                <hr />
                <dt className="text-base font-semibold leading-7 ">
                  Azure Cloud SDK - Sprint Contribution
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                2022-04 ~ 2022-04
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  Contribution Academy
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  {" "}
                  2022 OpenSource Contribution Academy - Azure 클라우드 오픈소스
                  SDK{" "}
                </dd>
                <dd className="mt-2 text-base leading-7 text-blue-800">
                  <a
                    className="text-blue-800 dark:text-blue-100"
                    href="https://www.contribution.ac/"
                  >
                    컨트리뷰션 아카데미 페이지
                  </a>
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                팀 컨트리뷰션
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ Azure 클라우드 터미널 인터페이스에서 파이썬을사용하여 가상
                  기기의 주소를 Musk형식으로 반환하는 기능과 명령어
                  추가했음니다.
                </dd>
              </div>
              {/* One block  */}

              {/* One block  */}
              <div className="relative pl-16">
                <hr />
                <dt className="text-base font-semibold leading-7 dark:text-gray-100">
                  Codecraft.uz
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  2017.06 ~ 2018.06
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  IT교육 센터
                </dd>
                <dd className="mt-2 text-base leading-7 text-blue-800 dark:text-blue-100">
                  <a className="text-blue-800 dark:text-blue-100" href="http://www.codecraft.uz/">
                    교육 센터 페이지
                  </a>
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  FrontEnd web Instructor
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-100">
                  ✅ IT교육 센터에서 9-16세 아이들 100명 이상을 “HTML, CSS, JS
                  기초, Bootstrap”으로 교육했습니다.
                </dd>
              </div>
              {/* One block  */}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
