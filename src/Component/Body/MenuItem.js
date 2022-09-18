import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = props => {
    return (
        <div>
            <Card style={{ margin: "20px" }}>
                <CardBody>
                    <CardImg width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                    />
                    <CardImgOverlay>
                        <CardTitle style={{ cursor: "pointer" }}
                            onClick={props.onDishSelect}>
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div >
    );
}





export default MenuItem;