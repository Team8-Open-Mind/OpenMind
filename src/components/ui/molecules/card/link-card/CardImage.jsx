import { useCardProvider } from './context/CardProvider';

const CardImage = ({ children, alt, ...rest }) => {
  const { imageSource } = useCardProvider();
  const altImage = `${process.env.PUBLIC_URL}/images/shared/no-image.svg`;

  return <img alt={alt} src={imageSource || altImage} {...rest} />;
};

export default CardImage;
