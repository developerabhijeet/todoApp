import { React } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../customhook/useInput';
import { addNote } from '../../store/actions/noteAction';


const Form = () => {
    const [title, bindTitle, resetTitle] = useInput();
    const [content, bindContent, resetContent] = useInput();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({ title, content }))
        resetTitle()
        resetContent()
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="white">
                <h5 className="gret-text text-darken-3">Add New Note</h5><br />

                <div className="input-field">
                    <input id="note_title" type="text" className="validate" {...bindTitle} />
                    <label className="active" htmlFor="note_title">Note Title</label>
                </div>
                <div className="input-field">
                    <textarea id="note_content" className="materialize-textarea"{...bindContent}></textarea>
                    <label htmlFor="note_content">Note Content</label>
                </div>
                <button className="btn green">Add</button>

            </form>
        </div>
    )
}
export default Form;