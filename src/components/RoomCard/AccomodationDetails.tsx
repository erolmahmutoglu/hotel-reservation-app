import {
  LuCigaretteOff,
  LuBadgeDollarSign,
  LuWaves,
  LuWine,
} from "react-icons/lu";

interface AccomodationDetailsProps {
  accomodationDetails: {
    cancelFree: boolean;
    accomodation: string;
    seaView: boolean;
    cigarette: boolean;
  };
}

const AccomodationDetails = ({
  accomodationDetails: { cancelFree, accomodation, seaView, cigarette },
}: AccomodationDetailsProps) => {
  return (
    <div className="flex flex-col items-start justify-center gap-3 h-[200px] min-w-[330px] p-4 bg-green-100 rounded-2xl">
      <ul className="flex flex-col gap-2">
        <li className="flex items-center justify-start gap-2 bg-slate-50 py-2 px-4 rounded-xl">
          <LuWine className="text-2xl font-bold" />
          <p className="text-md font-medium">{accomodation}</p>
        </li>
        {seaView && (
          <li className="flex items-center justify-start gap-2 bg-slate-50 py-2 px-4 rounded-xl">
            <LuWaves className="text-2xl font-bold" />
            <p className="text-md font-medium">Deniz Manzaralı</p>
          </li>
        )}
        {cancelFree && (
          <li className="flex items-center justify-start gap-2 bg-slate-50 py-2 px-4 rounded-xl">
            <LuBadgeDollarSign className="text-2xl font-bold" />
            <p className="text-md font-medium">Ücretsiz İptal</p>
          </li>
        )}
        <li className="flex items-center justify-start gap-2 bg-slate-50 py-2 px-4 rounded-xl">
          <LuCigaretteOff className="text-2xl font-bold" />
          <p className="text-md font-medium">
            {cigarette ? "Sigara İçilebilir" : "Sigara İçilemez"}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AccomodationDetails;
