import './page1.scss';
import html from './page1.hbs';
import Page from '../../components/page/page';

export default function Page1Include() {
  const $page = Page('Page1', {
    id: 'kp4lb4u1',
    secondary: true,
  });
  $page.content = html;
  $page.render();
}
