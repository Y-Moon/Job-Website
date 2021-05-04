export default function getCookie(cookie,key){
	let cookies=cookie.split(";");
	for(let c in cookies){
		let left=cookies[c].split("=")[0];
		if(left==key){
			return cookies[c].split("=")[1];
		}
	}
	return "";
};