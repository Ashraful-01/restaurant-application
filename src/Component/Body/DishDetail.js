import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';




const DishDetail = props => {
    return (
        <div>
            <Card style={{ margin: "40px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>${props.dish.price}</p>
                        <p>{props.dish.category}</p>


                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}






export default DishDetail;