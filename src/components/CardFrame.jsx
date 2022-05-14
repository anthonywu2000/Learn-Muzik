import React from 'react';
import { Card, Badge } from 'react-bootstrap';

export const CardFrame = ({img, title, body, badgeText}) => {
    return (
        <Card className="cardstyle">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>
                    {title} 
                    <Badge pill bg="success" className="cardbadge">{badgeText}</Badge>
                </Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


export default CardFrame;