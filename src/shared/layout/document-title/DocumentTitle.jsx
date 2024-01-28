import { useDocumentTitle } from '@hooks/useDocumentTitle';

/**
 *
 * @param {{ title?: string; children?: string}} DocumentTitleParams
 */
const DocumentTitle = ({ title, children }) => {
  useDocumentTitle(title || children);

  return <></>;
};

export default DocumentTitle;
