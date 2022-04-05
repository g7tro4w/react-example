import React, { FC } from 'react';

import {
    Header,
    Footer,
    Main
} from './components'

import './Default.css'

export const Default: FC = ({ children }) => {
    return <div className='layout-default'>
        <Header />
        <Main>
            {children}
        </Main>
        <Footer />
    </div>
}