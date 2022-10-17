import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';
import { baseURL } from '../../redux/baseURL';




const DishDetail = props => {
    return (
        <div>
            <Card style={{ margin: "40px" }}>
                <CardImg top src={baseURL + props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        {props.dish.price}/-
                    </CardText>
                    <CardText>
                        {props.dish.category}
                    </CardText>
                    <hr />
                    <LoadComments comments={props.comments}></LoadComments>
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>
        </div>
    );
}






export default DishDetail;