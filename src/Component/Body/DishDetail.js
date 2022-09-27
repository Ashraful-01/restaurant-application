import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';




const DishDetail = props => {
    return (
        <div>
            <Card style={{ margin: "40px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        ${props.dish.price}/-
                    </CardText>
                    <CardText>
                        {props.dish.category}
                    </CardText>
                    <hr />
                    <LoadComments comments={props.dish.comments} />
                </CardBody>
            </Card>
        </div>
    );
}






export default DishDetail;