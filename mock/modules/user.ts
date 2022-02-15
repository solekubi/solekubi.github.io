import Mock from "mockjs"
import { builder, getBody, base_api } from "../util"

const data = {
  admin: {
    username: "admin",
    password: "123456",
    token: {
      accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJleHAiOjE5MTYyMzkwMjIsInJvbGVzIjpbIlIwMDEiXSwicGVybWlzc2lvbnMiOlsiKiJdfQ.2KHFy4Dxn-G20qseSrrPKTW6v-XFTP8Vm-LRCclnIb4",
      refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJleHAiOjE5MTYyMzkwMjIsInJvbGVzIjpbIlIwMDEiXSwicGVybWlzc2lvbnMiOlsiKiJdfQ.2KHFy4Dxn-G20qseSrrPKTW6v-XFTP8Vm-LRCclnIb4",
    },
  },
  test: {
    username: "test",
    password: "123456",
    token: {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsImV4cCI6MTkxNjIzOTAyMiwicm9sZXMiOlsiUjAwMiJdLCJwZXJtaXNzaW9ucyI6WyJ2aWV3OnRhYmxlOmJ1dHRvbiIsInZpZXc6dXBsb2FkOioiXX0.B9XhlzK4MdnAoSO7Hro5uszDaUUaXMXAM44gjiTuIa0",
      refreshToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsImV4cCI6MTkxNjIzOTAyMiwicm9sZXMiOlsiUjAwMiJdLCJwZXJtaXNzaW9ucyI6WyJ2aWV3OnRhYmxlOmJ1dHRvbiIsInZpZXc6dXBsb2FkOioiXX0.B9XhlzK4MdnAoSO7Hro5uszDaUUaXMXAM44gjiTuIa0",
    },
  },
}

Mock.mock(`${base_api}/login`, "post", (options: any) => {
  const body = getBody(options)
  const { username, password } = body

  if (username === "admin" && password === "123456") {
    return builder(data.admin.token, "登录成功！")
  } else if (username === "test" && password === "123456") {
    return builder(data.test.token, "登录成功！")
  }
  return builder(null, "用户名或密码有误", false)
})
