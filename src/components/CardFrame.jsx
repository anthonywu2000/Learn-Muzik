import React from 'react';
import { Card, Badge } from 'react-bootstrap';

export const CardFrame = ({img, title, body, badgeText}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>
                    {title} 
                    <Badge pill bg="warning">{badgeText}</Badge>
                </Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


export default CardFrame;