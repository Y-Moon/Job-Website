import React from 'react';
import axios from 'axios';
import {
	Button
} from '@material-ui/core';
const Download=()=>{
	const handleChange=()=>{
		axios.get("http://localhost:8010/file/test.txt").then(resp=>{
			let blob=resp.data;
			downloadFile(blob,"简历.txt");
		},error=>{
			console.log(error);
		})
	}
	const downloadFile=(blob,filename)=>{
	    // // 字符内容转变成blob地址
	    // var blob = new Blob([content]);
	     // 创建隐藏的可下载链接
	    var eleLink = document.createElement('a');
	    eleLink.download = filename;
	    eleLink.style.display = 'none';
	    eleLink.href = URL.createObjectURL(blob);
	    // 触发点击
	    document.body.appendChild(eleLink);
	    eleLink.click();
	    // 然后移除
	    document.body.removeChild(eleLink);
	    setTimeout(function () { //延时释放
	      URL.revokeObjectURL(blob); //用URL.revokeObjectURL()来释放这个object URL
	    }, 100);
	}
	return(
		<div>
			<Button
				onClick={handleChange}
			  >
			  下载
			</Button>
		</div>
	)
}
export default Download;