import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmVkYTNlYjFiMTMzZjU5OWNlMGVhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTE0NjgwOSwiZXhwIjoxNjgxNDA2MDA5fQ.IvgnUzPY76dCC08ICDqk34dMMVNyYy4Ro5RwLGoDgw8";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
    // headers: { Authorization: `Bearer ${TOKEN}` }, // test if needed
});
