import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { DeleteForever } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { deleteOneArticle } from '@/store/actions-creators/blog';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const DeleteElement = ({ currentId, title } ) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteArticle = () => {
    setOpen(false);
    dispatch(deleteOneArticle(currentId));
    router.refresh();
  }

  return (
    <React.Fragment>
      <IconButton aria-label="share"  title="удалить статью" onClick={handleClickOpen}>
        <DeleteForever />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Вы хотите удалить статью: ${title} ?`}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Нет</Button>
          <Button onClick={handleDeleteArticle} autoFocus>
           Да
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default DeleteElement;

