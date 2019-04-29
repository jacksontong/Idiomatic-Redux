// @flow
import React, { type Node } from 'react'
import { NavLink } from 'react-router-dom'

export type Props = {
    filter: string,
    children: Node
}

const FilterLink = ({ filter, children }: Props) => (
    <NavLink
        to={'/' + (filter === 'all' ? '' : filter)}
        activeStyle={{
            textDecoration: 'none',
            color: 'black'
        }}
        exact
    >
        {children}
    </NavLink>
)

export default FilterLink