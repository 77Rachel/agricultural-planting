// 案例学习：https://alova.js.org/zh-CN/tutorial/best-practice/method-manage
import http from '..'

interface LoginParams {
  username: string;
  password: string;
}

/** 用户相关api */
export default {
  register: (nickName: string, password: string) => {
    return http.post('/user/register', {
      nickName,
      password
    })
  },

  Login: ({ username, password }: LoginParams) => {
    return http.post('/user/login', {
      username,
      password,
    })
  },
}
