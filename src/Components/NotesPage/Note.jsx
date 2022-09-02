import NoteStyle from './Note.module.css'
const Note =(props)=> {

    return (
        <div className={NoteStyle.noteBlock}>
{props.text}
        </div>
    )
}
export default Note;