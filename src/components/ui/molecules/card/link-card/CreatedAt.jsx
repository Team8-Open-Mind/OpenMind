import { formatDate } from '@utils/time/formatDate';

import { useCardProvider } from './context/CardProvider';

const CreatedAt = ({ children, ...rest }) => {
  const { createdAt } = useCardProvider();
  const formattedTime = formatDate(createdAt);

  return (
    <time dateTime={createdAt} {...rest}>
      {formattedTime}
    </time>
  );
};

export default CreatedAt;
