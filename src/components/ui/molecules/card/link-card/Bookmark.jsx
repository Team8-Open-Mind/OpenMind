import styles from './Bookmark.module.css';

const Bookmark = ({ onClick, ...rest }) => {
  return (
    <button type='button' {...rest} onClick={onClick} className={styles['link-card-bookmark-btn']}>
      <img
        className={styles['link-card-bookmark-btn-img']}
        src={`${process.env.PUBLIC_URL}/images/folder/star.svg`}
        alt='링크 카드 북마크 이미지'
      />
    </button>
  );
};

export default Bookmark;
