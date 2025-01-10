type AvatarProps = {
  src: string;
  size: number;
};

export function Avatar({ src, size }: AvatarProps) {
  return (
    <div>
      <img src={src} alt="Avatar" width={size} height={size} />
    </div>
  );
}
