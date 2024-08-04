import React from 'react';
import './AboutMe.css';

const AboutMe = () => {

  return (
    <div className='rectangle2'>
        <div className='main'>
        
        <div className='Listening'>
            <svg xmlns="http://www.w3.org/2000/svg" className = "icon" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <g clip-path="url(#clip0_240_89)">
                    <path d="M48.7402 0.615137C49.5312 1.20107 50 2.13857 50 3.1249V35.9374C50 40.2538 45.8008 43.7499 40.625 43.7499C35.4492 43.7499 31.25 40.2538 31.25 35.9374C31.25 31.621 35.4492 28.1249 40.625 28.1249C41.7188 28.1249 42.7734 28.2812 43.75 28.5741V14.3554L18.75 21.8554V42.1874C18.75 46.5038 14.5508 49.9999 9.375 49.9999C4.19922 49.9999 0 46.5038 0 42.1874C0 37.871 4.19922 34.3749 9.375 34.3749C10.4688 34.3749 11.5234 34.5312 12.5 34.8241V12.4999C12.5 11.1229 13.4082 9.90225 14.7266 9.50186L45.9766 0.126856C46.9238 -0.156347 47.9492 0.019434 48.7402 0.615137Z" fill="#DC4280"/>
                </g>    
                <defs>
                    <clipPath id="clip0_240_89">
                    <rect width="50" height="50" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <div className = "topic">
                <p>What I am listening to:</p>    
            </div>
            <div className = "current">
                <p>Andrew Huberman - Master Your Sleep </p>
            </div>
        </div>
        <div className='Reading'>
        <svg xmlns="http://www.w3.org/2000/svg" className = "icon" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M19.75 7.22655C16.2217 5.54198 11.29 4.71679 4.68751 4.68749C4.06482 4.67903 3.45435 4.86061 2.93751 5.208C2.51327 5.49475 2.16601 5.88135 1.92624 6.33379C1.68648 6.78624 1.56157 7.29068 1.56251 7.80273V35.7422C1.56251 37.6309 2.90626 39.0557 4.68751 39.0557C11.6279 39.0557 18.5898 39.7041 22.7598 43.6455C22.8168 43.6997 22.8885 43.7359 22.966 43.7496C23.0434 43.7634 23.1232 43.7541 23.1954 43.7229C23.2676 43.6916 23.329 43.6399 23.3721 43.5741C23.4151 43.5082 23.4379 43.4312 23.4375 43.3525V10.4316C23.4377 10.2095 23.3902 9.98996 23.2982 9.78779C23.2062 9.58562 23.0719 9.40555 22.9043 9.25976C21.9491 8.44319 20.8881 7.75928 19.75 7.22655ZM47.0625 5.20507C46.5454 4.85854 45.9349 4.67798 45.3125 4.68749C38.71 4.71679 33.7783 5.53808 30.25 7.22655C29.1119 7.75832 28.0507 8.44088 27.0947 9.25585C26.9275 9.4019 26.7935 9.58204 26.7017 9.78416C26.6099 9.98629 26.5625 10.2057 26.5625 10.4277V43.3506C26.5625 43.4262 26.5847 43.5001 26.6265 43.5631C26.6683 43.626 26.7278 43.6753 26.7975 43.7046C26.8672 43.7339 26.9439 43.742 27.0182 43.7278C27.0924 43.7137 27.1608 43.6779 27.2148 43.625C29.7217 41.1348 34.1211 39.0527 45.3164 39.0537C46.1452 39.0537 46.9401 38.7245 47.5261 38.1384C48.1122 37.5524 48.4414 36.7575 48.4414 35.9287V7.8037C48.4426 7.29064 48.3174 6.78519 48.0769 6.33198C47.8364 5.87877 47.488 5.49174 47.0625 5.20507Z" fill="#DC4280"/>
        </svg>
            <div className = "topic">
                <p>What I am reading: </p> 
            </div>
            <div className = "current">
                <p style={{ paddingLeft: '47px' }}>Martha Wells - All Systems Red </p>
            </div>
        </div>
        <div className='Working'>
            <svg xmlns="http://www.w3.org/2000/svg" className = "icon"  width="56" height="54" viewBox="0 0 56 54" fill="none">
                    <g filter="url(#filter0_d_240_94)">
                        <path d="M52 10.125V43.875H4V10.125H19V6.75C19 6.27539 19.0781 5.83594 19.2344 5.43164C19.3906 5.02734 19.6016 4.67578 19.8672 4.37695C20.1328 4.07812 20.4531 3.83203 20.8281 3.63867C21.2031 3.44531 21.5938 3.35742 22 3.375H34C34.4219 3.375 34.8125 3.46289 35.1719 3.63867C35.5312 3.81445 35.8438 4.05176 36.1094 4.35059C36.375 4.64941 36.5938 5.00977 36.7656 5.43164C36.9375 5.85352 37.0156 6.29297 37 6.75V10.125H52ZM22 10.125H34V6.75H22V10.125ZM7 13.5V18.3779L22 26.7891V23.625H34V26.7891L49 18.3779V13.5H7ZM25 27V30.375H31V27H25ZM49 40.5V22.1221L34 30.5859V33.75H22V30.5859L7 22.1221V40.5H49Z" fill="#DC4280"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_240_94" x="0" y="0" width="56" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_240_94"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_240_94" result="shape"/>
                        </filter>
                    </defs>
            </svg>
            <div className = "topic">
                <p>What I am working on:</p>    
            </div>
            <div className = "current">
                <p>Designing & distributing Notion templates  </p>
            </div>
        </div>
        </div>
    </div>
  );
};

export default AboutMe;