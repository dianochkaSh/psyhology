import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { DeleteForever } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { deleteOneArticle, showModalWindowDelete } from '@/store/actions-creators/blog';
import { useTypedSelector } from '@/hooks/useTypedSelector';

const  DeleteElement = ( id) => {
  const { isShowModalDelete } = useTypedSelector(state => state.blog);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(showModalWindowDelete(true));
  };

  const handleClose = () => {
    dispatch(showModalWindowDelete(false));
  };
  const handelDeleteArticle = (id) => {
    dispatch(deleteOneArticle(id.id));
  }

  return (
    <React.Fragment>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <DeleteForever />
      </IconButton>
      <Dialog
        open={isShowModalDelete}
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