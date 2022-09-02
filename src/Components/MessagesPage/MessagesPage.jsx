import React from 'react'
import { NavLink } from 'react-router-dom';
import Message from './Message'
import 'bootstrap/dist/css/bootstrap.min.css'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
function MessagesPage(props) {
     let messagesStore = props.messagesPage.messageItem;
     console.log(messagesStore);

     let messageCreate = messagesStore.map((message) => {
          return <Message key={message.id} message={message.text} />
     })
     let messageRef = React.createRef()
     const renderMessages = () => {
          if (messageRef.current.value != 0) {
               let sendMessagesAction = props.sendMessagesCreatetor(messageRef.current.value);
               props.dispatch(sendMessagesAction);
               console.log(sendMessagesAction);
               //     messagesStore.push({
               //           id:4,
               //           text:noteRef.current.value
               //      })
               messageRef.current.value = ''
               props.renderReactDom(props.getState(), props.sendMessagesCreatetor, props.dispatch)
          }

     }

     console.log('messageCreate');
     return (
          <div>
               {messageCreate}
               <h2>MessagesPage</h2>

               <NavLink to='/'>назад</NavLink>
               <Row>
                    <Col xs={5}>
                         <FloatingLabel controlId="floatingTextarea2" label="Note">
                              <Form.Control
                                   ref={messageRef}
                                   as="textarea"
                                   placeholder="Leave a note here"
                                   style={{ height: '100px' }}
                              />
                         </FloatingLabel>
                    </Col>
                    <Col xs={1}>
                         <Button onClick={renderMessages} variant="dark">Post</Button>
                    </Col>
               </Row>
          </div>

     )

}
export default MessagesPage;