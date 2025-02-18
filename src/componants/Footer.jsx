import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import pragyaaLogo from "../assets/pragyaa.png";
import './Footer.css';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    },
  };

  return (
    <div className={cn('relative group', containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 30,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#ff0000,transparent_50%),radial-gradient(circle_farthest-side_at_100%_0,#000000,transparent_50%),radial-gradient(circle_farthest-side_at_100%_100%,#ff0000,transparent_50%),radial-gradient(circle_farthest-side_at_0_0,#000000,transparent_50%)]'
        )}
      />
      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  );
};

const Footer = () => {
  return (
    <BackgroundGradient>
      <footer className="bg-black/80 text-white backdrop-blur-sm rounded-3xl ">
        <div className="max-w-7xl mx-auto py-3 px-7 ">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0">
            {/* Logo Section */}
            <div className="px-2 flex flex-col items-center md:items-start">
              <img 
                src="https://res.cloudinary.com/dg6qtpags/image/upload/v1738229669/your-cloudinary-folder-name/hw47imc72mac5hf32mfm.png" 
                alt="PRAGYAA 2025" 
                className="h-80 w-80 mb-3" 
              />
              <p className="text-xl text-gray-400 text-center md:text-left">
                National Level Annual Technical Festival of SGGSIET
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 px-10 hidden md:block ">
              <h3 className="text-2xl font-extrabold text-red-500 text-start md:text-center">Quick Links</h3>
              <nav className="flex flex-col space-y-3">
                <a 
                  href="#guestbox" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Events
                </a>
                <a 
                  href="#schedule" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Schedule
                </a>
                <a 
                  href="#sponsors" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Sponsors
                </a>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
                <a 
                  href="#register" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Register
                </a>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="space-y-4 pr-10 pb-5">
              <address className="text-gray-500 text-center flex-row pr-1 space-y-0 text-sm flex not-italic sm:text-start leading-snug">
                <p>SGGSIET Campus</p>
                <p>Nanded, Maharashtra</p>
                  </address>
                  <div className='text-center'>
              <h3 className="text-2xl font-extrabold text-red-500 text-center md:text-left">Contact Us</h3>
                <p>Email:{' '}
                  <a
                    href="mailto:pragyaa@sggs.ac.in"
                    className="email-link text-sm text-blue-500"
                  >
                    pragyaa@sggs.ac.in
                  </a>
                </p>
                <p>Student Coordinator:{' '}
                  <a
                    href="mailto:technicalsecretary@sggs.ac.in"
                    className="email-link text-sm text-blue-500"
                  >
                    technicalsecretary@sggs.ac.in
                  </a>
                </p>
                </div>
              {/* Social Media Links */}
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sggspragyaa?igsh=YzljYTk1ODg3Zg=="
                  target='_blank'
                  aria-label="Instagram"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 border border-gray-600 transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/pragyaa-sggs/"
                  target='_blank'
                  aria-label="LinkedIn"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#0077B5] border border-gray-600 transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/sggspragyaa"
                  target='_blank'
                  aria-label="Facebook"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#1877F2] border border-gray-600 transition-all duration-300 hover:scale-110"
                >
                  <FaFacebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2Fsggspragyaa"
                  target='_blank'
                  aria-label="Twitter"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#1DA1F2] border border-gray-600 transition-all duration...
-300 hover:scale-110"
                >
                  <FaTwitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@pragyaa-sggsiet7271?si=KAPSRifoQcXFM7bd"
                  target='_blank'
                  aria-label="YouTube"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#FF0000] border border-gray-600 transition-all duration-300 hover:scale-110"
                >
                  <FaYoutube className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="pt-4 pb-2 border-t border-gray-800 px-4">
            <p className="text-center text-gray-400 text-sm">
              Copyright © PRAGYAA 2025 All rights reserved | This website is made by PRAGYAA 2025 WEB TEAM.
            </p>
          </div>
        </div>
      </footer>
    </BackgroundGradient>
  );
};

export default Footer;
