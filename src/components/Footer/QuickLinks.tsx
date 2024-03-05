import Link from "next/link";
import Container from "./Container";

interface QuickLinksProps {
  links: {
    href: string;
    label: string;
  }[];
}

const QuickLinks = ({ links }: QuickLinksProps) => {
  return (
    <Container title="Hızlı Linkler">
      <nav className="flex flex-col items-start justify-start gap-4">
        {links.map((link) => {
          return (
            <Link key={link.label} href={link.href}>
              <span
                className="text-base text-slate-600
             hover:text-green-500"
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </Container>
  );
};

export default QuickLinks;
