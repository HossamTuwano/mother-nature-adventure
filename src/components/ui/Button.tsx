import { motion } from "motion/react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  text,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
    outline:
      "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`px-5 py-2 rounded text-sm font-medium transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
