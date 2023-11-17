import Link from "next/link";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 bg-primary">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="h2 uppercase mb-6 font-semibold">
            Subscribe to our newsletter
          </h2>
          <p>
            Be the first to get the latest news about trends, promotions and
            much more!
          </p>
        </div>
        <form className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14">
          <input
            type="text"
            placeholder="Your email address"
            className="input"
          />
          <button className="btn btn-accent min-w-[150px]">Join</button>
        </form>
        <div className="flex gap-x-6 max-w-max mx-auto text-lg mb-16">
          <Link href={"#"} className="hover:text-white transition-al">
            Return policy
          </Link>
          <Link href={"#"} className="hover:text-white transition-al">
            Track your order
          </Link>
          <Link href={"#"} className="hover:text-white transition-al">
            Shipping & delivery
          </Link>
        </div>
        <div className="flex gap-x-6 max-w-max mx-auto text-lg mb-16">
          <Link href={"#"} className="hover:text-white transition-all">
            <FaYoutube />
          </Link>
          <Link href={"#"} className="hover:text-white transition-all">
            <FaInstagram />
          </Link>
          <Link href={"#"} className="hover:text-white transition-all">
            <FaTwitter />
          </Link>
          <Link href={"#"} className="hover:text-white transition-all">
            <FaFacebook />
          </Link>
        </div>
        <div className="py-10 border-t border-t-white/10">
          <div className="container mx-auto">
            <div className="text-center text-sm text-white/60">
              Copyright &copy; Photoland 2023. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
