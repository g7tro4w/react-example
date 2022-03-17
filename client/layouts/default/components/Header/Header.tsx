import React, { FC } from 'react';

import './Header.css'

export const Header: FC = () => {
    const logoTitle = 'logos'
    return (
        <header className="header">
            <div className="header__logo">
                {logoTitle}
            </div>
        </header>
    )
}