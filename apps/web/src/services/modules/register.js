import hyRequest from '../request'

export function postRegister(nickName,password) {
  return hyRequest.get({
    url: "user/register",
    // params: {
    //   nickName,
    //   password
    // } 
  })
}