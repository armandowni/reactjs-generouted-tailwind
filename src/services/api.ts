const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
const baseApiPathname = import.meta.env.VITE_BASE_API_PATHNAME;
const baseHeaders = new Headers({
  "Content-Type": "application/json"
});

function normalizeQuery(params: { [key: string]: string | number | object }) {
  for (const key in params) {
    if (!params[key]) delete params[key];
    else if (typeof params[key] === "object") params[key] = JSON.stringify(params[key]);
    else if (typeof params[key] === "number") params[key] = params[key].toString();
  }

  return params as { [key: string]: string };
}

export function get(
  path: string,
  search?: { [key: string]: string | number | object },
  headers?: Headers
) {
  const url: URL = new URL(baseApiPathname + path, baseApiUrl);
  const config: RequestInit = {
    method: "GET",
    headers: headers || baseHeaders
  };

  if (search) url.search = new URLSearchParams(normalizeQuery(search)).toString();

  return fetch(url, config);
}

export function post<T>(
  path: string,
  body?: T,
  search?: { [key: string]: string | number | object },
  headers?: Headers
) {
  const url = new URL(baseApiPathname + path, baseApiUrl);
  const config: RequestInit = {
    method: "POST",
    headers: headers || baseHeaders
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  if (search) url.search = new URLSearchParams(normalizeQuery(search)).toString();

  return fetch(url, config);
}

export function put<T>(
  path: string,
  body?: T,
  search?: { [key: string]: string | number | object },
  headers?: Headers
) {
  const url = new URL(baseApiPathname + path, baseApiUrl);
  const config: RequestInit = {
    method: "PUT",
    headers: headers || baseHeaders
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  if (search) url.search = new URLSearchParams(normalizeQuery(search)).toString();

  return fetch(url, config);
}

export function del<T>(
  path: string,
  body?: T,
  search?: { [key: string]: string | number | object },
  headers?: Headers
) {
  const url = new URL(baseApiPathname + path, baseApiUrl);
  const config: RequestInit = {
    method: "DELETE",
    headers: headers || baseHeaders
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  if (search) url.search = new URLSearchParams(normalizeQuery(search)).toString();

  return fetch(url, config);
}
