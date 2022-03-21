import React, { FC } from "react";
import { Default as DefaultLayout } from "./layouts";
import { routes } from './routes'
import './App.css'

const App: FC = () => {
    return <DefaultLayout>
        {routes}
    </DefaultLayout>
}

export default App