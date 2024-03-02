interface CustomButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}

const CustomButton = ({
  label,
  type = "button",
  variant = "primary",
}: CustomButtonProps) => {
  const buttonVariant =
    variant === "primary"
      ? "bg-red-500 hover:bg-red-600"
      : "bg-yellow-500 hover:bg-yellow-600";

  return (
    <button
      className={`px-6 py-3 rounded-xl active:scale-105 ${buttonVariant}`}
      type={type}
    >
      <span className="text-white font-semibold text-md leading-6 text-nowrap">
        {label}
      </span>
    </button>
  );
};

export default CustomButton;
