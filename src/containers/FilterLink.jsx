// @flow
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/visibilityFilter'
import Link from '../components/Link'

import type { Dispatch, State } from '../types'
import type { VisibilityFilter } from '../types/visibilityFilter'

export type Props = {
    filter: VisibilityFilter
}

const mapStateToProps = ({ visibilityFilter }: State, { filter }: Props) => ({
    active: visibilityFilter === filter
})

const mapDispatchToProps = (dispatch: Dispatch, { filter }: Props) => ({
    onClick: () => dispatch(setVisibilityFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)