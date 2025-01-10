export function Profile() {
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png";
  const altText = "Mathematician";
  const imageWidth = 100;

  return (
    <div>
      <img src={imageUrl} alt={altText} width={imageWidth} height={35} />
    </div>
  );
}
