
import { Roboto } from 'next/font/google';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';



const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Header = () => {
  return (
    <div>
      <header className={`${roboto.className} w-[100%] m-auto lg:flex justify-between h-14 items-center border-b-2 border-black bg-[#f7f7f7] hidden`} >
        <div>
          <span className={`${roboto.className} border-r-[1px] lg:ml-14  mr-3  border-[#676767] pr-3 py-2`}>Phone Number: 956 742 455 678</span>
          <span >Email:info@ddsgnr.com</span>
        </div>
        <div className={`${roboto.className} flex flex-row gap-5 md:mr-6 lg:mr-12  text-[20px]`}>
          <span>
            <FaFacebook className=''></FaFacebook>
          </span>
          <span>
            <FaInstagram className=''></FaInstagram>
          </span>
          <span>
            <FaTwitter className=''></FaTwitter>
          </span>
          <span>
            <FaLinkedin className=''></FaLinkedin>
          </span>
        </div>
      </header>

    </div>
  );
};

export default Header;
