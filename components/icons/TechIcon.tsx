type SimpleIcon = {
  path: string;
  hex: string;
  title: string;
};

type TechIconProps = {
  icon: SimpleIcon;
  size?: number;
  useOriginalColor?: boolean;
  className?: string;
};

export default function TechIcon({
  icon,
  size = 24,
  useOriginalColor = true,
  className,
}: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={useOriginalColor ? `#${icon.hex}` : "currentColor"}
      role="img"
      className={className}
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}
