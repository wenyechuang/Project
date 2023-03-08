import requset from "../utils/request.js";

// 调度运输
export function getPlan(data) {
	return requset({
		url: `/customer-api/dispatch/transportPlan/add`,
		data
	})
}
