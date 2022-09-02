import Messagestyle from './Message.module.css'
const  Message =(props)=> {
    
console.log(props);
    return (
        <div className={Messagestyle.messageBlock}>
            {props.message}
        </div>
    )

}
export default Message;