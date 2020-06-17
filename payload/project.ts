import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'LikeLion Ideathon Platform',
      startedAt: '2020-04',
      where: 'LikeLion at DGIST',
      descriptions: [
        { content: '본인의 아이디어를 자유롭게 공유 / 피드백 할 수 있는 플랫폼' },
        { content: '홈페이지', href: 'http://idea.likelion.org/' },
      ],
    },
    {
      title: '2020 대구경북 아이디어톤 대회 플랫폼',
      startedAt: '2020-05',
      endedAt: '2020-06',
      where: 'LikeLion at DGIST',
      descriptions: [
        {
          content: '2020 대구경북 아이디어톤 대회 플랫폼',
          weight: 'MEDIUM',
          descriptions: [{ content: '공지사항, 피드백, 결과물 제출을 본 플랫폼을 통해 진행' }],
        },
        {
          content: '2020 대구경북 아이디어톤 대회 시민투표 플랫폼',
          weight: 'MEDIUM',
          descriptions: [
            { content: '회원가입 없이 투표가 가능하도록 개발' },
            { content: '참여자 입장에서 최대한 귀찮음을 느끼지 않도록 UI 디자인' },
            { content: '최대 일일 접속자수 500여명' },
          ],
        },
        {
          content: '언론 보도자료',
          href: 'http://www.veritas-a.com/news/articleView.html?idxno=325936',
        },
      ],
    },
    {
      title: 'Archisketch Ondemand Service',
      startedAt: '2020-01',
      endedAt: '2020-02',
      where: 'Archidraw',
      descriptions: [
        {
          content:
            '고객에게 받은 건물 및 인테리어 데이터를 바탕으로 평면도/조감도 이미지와 2D / 3D 도면 컨텐츠를 구축하여 전달해주는 서비스',
        },
        {
          content:
            'User 친화적인 user page와 request 를 효율적으로 관리할 수 있는 admin page 기획, 개발',
        },
      ],
    },
    {
      title: '임베디드 SW 경진대회 자율주행 부문',
      startedAt: '2019-06',
      endedAt: '2019-12',
      where: 'DGIST',
      descriptions: [
        {
          content: '모형자동차 자율주행 알고리즘 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'OpenCV를 이용한 차선 인식, 적외선 센서를 이용한 장애물 탐지' },
            { content: 'Multi-thread programming 빠르고 정확한 주행 알고리즘 개발' },
            { content: '미션별 자율주행 코드 통합' },
          ],
        },
      ],
    },
    {
      title: 'NEMESIS(네메시스)',
      startedAt: '2019-08',
      endedAt: '2019-09',
      where: 'LikeLion at DGIST',
      descriptions: [
        { content: '구매한 물건의 단점을 리뷰하는 서비스 기획, 개발' },
        { content: 'LikeLion 7th hackathon' },
      ],
    },
  ],
};

export default project;
