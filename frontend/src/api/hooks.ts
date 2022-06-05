import { useEffect, useState } from "react";

const API_PATH = "http://127.0.0.1:8000";

let token: any = localStorage.getItem('jwt');

export const login = async (data: { username: string, password: string }) => {
    const resp = await fetch(`${API_PATH}/auth/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const res = await resp.json();
    token = res.access;
    localStorage.setItem('jwt', token);
};

export const apiGet = async (path: string) => {
    const cp = `${API_PATH}${path}`;
    let fetchArgs: RequestInit = { method: 'GET' };
    if (token) {
        fetchArgs = {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            ...fetchArgs,
        };
    }
    const resp = await fetch(cp, fetchArgs);
    return resp.json();
};

export const useApi = (path: string) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    useEffect(() => {
        (async () => {
            setData(await apiGet(path));
            setLoading(false);
        })();
    }, [path]);
    return [loading, data];
};