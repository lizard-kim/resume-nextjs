import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'LikeLion at DGIST',
      position: 'Leader, Developer',
      startedAt: '2018-03',
      descriptions: [
        'LikeLion at DGIST 운영 / 교육',
        '2020 대구 경북 아이디어톤 대회 기획 / 운영 / 플랫폼 개발 및 유지보수',
        '멋쟁이 사자처럼 중앙 아이디어톤 플랫폼 개발 및 유지보수',
        'LikeLion at DGIST assign page 개발'
      ],
      skillKeywords: ['Django', 'React.js', 'Jekyll', 'Python', 'Javascript/Jquery', 'Ruby', 'HTML/CSS', 'SASS/SCSS', 'AWS', 'ngnix'],
    },
    {
      title: 'Companoid Labs',
      position: 'Researcher',
      startedAt: '2019-01',
      descriptions: [
        'Chatbot with Touch and Graphics: An Interaction of Users for Emotional Expression and Turn-taking',
        '접수면접 데이터 기반의 감정교류를 위한 대화형 챗봇 연구',
      ],
      skillKeywords: ['UX/UI', 'Human Computer Interaction', 'Pytorch', 'Python'],
    },
    {
      title: 'Archidraw',
      position: 'Developer Intern',
      startedAt: '2020-01',
      endedAt: '2020-02',
      descriptions: [
        'Archisketch Ondemand Service 기획, full stack 개발',
        'Legacy Ondemand Service 개편, 재구축',
      ],
      skillKeywords: ['React.js', 'Django', 'Javascript', 'Python', 'HTML/CSS', 'SASS/SCSS', 'Figma'],
    },
    {
      title: 'DGIST DATA Lab',
      position: 'Research Intern',
      startedAt: '2018-12',
      endedAt: '2019-02',
      descriptions: [
        'High-Performance Key-value SSD 연구 보조',
      ],
      skillKeywords: ['Ubuntu', 'C/C++'],
    },
  ],
};

export default experience;
