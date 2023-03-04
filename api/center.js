import requset from "../utils/request.js";

// 登录接口
export function getLogin({
	code,appid
}){
	return requset({
		url:`/wx/${appid}/login`,
		data:{
			code
		}
	})
}

//获得手机号接口
export function getPhoneNumber({
	code,appid
}){
	return requset({
		url:`/wx/${appid}/code2PhoneNumber`,
		data:{
			code
		}
	})
}

// 获取用户信息接口
export function getInfo({
	appid
}){
	return requset({
		url:`/wx/${appid}/getInfo`,
		data:{}
	})
}
