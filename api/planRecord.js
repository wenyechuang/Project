import requset from "../utils/request.js";

// 计划记录
export function getPlanRecord(data) {
	return requset({
		url: `/customer-api/dispatch/transportPlan/${5}`,
		data,
		method: "get"
	})
}
  
// 查询调度记录列表
export function getDispatchRecordList(data) {
	return requset({
		url: "/customer-api/dispatch/planDispatch/list",
		method: "post",
		data

	})
}
