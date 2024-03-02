import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  logo: string;
  alt: string;
}

const BrandLogo = ({ logo, alt }: BrandLogoProps) => {
  return (
    <Link href="/">
      <Image src={logo} alt={alt} width={210} height={70} />
    </Link>
  );
};

export default BrandLogo;
