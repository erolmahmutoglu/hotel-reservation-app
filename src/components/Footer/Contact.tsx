import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Container from "./Container";

interface ContactProps {
  address: string;
  email: string;
  phone: string;
}

const Contact = ({ address, email, phone }: ContactProps) => {
  const data = [
    {
      icon: <MapPinIcon className="w-6 h-6 text-slate-900" />,
      label: address,
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6 text-slate-900" />,
      label: email,
    },
    {
      icon: <DevicePhoneMobileIcon className="w-6 h-6 text-slate-900" />,
      label: phone,
    },
  ];

  return (
    <Container title="İletişim">
      {data.map((item, index) => {
        return (
          <div key={index} className="flex items-center justify-start gap-4">
            <span className="w-6 h-6">{item.icon}</span>
            <span className="text-base text-slate-600">{item.label}</span>
          </div>
        );
      })}
    </Container>
  );
};

export default Contact;
