import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import {Alert} from '@material-ui/core';

const Alerts = React.forwardRef(function Alert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBar = (open, handleClose, severity, message ) => {
    console.log(open, handleClose, severity, message)
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alerts onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alerts>
      </Snackbar>
    )
}