import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer className=" max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-xl:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footerLogo" width={80} height={30} />
          </a>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map(icon => (
              <div key={icon.alt} className=" flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map(section => (
            <div key={section}>
              <h4 className=" text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map(link => (
                  <li
                    className=" mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-apple-red cursor-pointer"
                    key={link.name}
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start font-montserrat cursor-pointer gap-2">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className=" rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className=' font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
