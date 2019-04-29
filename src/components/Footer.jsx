// @flow
import React from 'react'
import FilterLink from '../containers/FilterLink';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants';

const Footer = () => (
    <p>
        Show: 
        {' '}
        <FilterLink filter="all">
            All,
        </FilterLink>
        {' '}
        <FilterLink filter="active">
            Active,
        </FilterLink>
        {' '}
        <FilterLink filter="completed">
            Completed
        </FilterLink>
    </p>
)

export default Footer