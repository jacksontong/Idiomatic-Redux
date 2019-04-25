// @flow
import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

import type { Dispatch } from '../types'

export type Props = {
    dispatch: Dispatch
}

const AddTodo = ({ dispatch }: Props) => {
    return (
        <Form>
            <Row>
                <Col md="6">
                    <InputGroup>
                        <FormControl 
                            placeholder="todo"
                        />
                        <InputGroup.Append>
                            <Button variant="primary">+</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </Form>
    )
}

export default connect()(AddTodo)