// Browser-side fetch wrapper: same-origin JSON + CSRF header. Errors surface the server's message.
export async function adminFetch(url, { method = "GET", body, csrf } = {}) {
  const res = await fetch(url, {
    method,
    credentials: "same-origin",
    headers: { ...(body ? { "Content-Type": "application/json" } : method !== "GET" ? { "Content-Type": "application/json" } : {}), ...(csrf ? { "X-CSRF-Token": csrf } : {}) },
    body: body ? JSON.stringify(body) : method !== "GET" ? "{}" : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (res.status === 401) {
    window.location.href = "/admin/login/";
    throw new Error("Session expired");
  }
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}
