import React from "react";
import { Default as DefaultLayout } from "./layouts";
import { NotFound } from "./pages";
import './App.css'

export default () => {
    return <DefaultLayout>
        <NotFound/>
    </DefaultLayout>
}