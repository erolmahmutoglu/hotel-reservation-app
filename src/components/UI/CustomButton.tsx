import Link from "next/link";

interface CustomButtonProps {
  label: string;
  link?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}

interface CustomButtonLabelProps {
  label: string;
}

export const CustomButtonLabel = ({ label }: CustomButtonLabelProps) => {
  return (
    <span className="text-white font-semibold text-md leading-6 text-nowrap tracking-wider">
      {label}
    </span>
  );
};

const CustomButton = ({
  label,
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
            className={`px-2 md:px-4 py-3 rounded-xl active:scale-105 ${buttonVariant}`}
          >
            <CustomButtonLabel label={label} />
          </div>
        </Link>
      ) : (
        <button
          className={`px-4 py-3 rounded-xl active:scale-105 ${buttonVariant}`}
          type={type}
        >
          <CustomButtonLabel label={label} />
        </button>
      )}
    </>
  );
};

export default CustomButton;
