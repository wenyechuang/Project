import cofig from "./config";

export default function request({
  method = "GET",
  data,
  url,
  header = {}
}) {
  
  uni.showLoading({
  	mask:true
  })
  
  const token = uni.getStorageSync("token")
  
  return new Promise((resolve, reject) => {
    uni.request({
      url:cofig.baseURL + url,
      data,
      header:{
		  Authorization:`Bearer ` +  token
	  },
      method,
      success(res) {
		  if(res.data.code === 200){
			resolve(res)
		  }else{
			  uni.showToast({
			  	icon:"none",
				title:res.msg
			  })
			  resolve(res)
		  }
      },
      fail(error) {
        reject(error)
      },
      complete() {
        uni.hideLoading()
      }
    })
  })
}