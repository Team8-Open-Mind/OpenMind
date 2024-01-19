import { useCardProvider } from './context/CardProvider';

const Slot = ({ children, url, ...rest }) => {
  return (
    <a rel='noopener noreferrer' {...rest} target='_blank' href={url}>
      {children}
    </a>
  );
};

const CardCover = ({ children, asAnchor = false, ...rest }) => {
  const { url } = useCardProvider();
  const Comp = asAnchor ? Slot : 'section';

  return (
    <Comp {...rest} url={url}>
      {children}
    </Comp>
  );
};

export default CardCover;
