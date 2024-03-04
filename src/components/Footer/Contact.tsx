import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

interface ContactProps {
  address: string;
  email: string;
  phone: string;
}

const Contact = ({ address, email, phone }: ContactProps) => {
  return (
    <div className="flex flex-1 flex-col items-start justify-start gap-6 w-full">
      <h3 className="text-xl font-semibold text-slate-900">İletişim</h3>
      <div className="flex items-center justify-start gap-4">
        <span className="w-6 h-6">
          <MapPinIcon className="w-6 h-6 text-slate-900" />
        </span>
        <span className="text-base text-slate-600">{address}</span>
      </div>
      <div className="flex items-center justify-start gap-2">
        <span className="w-6 h-6">
          <EnvelopeIcon className="w-6 h-6 text-slate-900" />
        </span>
        <span className="text-base text-slate-600">{email}</span>
      </div>
      <div className="flex items-center justify-start gap-2">
        <span className="w-6 h-6">
          <DevicePhoneMobileIcon className="w-6 h-6 text-slate-900" />
        </span>
        <span className="text-base text-slate-600">{phone}</span>
      </div>
    </div>
  );
};

export default Contact;
