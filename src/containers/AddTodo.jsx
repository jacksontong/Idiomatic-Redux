// @flow
import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

import type { Dispatch } from '../types'
import type { Node } from 'react'

export type Props = {
    dispatch: Dispatch
}

const AddTodo = ({ dispatch }: Props): Node => {
    let input: ?HTMLInputElement
    return (
        <Form
            onSubmit={(e: Event) => {
                e.preventDefault()
                if (input) {
                    dispatch(addTodo(input.value))
                    input.value = ""
                }
            }}
        >
            <Row>
                <Col md="6">
                    <InputGroup>
                        <FormControl 
                            placeholder="todo"
                            ref={node => input = node}
                        />
                        <InputGroup.Append>
                            <Button type="submit" variant="primary">+</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </Form>
    )
}

export default connect()(AddTodo)