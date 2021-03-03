import { React } from 'react';
import { deleteNote, toggleFav } from '../../store/actions/noteAction';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import {Link} from 'react-router-dom';

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNoteHandler = () => {
    dispatch(deleteNote(note))
  }
  const toggleFavoriteHandler = () => {
    dispatch(toggleFav(note))
  }
  const editNoteHandler = ()=>{
    dispatch({type:'EDIT_NOTE',payload:note})
  }
  const heartMarkup = note.favorite ? 'favorite' : 'favorite_border'

  return (
    <div className="note">
      <div className="right-align">
        <i className="material-icons red-text" style={{ cursor: 'pointer' }} onClick={toggleFavoriteHandler}>{heartMarkup}</i>
        <i className="material-icons white-text" style={{ cursor: 'pointer' }} onClick={deleteNoteHandler}>delete</i>
      </div>
      <div>
				<Link to={"/note/"+note.id}>
        <h5 className="white-text">{note.title}</h5>
        </Link>
				<p className="truncate white-text">{note.content}</p>
        <p className="white-text">{moment(note.createdAt.toDate()).fromNow()}</p>
        <div className="right-align">
         <Link to={`/editForm/${note.id}`}><i className="material-icons white-text" onClick={editNoteHandler}>edit</i></Link>
        </div>
      </div>
    </div>
  )
}
export default Note;