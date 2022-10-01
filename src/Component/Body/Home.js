import React, { Component } from 'react';
import { connect } from 'react-redux';



const mapStateToProps = state => {
    // console.log("mapStateToProps:", state);
    return {
        dishes: state.dishes,
        sample: state.sample
    }
}

class Home extends Component {

    componentDidMount() {
        console.log("Home Props:", this.props);
        this.props.dispatch({
            type: 'TEST',
            str: "daffodil International University"
        })
    }

    componentDidUpdate() {
        console.log("Home props Updated :", this.props);
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