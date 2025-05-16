export const getFullYear = () => {
  const date = new Date();
  return date.getFullYear();
}
export const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return "Holberton School main dashboard";
  }
  return "Holberton School";
}
export const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
};
