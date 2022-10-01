import React, { Component } from 'react';
import { connect } from 'react-redux';
import COMMENTS from '../../data/Comments';
import DISHES from '../../data/Dishes';


const mapStateToProps = state => {
    console.log("mapStateToProps:", state);
    return {
        dishes: DISHES,
        comments: COMMENTS
    }
}

class Home extends Component {

    componentDidMout() {
        console.log("Home state : ", this.state);
        console.log("Home Props:", this.props);
    }

    render() {
        document.title = "Farista Restaurant";
        return (
            <div>

            </div>
        );
    }
}



export default connect(mapStateToProps)(Home);