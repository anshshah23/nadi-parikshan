import {
  Footer,
  FooterCopyright,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import { MenuLinks, SocialLinks } from "../data/index";
import { Link } from "react-router-dom";

// Helper function to return icons based on social media names
const getIcon = (name) => {
  switch (name.toLowerCase()) {
    case "facebook":
      return <BsFacebook />;
    case "instagram":
      return <BsInstagram />;
    case "twitter":
      return <BsTwitter />;
    case "github":
      return <BsGithub />;
    case "linkedin":
      return <BsLinkedin />;
    default:
      return null;
  }
};

// Main Footer Component
function FooterComponent() {
  return (
    <Footer className="bg-blue-950 text-gray-300 rounded-none">
      <div className="w-full">
        {/* Footer Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 px-6 sm:px-12 py-10">
          {/* DJSNSS Section */}
          <div className="lg:w-1/2">
            <FooterTitle
              className="text-xl sm:text-2xl md:text-3xl pb-3 font-extrabold text-gold"
              title="Prakriti Wellness"
            />
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
              Prakriti Wellness is a student-run initiative, to understand Nadi Parikshan, Yoga, and Meditation to heal your mind and body. Join us in our journey to a healthier lifestyle.
            </p>
            <div className="mt-5 text-sm sm:text-base md:text-lg text-white">
              <p>
                📍 Address: DJSCE, Sector 5, Vile Parle West, Mumbai,
                Maharashtra, India
              </p>
              <p>📞 Contact: +91 81693 88352</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col lg:w-1/2 gap-8 lg:flex-row">
            {/* Useful Links Section */}
            <div className="flex flex-col lg:w-1/2">
              <FooterTitle
                className="text-lg sm:text-xl md:text-2xl pb-3 font-extrabold text-gold"
                title="Useful Links"
              />
              <FooterLinkGroup col>
                {MenuLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={`/${link.link}`}
                    className="text-sm sm:text-base md:text-lg pb-3 text-white hover:text-gold transition duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </FooterLinkGroup>
            </div>

            {/* Social Links Section */}
            <div className="flex flex-col">
              <FooterTitle
                className="text-lg sm:text-xl md:text-2xl pb-3 font-extrabold text-gold"
                title="Follow Us"
              />
              <div className="flex space-x-6 justify-start sm:justify-center">
                {SocialLinks.map((social) => {
                  const IconComponent = getIcon(social.name);
                  return IconComponent ? (
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={social.id}
                      className="text-white hover:text-gold transition duration-300 text-xl sm:text-2xl md:text-3xl"
                    >
                      {IconComponent}
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="w-full bg-darkgray text-white px-4 sm:px-10 py-4 flex items-center justify-between">
          <FooterCopyright
            href="/"
            by="Prakriti_Wellness"
            year={2024}
            className="text-xs sm:text-sm md:text-base"
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
