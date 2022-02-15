import jwtDecode from "jwt-decode"
import { TokenInfo } from "../../types/token"

export const decodeTokenString = (token: string): TokenInfo | null => {
  if (!token) return null

  try {
    return jwtDecode(token) as TokenInfo
  } catch (e) {
    console.log(e)
  }

  return null
}

export const isTokenExpired = (token: string) => {
  const data = decodeTokenString(token)
  return !data?.exp || data?.exp < (Date.now() / 1000) >>> 0
}
