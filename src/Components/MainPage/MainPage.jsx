
import MainPag from './MainPages.module.css';
import { NavLink } from 'react-router-dom';

function MainPage() {
    return (
        <div>
            <div className='title'>
                <h1>Главная страница сайта!</h1>
                <NavLink className={MainPag.hom} to='/MessagesPage'>MessagesPage</NavLink>
                <NavLink className={MainPag.hom} to='/NotesPage'>NotesPage</NavLink>
            </div>


        </div>
    )

}
export default MainPage;