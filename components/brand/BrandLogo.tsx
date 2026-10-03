import Image from "next/image";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  showName?: boolean;
};

const sizes = {
  sm: {
    image: 30,
    text: "text-[11px]",
  },
  md: {
    image: 36,
    text: "text-xs",
  },
  lg: {
    image: 48,
    text: "text-sm",
  },
};

export default function BrandLogo({
  size = "md",
  showName = true,
}: BrandLogoProps) {
  const current = sizes[size];

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/ratzon-logo.png"
        alt="Ratzon Digital Products logo"
        width={current.image}
        height={current.image}
        priority
        className="object-contain"
      />

      {showName && (
        <span
          className={`${current.text} font-semibold tracking-[0.08em] text-[var(--foreground)] transition-colors duration-300`}
        >
          RATZON{" "}
          <span className="text-[var(--accent)] transition-colors duration-300">
            DIGITAL PRODUCTS
          </span>
        </span>
      )}
    </div>
  );
}