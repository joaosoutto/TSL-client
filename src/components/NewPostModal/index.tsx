import { useState, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from '@mui/material';

import { CommentAdd } from '@styled-icons/boxicons-solid/CommentAdd';

import * as S from './styles';
import Api from '../../services/Api';
import TextField from '../TextField';
import { useEffect } from 'react';

export type NewPostModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const NewPostModal = ({ open, setOpen }: NewPostModalProps): ReactElement => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    if (body.length > 0) {
      setErrorMessage('');
    }
  }, [body]);

  const handleClose = () => {
    setOpen(false);
    setTitle('');
    setBody('');
    setErrorMessage('');
  };

  const checkBody = async () => {
    setErrorMessage('');
    if (!body) {
      setPosting(false);

      return setErrorMessage('Post cannot be empty!');
    } else {
      try {
        const payload = {
          title,
          body,
        };
        await Api.newPost(payload);
        setPosting(false);
        setOpen(false);
        history.push('/');
        history.go(0);
      } catch (e) {
        setErrorMessage('Something went wrong. Please, try again.');
        setPosting(false);
      }
    }
  };

  const newPost = () => {
    setPosting(true);
    checkBody();
  };

  return (
    <Dialog data-testid='New post modal' open={open} onClose={handleClose}>
      <DialogTitle style={modalTitleStyles}>
        <S.Title>
          <CommentAdd aria-label='New post icon' />
          New post
        </S.Title>
      </DialogTitle>
      <DialogContent style={modalContentStyles}>
        <TextField
          value={title}
          name='title'
          onChange={(e) => setTitle(e.target.value)}
          label='Title'
          placeholder='(optional)'
        />
        <TextField
          value={body}
          name='body'
          onChange={(e) => setBody(e.target.value)}
          area
          label='Post'
          placeholder='Your post'
        />
        {errorMessage && <S.Error>{errorMessage}</S.Error>}
      </DialogContent>
      <DialogActions style={modalActionsStyles}>
        <S.Cancel aria-label='Cancel button' onClick={handleClose}>
          cancel
        </S.Cancel>{' '}
        <S.Post aria-label='Post button' disabled={posting} onClick={newPost}>
          post
        </S.Post>
      </DialogActions>
    </Dialog>
  );
};

export default NewPostModal;

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
