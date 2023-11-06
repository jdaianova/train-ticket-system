import backgroundImg from '../../data/img/header-background.png';
import Logo from '../Logo/Logo';
import BookingForm from './BookingForm/BookingForm';
import './Header.css';
import { nanoid } from 'nanoid';
import { useRef } from 'react';

export default function Header() {
    const ref = useRef(null);

    const handleLink = (e) => {
        console.log(e.target);
    };

    return (
        <div className="Header">

            <img
                className="Header__background"
                src={backgroundImg}
                alt='background train'
            />

            <Logo />

            <div className="Header__menu">
                <div className="Header__menu-container">
                    {['О нас', 'Как это работает', 'Отзывы', 'Контакты'].map((element) => {
                        return (
                            <div key={nanoid()} onClick={handleLink} className="Header__menu-element">
                                {element}
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="Header__main">
                <div className="Header__main-slogan">
                    <h3>Вся жизнь - </h3>
                    <h2>путешествие!</h2>
                </div>

                <BookingForm />
            </div>

        </div>
    )
};
