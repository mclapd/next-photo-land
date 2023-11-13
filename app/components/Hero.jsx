import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";
import PromoImg1 from "../../public/images/promo_img1.png";
import PromoImg2 from "../../public/images/promo_img2.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          <div>
            <CategoryNav />
          </div>
          <div className="w-full max-w-lg lg:max-w-[734px] max-auto">
            <MainSlider />
          </div>
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 35% all dslr cameras
                </div>
                <Link href={"#"} className="uppercase text-accent">
                  Shop now
                </Link>
              </div>
              <Image
                src={PromoImg1}
                width={213}
                height={238}
                alt="image"
                className="absolute z-20 -top-2 -right-4"
              />
            </div>
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 25% mirrorless cameras
                </div>
                <Link href={"#"} className="uppercase text-accent">
                  Shop now
                </Link>
              </div>
              <Image
                src={PromoImg2}
                width={182}
                height={217}
                alt="image"
                className="absolute z-20 -top-4 -right-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
