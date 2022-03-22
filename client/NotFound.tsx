import React, { FC } from "react";
import { Default as DefaultLayout } from "./layouts";
import { NotFound } from "./pages";
import './App.css'

const App: FC = () => {
    return <DefaultLayout>
        <NotFound/>
    </DefaultLayout>
}

export default App