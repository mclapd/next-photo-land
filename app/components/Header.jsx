"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
import SearchForm from "./SearchForm";
import CategoryNavMobile from "./CategoryNavMobile";
import Cart from "./Cart";
import useCartStore from "@/libs/cartstore";

const Header = () => {
  const { isCartOpen, setIsCartOpen, cart, cartAmount } = useCartStore();
  const [catNavMobile, setCatNavMobile] = useState(false);

  return (
    <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0">
          <div
            onClick={() => setCatNavMobile(true)}
            className="text-3xl xl:hidden cursor-pointer"
          >
            <FiMenu />
          </div>
          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          <Link href={"/"}>
            <Image src={Logo} width={181} height={24} alt="image" />
          </Link>
          <div className="hidden w-full xl:flex xl:max-w-[734px]">
            <SearchForm />
          </div>
          <div className="flex items-center gap-x-[10px]">
            <div className="hidden xl:flex uppercase">
              Need help? 123 456 789
            </div>
            <div
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative cursor-pointer"
            >
              <SlBag className="text-2xl" />
              <div className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]">
                {cartAmount}
              </div>
            </div>
            <div
              className={`${
                isCartOpen ? "right-0" : "-right-full"
              } bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
            >
              <Cart />
            </div>
          </div>
        </div>
        <div className="xl:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
