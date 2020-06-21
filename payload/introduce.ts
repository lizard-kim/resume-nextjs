import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '생물을 공부하다가 컴퓨터 공학을 전공하기로 마음먹은 학생 개발자 입니다. 창업에 관심이 많으며, 여러 협업 프로젝트를 진행하면서 개발 실력뿐만 아니라 User의 needs를 빠르게 파악하는 능력을 갖기 위해 여러 경험을 쌓고 있습니다.',
    'LikeLion at DGIST에서 3년간 활동하면서 다양한 프로젝트를 진행하였습니다. 2년간 대표직을 맡으며 부원들의 프로젝트의 부족한 점을 보충해 주고, 개발과정의 로드맵을 제시 해주고 있습니다. 이 과정에서 기획/프론트엔드/백엔드/QA 등 다양한 과정을 두루 경험해보았으며, 학생들의 코딩 교육을 맡아 효과적인 교육방식에 대해 고민하고 이를 실행에 옮기고 있습니다.',
    '사람들이 쓰고 싶은 서비스를 개발하기 위해서는 UX/UI에 대한 이해도가 충분히 있어야 한다고 생각합니다. 이를 위해 사람과 컴퓨터 사이의 인터랙션의 질을 높이는 방법에 대해 연구하고, 좋은 UX 디자인이란 무엇인지 공부하고 있습니다.',
  ],
  sign: 'Teayeong',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
