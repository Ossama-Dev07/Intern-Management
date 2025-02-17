import React from 'react';
import "../style/Footer.css"
function Footer() {
    return (
        <div className='Footer'>
            <div className='menu_footer'>
                <a className='spantem' href='/'>Accueil</a>
                <span>|</span>
                <a className='spantem' href='/presentation'>Presentation</a>
                <span>|</span>
                <a className='spantem' href='/timetable'>Emploi du temps</a>
                <span>|</span>
                <a className='spantem' href='/stagaire'>stagaires</a>
                <span>|</span>
                <a className='spantem' href='/services'>Espace des Entreprises</a>
                <span>|</span>
                <a className='spantem' href='/contact'>Contact</a>
            </div>
          <div className='socials'>
          <a href="https://www.facebook.com/p/Institut-Sp%C3%A9cialis%C3%A9-Industriel-Marrakech-100075802227124/?paipv=0&eav=Afbq12MuNh_n4eAxcaOKkICcxSxFjdZRKgDiry1nDmDXMlJa136S5j3Jkia78diAgSM&_rdr" target="_blank" rel="noopener noreferrer">
            <button className='btn-social'>
                <svg viewBox="0 0 16 16" className="bi bi-facebook" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                </svg>
                <span>Facebook</span>
            </button> 
            </a>  
            <div className="copyright">
                &copy; 2024 isim Marrakech
            </div>
         </div>
         </div>
    );
}

export default Footer;