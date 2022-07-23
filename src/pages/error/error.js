import React from 'react';
import { Card, Container } from 'react-bootstrap'
import bg5 from '../../assets/img/bg5.jpeg'

const Error = () => {
    return (
        <div>
            <Card className="text-white border-0" justify-content-center >
            <Card.Img src={bg5} height="250" width="250" />
            </Card>
        </div>
    )
}

export default Error