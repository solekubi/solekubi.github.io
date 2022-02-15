export type TokenKey = {
  accessToken: string
  refreshToken: string
}

export type TokenInfo = {
  exp: number
  username: string
  roles: Array<string>
}
