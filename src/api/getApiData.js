const API_URL = process.env.API_URL || 'http://localhost:3000';

export const getApiData = async (type) => {
  const url =
    type === 'first'
      ? `${API_URL}/carousel/tag`
      : `${API_URL}/carousel/voucher`;
  const api = await fetch(url);
  const response = await api.json();
  return { response };
};
