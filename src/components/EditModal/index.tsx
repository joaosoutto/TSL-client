import { useState, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from '@mui/material';

import { Edit } from '@styled-icons/boxicons-regular/Edit';

import * as S from './styles';
import Api from '../../services/Api';
import TextField from '../TextField';
import { useEffect } from 'react';

export type EditModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  id: string;
  title?: string;
  body: string;
};

const EditModal = ({
  open,
  setOpen,
  id,
  title,
  body,
}: EditModalProps): ReactElement => {
  const history = useHistory();
  const [newTitle, setNewTitle] = useState(title);
  const [newBody, setNewBody] = useState(body);
  const [errorMessage, setErrorMessage] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (newBody.length > 0) {
      setErrorMessage('');
    }
  }, [newBody]);

  const handleClose = () => {
    setOpen(false);
    setNewTitle(title);
    setNewBody(body);
    setErrorMessage('');
  };

  const checkBody = async () => {
    setErrorMessage('');
    if (!newBody) {
      setEditing(false);

      return setErrorMessage('Post cannot be empty!');
    } else {
      try {
        const payload = {
          title: newTitle,
          body: newBody,
          id,
        };
        await Api.editPost(payload);
        setEditing(false);
        setOpen(false);
        history.push('/');
        history.go(0);
      } catch (e) {
        setErrorMessage('Something went wrong. Please, try again.');
        setEditing(false);
      }
    }
  };

  const editPost = () => {
    setEditing(true);
    checkBody();
  };

  // const deletePost = async () => {
  //   setDeleting(true);
  //   try {
  //     await Api.deletePost(id);
  //     setDeleting(false);
  //     setOpen(false);
  //     history.push('/');
  //     history.go(0);
  //   } catch (e) {
  //     console.log('Error');
  //   }
  // };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle style={modalTitleStyles}>
        <S.Title>
          <Edit />
          Edit post
        </S.Title>
      </DialogTitle>
      <DialogContent style={modalContentStyles}>
        <TextField
          value={newTitle}
          name='title'
          onChange={(e) => setNewTitle(e.target.value)}
          label='Title'
        />
        <TextField
          value={newBody}
          name='body'
          onChange={(e) => setNewBody(e.target.value)}
          area
          label='Post'
        />
        {errorMessage && <S.Error>{errorMessage}</S.Error>}
      </DialogContent>
      <DialogActions style={modalActionsStyles}>
        <S.Cancel onClick={handleClose}>cancel</S.Cancel>{' '}
        <S.Edit disabled={editing} onClick={editPost}>
          edit
        </S.Edit>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;

const modalTitleStyles = {
  background: '#06092B',
  width: '600px',
};

const modalContentStyles = {
  padding: '26px 30px 0 30px',
  display: 'inline-block',
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
