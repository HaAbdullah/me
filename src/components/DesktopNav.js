// DesktopNav.js
import React, {useState, useEffect} from 'react';
import './DesktopNav.css';

const DesktopNav = () => {
  // For animation
  const [userMoved, setUserMoved] = useState(false)

  const handleScroll = () => {
    // For animation
    if (window.scrollY > 50) {
      setUserMoved(true);
    } 
    else setUserMoved(false);

    const scrollPosition = window.scrollY; // Get the current scroll position
    console.log(scrollPosition)
    const newHeight = scrollPosition === 0 ? 0 : ((scrollPosition/document.documentElement.scrollHeight + window.innerHeight/document.documentElement.scrollHeight)* 100); // Calculate height based on the current distance/ total distance :D

    // Update the CSS variable on the navbar element
    document.documentElement.style.setProperty('--line-width', `${newHeight}%`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Listen for scroll events and call scroll function

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    <div>
    <nav className={`navbar ${userMoved ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <span className="logo">Abdullah Hasanjee</span>
        <a href="#hero" className="nav-item">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#timeline" className="nav-item">Experiences</a>
        <a href="#contact" className="nav-item">Contact</a>
      </div>
      <div className="navbar-icons">
        {/* Email icon */}
        <a href="mailto:abdullah.hasanjee@gmail.com" target="_blank" rel="noopener noreferrer">
          <svg className="hoverIcon" xmlns="http://www.w3.org/2000/svg" width="33" height="29" viewBox="0 0 33 29" fill="none">
            <path d="M33 4.12241C33 2.23417 31.515 0.689255 29.7 0.689255H3.3C1.485 0.689255 0 2.23417 0 4.12241V24.7213C0 26.6096 1.485 28.1545 3.3 28.1545H29.7C31.515 28.1545 33 26.6096 33 24.7213V4.12241ZM29.7 4.12241L16.5 12.7053L3.3 4.12241H29.7ZM29.7 24.7213H3.3V7.55557L16.5 16.1385L29.7 7.55557V24.7213Z" fill="currentColor"/>
          </svg>
        </a>
        {/* Github Icon */}
        <a href="https://github.com/HaAbdullah" target="_blank" rel="noopener noreferrer">
          <svg className="hoverIcon" xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
            <path d="M14 0.689255C12.1615 0.689255 10.341 1.05328 8.64243 1.76054C6.94387 2.4678 5.40053 3.50445 4.1005 4.81131C1.475 7.45061 0 11.0303 0 14.7628C0 20.9833 4.018 26.2609 9.576 28.1327C10.276 28.2453 10.5 27.809 10.5 27.429V25.0506C6.622 25.895 5.796 23.1647 5.796 23.1647C5.152 21.5322 4.242 21.0959 4.242 21.0959C2.968 20.2234 4.34 20.2515 4.34 20.2515C5.74 20.35 6.482 21.7011 6.482 21.7011C7.7 23.8403 9.758 23.207 10.556 22.8692C10.682 21.9544 11.046 21.3352 11.438 20.9833C8.33 20.6315 5.068 19.4212 5.068 14.0591C5.068 12.497 5.6 11.2444 6.51 10.2452C6.37 9.89336 5.88 8.42971 6.65 6.52978C6.65 6.52978 7.826 6.1498 10.5 7.96529C11.606 7.65567 12.81 7.50086 14 7.50086C15.19 7.50086 16.394 7.65567 17.5 7.96529C20.174 6.1498 21.35 6.52978 21.35 6.52978C22.12 8.42971 21.63 9.89336 21.49 10.2452C22.4 11.2444 22.932 12.497 22.932 14.0591C22.932 19.4352 19.656 20.6174 16.534 20.9693C17.038 21.4055 17.5 22.264 17.5 23.5729V27.429C17.5 27.809 17.724 28.2594 18.438 28.1327C23.996 26.2468 28 20.9833 28 14.7628C28 12.9147 27.6379 11.0846 26.9343 9.3771C26.2307 7.66961 25.1995 6.11816 23.8995 4.81131C22.5995 3.50445 21.0561 2.4678 19.3576 1.76054C17.659 1.05328 15.8385 0.689255 14 0.689255Z" fill="currentColor"/>
          </svg>
        </a>
        {/* Linkedin icon */}
        <a href="https://www.linkedin.com/in/abdullah-hasanjee-114a01225/" target="_blank" rel="noopener noreferrer">
          <svg className="hoverIcon" xmlns="http://www.w3.org/2000/svg" width="27" height="29" viewBox="0 0 27 29" fill="none">
            <path d="M24 0.689255C24.7956 0.689255 25.5587 1.01077 26.1213 1.58308C26.6839 2.15538 27 2.93159 27 3.74095V25.1028C27 25.9122 26.6839 26.6884 26.1213 27.2607C25.5587 27.833 24.7956 28.1545 24 28.1545H3C2.20435 28.1545 1.44129 27.833 0.87868 27.2607C0.31607 26.6884 0 25.9122 0 25.1028V3.74095C0 2.93159 0.31607 2.15538 0.87868 1.58308C1.44129 1.01077 2.20435 0.689255 3 0.689255H24ZM23.25 24.3399V16.2529C23.25 14.9336 22.7348 13.6684 21.8178 12.7356C20.9007 11.8027 19.6569 11.2786 18.36 11.2786C17.085 11.2786 15.6 12.0721 14.88 13.2622V11.5685H10.695V24.3399H14.88V16.8175C14.88 15.6426 15.81 14.6813 16.965 14.6813C17.522 14.6813 18.0561 14.9063 18.4499 15.3069C18.8438 15.7076 19.065 16.2509 19.065 16.8175V24.3399H23.25ZM5.82 9.17296C6.48835 9.17296 7.12932 8.90289 7.60191 8.42216C8.0745 7.94142 8.34 7.2894 8.34 6.60954C8.34 5.1905 7.215 4.03086 5.82 4.03086C5.14768 4.03086 4.50289 4.30254 4.02748 4.78614C3.55208 5.26973 3.285 5.92563 3.285 6.60954C3.285 8.02858 4.425 9.17296 5.82 9.17296ZM7.905 24.3399V11.5685H3.75V24.3399H7.905Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </nav>
    </div>
  );
};

export default DesktopNav;
