import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { DeleteForever } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';

const  DeleteElement = ( id) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handelDeleteArticle = (id) => {
    console.log('delete');
    console.log(id);

  }

  return (
    <React.Fragment>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <DeleteForever />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Вы точно хотите удалить  статью? "}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Нет</Button>
          <Button onClick={() => handelDeleteArticle(id)} autoFocus>
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default DeleteElement;