import Image from "next/image";
import BrandLogo from "../Header/BrandLogo";

interface TitleAndSocialLinksProps {
  about: string;
  fbLink: string;
  igLink: string;
  ytLink: string;
}

const TitleAndSocialLinks = ({
  about,
  fbLink,
  igLink,
  ytLink,
}: TitleAndSocialLinksProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8">
      <div className="w-full flex flex-col items-start justify-start gap-6">
        <BrandLogo logo="/svg/logo.svg" alt="Inn Bodrum" />
        <p className="text-md font-medium text-slate-600">{about}</p>
      </div>
      <div className="w-full flex items-center justify-start gap-8">
        <p className="text-lg font-semibold text-slate-600">Bizi takip edin:</p>
        <a href={fbLink} target="_blank" rel="noreferrer">
          <Image
            src="/svg/facebook.svg"
            alt="facebook"
            width={36}
            height={36}
          />
        </a>
        <a href={igLink} target="_blank" rel="noreferrer">
          <Image
            src="/svg/instagram.svg"
            alt="instagram"
            width={36}
            height={36}
          />
        </a>
        <a href={ytLink} target="_blank" rel="noreferrer">
          <Image src="/svg/youtube.svg" alt="youtube" width={36} height={36} />
        </a>
      </div>
    </div>
  );
};

export default TitleAndSocialLinks;
