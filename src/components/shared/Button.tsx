import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline-light" | "ghost";
type ButtonSize = "md" | "lg";

const baseStyles =
  "focus-ring group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 ease-out";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-500 text-white hover:bg-blue-600 shadow-[0_0_0_1px_rgba(20,135,223,0.15)] hover:shadow-glow-blue hover:-translate-y-0.5",
  secondary:
    "border border-ink-200 bg-white text-ink-800 hover:border-blue-400 hover:text-blue-600 hover:-translate-y-0.5",
  "outline-light":
    "border border-white/30 text-white hover:border-white/60 hover:bg-white/10",
  ghost: "text-ink-800 hover:text-blue-600",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    icon = true,
    ...rest
  } = props;

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href) {
    const { href, external } = rest as ButtonAsLink;
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer">
          {children}
          {icon && (
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && (
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </Link>
    );
  }

  const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
