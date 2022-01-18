import { useState, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from '@mui/material';

import { DeleteForever } from '@styled-icons/material/DeleteForever';

import * as S from './styles';
import Api from '../../services/Api';

export type DeleteModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  id: string;
};

const DeleteModal = ({ open, setOpen, id }: DeleteModalProps): ReactElement => {
  const history = useHistory();

  const [deleting, setDeleting] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const deletePost = async () => {
    setDeleting(true);
    try {
      await Api.deletePost(id);
      setDeleting(false);
      setOpen(false);
      history.push('/');
      history.go(0);
    } catch (e) {
      console.log('Error');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle style={modalTitleStyles}>
        <S.Title>
          <DeleteForever />
          Warning!
        </S.Title>
      </DialogTitle>
      <DialogContent style={modalContentStyles}>
        <S.Message>Are you sure you want to delete the post?</S.Message>
      </DialogContent>
      <DialogActions style={modalActionsStyles}>
        <S.Cancel onClick={handleClose}>cancel</S.Cancel>{' '}
        <S.Delete disabled={deleting} onClick={deletePost}>
          delete
        </S.Delete>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;

const modalTitleStyles = {
  background: '#06092B',
  width: '600px',
};

const modalContentStyles = {
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#F2F2F2',
};

const modalActionsStyles = {
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
};
