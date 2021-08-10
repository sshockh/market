import React from 'react';
//import wav from './uvedomlenie14.wav';
import mp3 from './uvedomlenie14.mp3';
//import ogg from './uvedomlenie14.ogg';

class Deamon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timerId: null,
            sound: new Audio(mp3)
        }
    }

    componentDidMount() {
        const timerId = setInterval(() => {
            /*const url = 'http://localhost:8090/';
            fetch(url, {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                })
            })*/
            //this.state.sound.play();
        }, 5000);
        this.setState({ timerId });
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    render() {
        return null;
    }
}

export default Deamon;