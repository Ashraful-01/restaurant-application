import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = props => {
    console.log(props);
    return (
        <div>
            <Card style={{ margin: "20px" }}>
                <CardBody>
                    <CardImg width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                    />
                    <cardImgoverlay>
                        <CardTitle>{props.dish.name}</CardTitle>
                    </cardImgoverlay>
                </CardBody>
            </Card>
        </div >
    );
}





export default MenuItem;