import api from "@/lib/axios";

export type LoginPayload = {
    magicURL: string;
};

export type SignupPayload = {
    email: string;
};

export const login = async (payload: LoginPayload) => {
    const res = await api.get("/auth/magic-link/verify?token=" + payload.magicURL,);
    return res.data;
};

export const signup = async (payload: SignupPayload) => {
    const res = await api.post("/auth/magic-link/request", payload);
    return res.data;
};


export const logout = async () => {
    const res = await api.post("/auth/logout");
    return res.data;
};
