const BASE_URL = "http://127.0.0.1:8000/api";
// this function is used to make api requests
const apiRequest = async (
    method: string,
    endpoint: string,
    data?: any,
    extraConfig?: RequestInit
) => {
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };
    const config: RequestInit = {
      method,
      headers,
      body: method === "GET" ? undefined : JSON.stringify(data),
      ...extraConfig,
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || response.statusText;
        throw new Error(errorMessage);
    }

    return response.json();
};

/*
---> this is the api object that is used to make api requests <---

an example usage of the api object
const data = await api.get("/users", {page: 1, limit: 10});
const newUser = await api.post("/users", {name: "John Doe", email: "john@doe.com"});
const updatedUser = await api.put("/users/1", {name: "John Doe", email: "john@doe.com"});
const deletedUser = await api.delete("/users/1");
*/


export const api = {
    get: (endpoint: string, params?: any) => {
        const queryString = params ? `?${new URLSearchParams(params).toString()}` : "";
        return apiRequest("GET", `${endpoint}${queryString}`);
    },
    post: (endpoint: string, data: any) => {
        return apiRequest("POST", endpoint, data);
    }, 
    put: (endpoint: string, data: any) => {
        return apiRequest("PUT", endpoint, data);
    },
    delete: (endpoint: string) => {
        return apiRequest("DELETE", endpoint);
    },
};

