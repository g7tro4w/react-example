import React, { FC } from "react";

import { Button } from 'components/ui/Button'

import './Home.css'

export const Home: FC = () => {
    return <div>
        <h1>Home</h1>
        <Button>Click!</Button>
        <Button variant="minor">Click!</Button>
        <Button variant="warning">Click!</Button>
        <Button variant="danger">Click!</Button>
    </div>
}