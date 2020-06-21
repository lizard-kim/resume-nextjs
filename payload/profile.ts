import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/lizard_profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'Taeyeong Kim',
    small: '(Tony)',
  },
  contact: [
    {
      title: 'rlaxodud1122@gmail.com',
      link: 'mailto:rlaxodud1122@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/lizard-kim',
      link: 'https://github.com/lizard-kim',
      icon: faGithub,
    },
    {
      link: 'https://fb.com/rlaxodud',
      icon: faFacebook,
    },
  ],

  notice: {
    title: '이메일로 연락주시면 감사하겠습니다 :)',
    icon: faBell,
  },
};

export default profile;
