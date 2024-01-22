import { useEffect } from 'react';

import { getTotalSubject } from '@api/getTotalSubject';
import { useAsync } from '@hooks/useAsync';

const ListPage = () => {
  const [loading, error, result] = useAsync(getTotalSubject);

  useEffect(() => {
    if (result) {
      console.log(result);
    }
  }, [result]);

  return <div>ListPage</div>;
};

export default ListPage;
