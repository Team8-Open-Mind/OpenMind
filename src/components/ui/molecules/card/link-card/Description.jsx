import { useCardProvider } from './context/CardProvider';

const Description = ({ children, ...rest }) => {
  const { description } = useCardProvider();

  return <p {...rest}>{description || children}</p>;
};

export default Description;
