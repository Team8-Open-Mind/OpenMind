export const timeStamp = (date) => {
  const now = new Date();
  const createdAt = new Date(date);

  const seconds = Math.floor((now - createdAt) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 120) {
    return '1분 전';
  }

  if (minutes < 60) {
    return `${minutes}분 전`;
  }

  if (hours < 2) {
    return '1 시간 전';
  }

  if (hours < 24) {
    return `${hours} 시간 전`;
  }

  if (days < 2) {
    return '1일 전';
  }

  if (days < 31) {
    return `${days} 일 전`;
  }

  if (months < 2) {
    return '1달 전';
  }

  if (months < 12) {
    return `${months} 달 전`;
  }

  if (years < 2) {
    return '1년 전';
  }

  return `${Math.floor(months / 12)} 년 전`;
};
