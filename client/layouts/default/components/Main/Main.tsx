import React, { FC } from 'react';

import './Main.css'

export const Main: FC = ({ children }) => {
    return <main className='main'>
        Тут у нас контент хех мда{children}
    </main>
}