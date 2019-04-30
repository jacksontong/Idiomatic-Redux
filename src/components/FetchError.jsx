// @flow
import React from 'react'

export type Props = {
    message: string,
    onRetry: () => void
}

const FetchError = ({
    message,
    onRetry
}: Props) => (
    <p>
        Could not fetch todos: {message}&nbsp;
        <button onClick={onRetry}>Retry</button>
    </p>
)

export default FetchError