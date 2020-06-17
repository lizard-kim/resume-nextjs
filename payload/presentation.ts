import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: true,
  /* 멋사 세미나 좀 쌓이면 넣자 */

  list: [
    {
      title: 'Lorem ipsum',
      subTitle: 'consectetur adipiscing elit',
      at: '2017-10',
      descriptions: [
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net//',
        },
      ],
    },
  ],
};

export default presentation;
