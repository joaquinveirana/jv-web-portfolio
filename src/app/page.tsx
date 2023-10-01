// Pages/Components
import Header from './pages/Header/page';
// I18n lang
import { getDictionary, getLang } from '../i18n/i18n_functions';
import { Landing } from './pages/Landing/page';
import { SocialsBar } from './components/SocialsBar/SocialsBar';
import { About } from './pages/About/page';
import { Experience } from './pages/Experience/page';
import { LogoType } from './props/HeaderProps';
import { Projects } from './pages/Projects/page';
import { Contact } from './pages/Contact/page';

const headerLogo: LogoType = {
  imageLogo: '/my_logos/logo_jv_bold_cyan_white_sq.svg',
  imageLogoSecondary: '/my_logos/logo_jv_bold_cyan_sq.svg',
  altLogo: 'JV Logo',
};

export default async function Main() {
  const lang = await getLang();
  const dict = await getDictionary(lang);

  return (
    <>
      <main className='flex-col-centered min-h-screen w-full'>
        <Header logo={headerLogo} textContent={dict.header}></Header>
        <Landing textContent={dict.landing}></Landing>
        <section className='main-section-class'>
          <About textContent={dict.about}></About>
          <Experience textContent={dict.experience}></Experience>
          <Projects textContent={dict.projects}></Projects>
          <Contact textContent={dict.contact}></Contact>
          <SocialsBar growTimeout={600} sites={dict.socials}></SocialsBar>
        </section>
      </main>
    </>
  );
}
