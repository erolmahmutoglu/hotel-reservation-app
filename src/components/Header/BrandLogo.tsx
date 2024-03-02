import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  logo: string;
  alt: string;
}

const BrandLogo = ({ logo, alt }: BrandLogoProps) => {
  return (
    <Link href="/">
      <div className="cursor-pointer w-36 h-12 md:w-48 md:h-16">
        <Image src={logo} alt={alt} width={180} height={60} />
      </div>
    </Link>
  );
};

export default BrandLogo;
