import { getTimeDiff } from '@utils/time/getTimeDiff';

import { useCardProvider } from './context/CardProvider';

const TimeElapsed = ({ children, ...rest }) => {
  const { createdAt } = useCardProvider();
  const timeDiffMsg = getTimeDiff(createdAt);

  return <span {...rest}>{timeDiffMsg}</span>;
};

export default TimeElapsed;
