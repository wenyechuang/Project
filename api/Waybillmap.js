import requset from "../utils/request.js";

// 运单详情接口
export function Waybillmap(data) {
	return requset({
		url: `/customer-api/waybill/waybill/${6}`,
		method: 'get',
		data
	})
}
//运单日志
export function WaybillLog(data) {
	return requset({
		url: `/customer-api/driver/waybill/waybillLogList`,
		method: 'post',
		data
	})
}