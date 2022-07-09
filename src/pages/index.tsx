import { scrollToHome, scrollToProject, scrollToTechStack } from './behavior';
import { img } from './images';
import { projects } from './ProjectInfo';

const {
  github,
  insta,
  logo,
  profile,
  graphqlMenu,
  apollo,
  aws,
  fxts,
  gcp,
  graphql,
  maria,
  nginx,
  nodejs,
  prisma,
  python,
  ts,
  ubuntu,
} = img;

const techImages = [
  apollo,
  aws,
  fxts,
  gcp,
  graphql,
  maria,
  nginx,
  nodejs,
  prisma,
  python,
  ts,
  ubuntu,
];

const HomePage = () => {
  return (
    <div className='main-page'>
      {/* 메뉴바 */}
      <div className='menu-text-box'>
        <img className='menu-img' src={logo.src} />
        <div className='menu-text'>
          <button className='menu-text-content' onClick={scrollToHome}>
            Home
          </button>
          <button className='menu-text-content'>About</button>
          <button className='menu-text-content' onClick={scrollToTechStack}>
            Tech&nbsp;Stack
          </button>
          <button className='menu-text-content' onClick={scrollToProject}>
            Projects
          </button>
          <button className='menu-text-content'>Contact</button>
        </div>
        <div className='menu-icon-box'>
          <a href='https://github.com/bbakjae' className='menu-icon'>
            <img src={github.src}></img>
          </a>
          <a href='https://api.bbakjae.me/portfolio/graphql' className='menu-icon'>
            <img src={graphqlMenu.src}></img>
          </a>
          <a href='https://www.instagram.com/bbak__jae/' className='menu-icon'>
            <img src={insta.src}></img>
          </a>
        </div>
      </div>
      {/* 자기소개 */}
      <div className='intro-box'>
        <div className='intro-text'>
          반갑습니다 👋 <br />
          소통하는<span className='name-gradient'> 개발자</span> 박재현입니다. <br />
          <span className='name-gradient'>{'{'} </span>BackEnd Developer{' '}
          <span className='name-gradient'> {'}'}</span>
          <br />
        </div>
        <img src={profile.src} className='intro-img' />
      </div>
      {/* Stack List */}
      <div className='stack'>
        <div className='stack-title'>Tech Stack</div>
        <div className='stack-description'>지금까지 실무에서 직접 사용했던 기술 스택입니다</div>
        <div className='stack-icon-box'>
          {techImages.map(v => (
            <img className='stack-icon' src={v.src}></img>
          ))}
        </div>
      </div>
      {/* Projects*/}
      <div className='project'>
        <div className='project-title'>Projects</div>
        <div className='project-description'>지금까지 진행했던 프로젝트입니다</div>
        <div className='scroll-next'>
          Scroll Next <span className='arrow-right'></span>
        </div>
        <div className='project-box'>
          {/* <div className='project-wrapper'> */}
          {[projects].flat().map(v => {
            return (
              <div className='project-item-container'>
                <img className='project-item-img' src={v.img.src} />
                <div className='project-item-title'>{v.title}</div>
                <div className='project-item-content'>{v.content}</div>
                <div className='project-item-part'>업무 : {v.part.join(', ')}</div>
                <div className='project-item-techStack'>사용 스택 : {v.techStack.join(', ')}</div>
              </div>
            );
          })}
          {/* </div> */}
        </div>
      </div>
      <div className='contact'>
        <div className='contact-left'>
          <div>별명 : BBAKJAE</div>
          <br></br>
          <div>대표자 : 박재현</div>
          <br></br>
          <div>직업 : Server Developer</div>
        </div>
        <div className='contact-right'>
          <div className='menu-icon-box'>
            <a href='https://github.com/bbakjae' className='menu-icon'>
              <img src={github.src}></img>
            </a>
            <a href='https://api.bbakjae.me/portfolio/graphql' className='menu-icon'>
              <img src={graphqlMenu.src}></img>
            </a>
            <a href='https://www.instagram.com/bbak__jae/' className='menu-icon'>
              <img src={insta.src}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
