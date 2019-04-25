// @flow
import React from 'react'

import type { Node } from 'react'

export type Props = {
    children: Node,
    onClick: () => void,
    active: boolean
}

const Link = ({
    children,
    onClick,
    active
}: Props): Node => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a href="javascript:void(0)" onClick={onClick}>
            {children}
        </a>
    )
}

export default Link