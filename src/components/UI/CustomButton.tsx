import Link from "next/link";

interface CustomButtonProps {
  label: string;
  icon?: React.ReactNode;
  link?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}

interface CustomButtonLabelProps {
  label: string;
  icon?: React.ReactNode;
}

export const CustomButtonLabel = ({ label, icon }: CustomButtonLabelProps) => {
  return (
    <>
      {icon && icon}
      <span className="text-white font-semibold text-md leading-6 text-nowrap tracking-wider">
        {label}
      </span>
    </>
  );
};

const CustomButton = ({
  label,
  icon,
  link,
  type = "button",
  variant = "primary",
}: CustomButtonProps) => {
  const buttonVariant =
    variant === "primary"
      ? "bg-green-500 hover:bg-green-500"
      : "bg-yellow-500 hover:bg-yellow-600";

  return (
    <>
      {link ? (
        <Link href={link}>
          <div
            className={`flex items-center justify-center gap-2 px-2 md:px-4 py-3 rounded-xl active:scale-105 ${buttonVariant}`}
          >
            <CustomButtonLabel label={label} icon={icon} />
          </div>
        </Link>
      ) : (
        <button
          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl active:scale-105 ${buttonVariant}`}
          type={type}
        >
          <CustomButtonLabel label={label} icon={icon} />
        </button>
      )}
    </>
  );
};

export default CustomButton;
