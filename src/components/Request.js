import axios from 'axios';
export default function Request(url,param,type){
	  if(type=="get"||type=="GET"){
		  return axios({
		  		  method: type,
		  		  url: url,
		  		  params: param,
				})
	  }else{
		  return axios({
		  		  method: type,
		  		  url: url,
		  		  data: param,
				})
	  }
  }