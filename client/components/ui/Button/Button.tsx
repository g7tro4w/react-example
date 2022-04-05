import React, { FC } from 'react';
import cn from 'classnames'

import * as types from './types'

import './Button.css'

export const Button: FC<types.IButtonProps> = ({ children, variant = 'default' }) => {
    return (
        <button className={cn([
            'ui-button',
            `ui-button_${variant}`
        ])}>
            {children}
        </button>
    )
}