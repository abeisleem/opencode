export function serverIdentity(url: string, managed = false) {
  if (managed) return "local"
  const value = new URL(url)
  value.username = ""
  value.password = ""
  value.search = ""
  value.hash = ""
  value.pathname = value.pathname.replace(/\/+$/, "") || "/"
  return value.toString()
}
