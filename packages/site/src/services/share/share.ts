export const useShare = (url: string, message: string) => {
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${url}`;

  const whatsapp = `https://wa.me/?text=${encodeURIComponent(
    message
  )}%20${url}`;

  const copyToClipboard = (
    onSuccess: () => void,
    onError: () => void,
    text = `${message}\n${url}`
  ) => {
    if (!navigator.clipboard) {
      onError();
      return;
    }
    navigator.clipboard
      .writeText(text)
      .then((_) => onSuccess())
      .catch((_) => onError());
  };

  return {
    facebook,
    whatsapp,
    copyToClipboard,
  };
};
