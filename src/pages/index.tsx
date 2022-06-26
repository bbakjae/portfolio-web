import { img } from './images';

const {
  github,
  insta,
  logo,
  profile,
  twitter,
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
          <button className='menu-text-content'>Home</button>
          <button className='menu-text-content'>About</button>
          <button className='menu-text-content'>Tech&nbsp;Stack</button>
          <button className='menu-text-content'>Projects</button>
          <button className='menu-text-content'>Contact</button>
        </div>
        <div className='menu-icon-box'>
          <a href='https://github.com' className='menu-icon'>
            <img src={github.src}></img>
          </a>
          <a href='https://naver.com' className='menu-icon'>
            <img src={twitter.src}></img>
          </a>
          <a href='https://naver.com' className='menu-icon'>
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

      <div className='stack'>
        <div className='stack-title'>My Stack List</div>
        <div className='stack-description'>지금까지 실무에서 직접 사용했던 기술 스택입니다</div>
        <div className='stack-icon-box'>
          {techImages.map(v => (
            <img className='stack-icon' src={v.src}></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
