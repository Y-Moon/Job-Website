import React from 'react';
import{
	Dialog,
	DialogContent,
	DialogContentText,
}from '@material-ui/core';
const DialogView=(props)=>{
	const [open,setOpen]=React.useState(false);
	const handleClose=()=>{
		setOpen(false);
	}
	return(
		<Dialog
		        open={open}
		        onClose={handleClose}
		        aria-labelledby="alert-dialog-title"
		        aria-describedby="alert-dialog-description"
		      >
		  <DialogContent>
			<DialogContentText id="alert-dialog-description">
			  岗位是必填项!
			</DialogContentText>
		  </DialogContent>
		</Dialog>
	)
}
export default DialogView;