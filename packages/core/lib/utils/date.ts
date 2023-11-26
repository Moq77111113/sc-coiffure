export const msToText = (ms: number): string => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let formattedTime = '';

  if (days > 0) {
    formattedTime += `${days} days, `;
  }
  if (hours > 0) {
    formattedTime += `${hours % 24} hours, `;
  }
  if (minutes > 0) {
    formattedTime += `${minutes % 60} minutes, `;
  }
  formattedTime += `${seconds % 60} seconds`;

  return formattedTime;
};
