// Pages/Components
import Header from './pages/header/page';
// I18n lang
import { getDictionary, getLang } from '../i18n/i18n_functions';
import About from './pages/about/page';
import Experience from './pages/experience/page';
import Landing from './pages/landing/page';
import SocialsBar from './components/SocialsBar/SocialsBar';
import { LogoType } from './props/HeaderProps';
import { Site } from './props/SocialsBarProps';

const headerLogo: LogoType = {
  imageLogo: '/my_logos/logo_jv_bold_cyan_white_sq.svg',
  imageLogoSecondary: '/my_logos/logo_jv_bold_cyan_sq.svg',
  altLogo: 'JV Logo',
};

const otherSites: Site[] = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/joaquin-veirana/',
  },
  {
    name: 'github',
    link: 'https://github.com/joaquinveirana',
  },
  {
    name: 'gmail',
    link: 'mailto:joaquin.veirana@gmail.com',
  },
  {
    name: 'credly',
    link: 'https://www.credly.com/users/joaquin-veirana/badges?sort=-state_updated_at&page=1',
  },
];

export default async function Main() {
  const lang = await getLang();
  const dict = await getDictionary(lang);

  return (
    <>
      <main className='flex-col-centered min-h-screen scroll-smooth overflow-x-hidden w-full '>
        <Header logo={headerLogo} textContent={dict.header}></Header>
        <Landing textContent={dict.landing}></Landing>
        <About textContent={dict.about}></About>
        <Experience textContent={dict.experience}></Experience>
        <SocialsBar growTimeout={600} sites={otherSites}></SocialsBar>
      </main>
    </>
  );
}
