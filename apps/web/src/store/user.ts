interface IUserInfo {
  username: string
  avatarUrl: string
  auth: string
}

export default defineStore('user', () => {
  const userInfo = ref<IUserInfo>()
  const demo = ref('111')
  return {
    userInfo,
    demo
  }
})
