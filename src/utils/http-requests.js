export async function sendRequest(requestConfig) {
  const response = await fetch(requestConfig.endpoint, {
    method: requestConfig.method,
    headers: requestConfig.headers,
    body: JSON.stringify(requestConfig.body),
  });

  if (!response.ok) throw new Error("Request failed.");

  const data = await response.json();
  return data;
}
