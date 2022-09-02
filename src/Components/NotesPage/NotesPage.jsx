import React from 'react'
import { NavLink } from 'react-router-dom';
import Note from './Note';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
function NotesPage(props) {
     let noteStore = props.notesPages.noteItem;

     console.log(noteStore);

     let noteCreate = noteStore.map((note) => {
          return <Note key={note.id} text={note.text} />
     })
     console.log(noteCreate);
     let noteRef = React.createRef();
     const renderNote = () => {
          if (noteRef.current.value != 0) {
               let sendNotesAction = props.sendNotesCreatetor(noteRef.current.value);
               props.distpatch(sendNotesAction);
               console.log(sendNotesAction);
          }
          noteRef.current.value = '';
          props.renderReactDom(props.getState(), props.sendNotesCreatetor, props.distpatch)
     }



     return (
          <div>
               {noteCreate}
               <h2>NotesPage</h2>
               <p></p>


               <NavLink to='/'>назад</NavLink>
               <Row>
                    <Col xs={5}>
                         <FloatingLabel controlId="floatingTextarea2" label="Note">
                              <Form.Control
                                   ref={noteRef}
                                   as="textarea"
                                   placeholder="Leave a note here"
                                   style={{ height: '100px' }}
                              />
                         </FloatingLabel>
                    </Col>
                    <Col xs={1}>
                         <Button onClick={renderNote} variant="dark">Post</Button>
                    </Col>
               </Row>
          </div>
     )

}
export default NotesPage;