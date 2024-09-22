export const getApiData = async (type) => {
  const url =
    type === 'first'
      ? 'http://localhost:3000/carousel/tag'
      : 'http://localhost:3000/carousel/voucher';
  const api = await fetch(url);
  const response = await api.json();
  return { response };
};
