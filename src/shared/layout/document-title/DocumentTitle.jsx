import { useDocumentTitle } from '@hooks/useDocumentTitle';

import { documentBaseTitle } from './data/documentBaseTitle';

/**
 *
 * @param {{ title?: string; children?: string}} DocumentTitleParams
 */
const DocumentTitle = ({ title, children }) => {
  useDocumentTitle(`${documentBaseTitle} ${title || children}`);

  return <></>;
};

export default DocumentTitle;
