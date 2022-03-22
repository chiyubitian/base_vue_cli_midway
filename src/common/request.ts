export const getUser = async () => {
  const res = await fetch("/api/get_user");
  const data = await res.json();
  return data.data;
};
