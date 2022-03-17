import React, { FC } from 'react';

import {
    Header,
    Footer,
    Main
} from './components'

export const Default: FC = ({ children }) => {
    return <>
        <Header />
        <Main>
            {children}
        </Main>
        <Footer />
    </>
}