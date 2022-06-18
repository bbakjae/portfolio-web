import logo from '../../public/logo.png';
import twitter from '../../public/twitter.png';
import github from '../../public/github.png';
import insta from '../../public/insta.png';
import profile from '../../public/test.jpg';
const HomePage = () => {
  return (
    <div className='main-page'>
      <div className='menu-text-box'>
        <img className='menu-img' src={logo.src} />
        <div className='menu-text'>
          <button className='menu-text-content'>Home</button>
          <button className='menu-text-content'>About</button>
          <button className='menu-text-content'>Tech&nbsp;Stack</button>
          <button className='menu-text-content'>Projects</button>
          <button className='menu-text-content'>Contact</button>
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
      </div>
      <div className='intro-box'>
        <div className='intro-text'>
          Hi 👋, <br />
          My Name is <span className='name-gradient'>BBakJae</span> <br />
          I'm a Server Developer
        </div>
        <img src={profile.src} className='intro-img' />
      </div>
      <div className='stack'>
        <div className='stack-title'>
          My Stack List
          <div className='stack-description'>Technologies I've been working with recently</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
