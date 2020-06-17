import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Django',
      level: 3,
    },
    {
      title: 'Python',
      level: 3,
    },
    {
      title: 'AWS(EC2, S3)',
      level: 2,
    },
    {
      title: 'ngnix',
      level: 2,
    },
    
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'HTML/CSS',
      level: 3,
    },
    {
      title: 'SASS/SCSS',
      level: 3,
    },
    {
      title: 'React.js',
      level: 2,
    },
    {
      title: 'JS/Jquery',
      level: 2,
    },
    {
      title: 'Jekyll',
      level: 2,
    },
    {
      title: 'Bootstrap',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'ML/Embedded/Mobile',
  items: [
    {
      title: 'C/C++',
      level: 2,
    },
    {
      title: 'OpenCV',
      level: 2,
    },
    {
      title: 'Pytorch',
      level: 1,
    },
    {
      title: 'Keras',
      level: 1,
    },
    {
      title: 'React Native',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Vim',
    },
    {
      title: 'Git/Github',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Slack',
    },
    {
      title: 'Notion',
    },
    {
      title: 'Figma',
    },
    {
      title: 'Adobe XD',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, frontend, database, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
