// import { Component } from 'react';
import cn from 'classnames';

import Button from '../Button/Button';


export default function Header({ className }) {
    return (
        <header className={cn('header', className)}>
            <img className='header__logo' src="" alt="" />
            <nav className='header__menu'></nav>
            <h1 className='header__title'>Тут будет вывод: </h1>
            <Button className="header__btn">Learn more about BEM</Button>
        </header>
    )
}