import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { baseURL } from '../../redux/baseURL';

const MenuItem = props => {
    return (
        <div>
            <Card style={{ margin: "20px" }}>
                <CardBody>
                    <CardImg width="100%"
                        alt={props.dish.name}
                        src={baseURL + props.dish.image}
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