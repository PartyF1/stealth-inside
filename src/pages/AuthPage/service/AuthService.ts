import api from "../../../shared/lib/axios";

export const login = async (form: Object) => {
  const response = await api.get("/users", {
    params: { ...form },
  });

  return response.data?.[0];
};
