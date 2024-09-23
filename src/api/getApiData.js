export const getApiData = async (type) => {
  const url =
    type === 'first'
      ? `${process.env.API_URL}/carousel/tag`
      : `${process.env.API_URL}/carousel/voucher`;

  console.log(url);
  const api = await fetch(url);
  const response = await api.json();
  return { response };
};
