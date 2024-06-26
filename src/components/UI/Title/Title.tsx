interface TitleProps {
  title: string;
  className?: string;
}

export default function Title({ title, className }: TitleProps) {
  return <h2 className={className}>{title}</h2>;
}
