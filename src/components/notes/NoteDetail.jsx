import { React } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';
const NoteDetail = (props) =>{
    const id=props.match.params.id
    useFirestoreConnect([{collection:'notes',doc:id}]);
    const note = useSelector(({firestore:{data}})=>data.notes&&data.notes[id])
    const noteMarkup = !isLoaded(note)?(
        <div className="container section favorite">
        <div className="card z-depth-0" >
            <div className="card-content">
                <span className="card-title black-text">Loading.....</span>
   
            </div>
            <div className="card-action white lighten-4 black-text">
               
            </div>
        </div>
    </div>
    ):isEmpty(note)?(
			<div className="container section favorite">
			<div className="card z-depth-0">
					<div className="card-content">
							<span className="card-title black-text">OOPS! Note you are Looking for is unavailable</span>
							
					</div>
					<div className="card-action white lighten-4 black-text">
							
					</div>
			</div>
	</div>
		):(

			<div className="container section favorite">
			<div className="card z-depth-0">
					<div className="card-content">
							<span className="card-title black-text">{note.title}</span>
							<p className="black-text">{note.content}</p>
					</div>
					<div className="card-action white lighten-4 black-text">
							<div>{moment(note.createdAt.toDate()).calendar()}</div>
					</div>
			</div>
	</div>
		)
    return noteMarkup;
}

export default NoteDetail;