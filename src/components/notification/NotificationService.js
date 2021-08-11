import React from 'react';
//import wav from './uvedomlenie14.wav';
import mp3 from './uvedomlenie14.mp3';
//import ogg from './uvedomlenie14.ogg';
import NotificationList from './NotificationList';

class NotificationService extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timerId: null,
            sound: new Audio(mp3),
            queue: []
        }
    }

    getData = () => {
        fetch('http://localhost:8090/service', {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            })
        })
            .then(res => {
                if (res.ok) {
                    res.json()
                        .then(data => {
                            if (!Array.isArray(data)) console.log('Ожидался массив, получено:', data);

                            this.setState((state) => {

                                const oldQueue = state.queue; // старая очередь
                                const oldSet = new Set(); // оптимизация для поиска по id
                                oldQueue.forEach(el => { oldSet.add(el.id) });

                                const newSet = new Set(); // все пришедшие уведомления
                                const newQueue = []; // только новые уведомления

                                data.forEach(el => {
                                    newSet.add(el.id);
                                    if (!oldSet.has(el.id)) {
                                        newQueue.push(el);
                                    }
                                });

                                if (newQueue.length > 0) state.sound.play();

                                const queue = oldQueue.filter(el => newSet.has(el.id));
                                queue.push(...newQueue);
                                return { queue };
                            });
                        })
                        .catch(err => { console.log(err) })
                } else { console.log(res.status, res) }
            })
            .catch(err => { console.log(err) });
    }

    markAsRead(id) {
        fetch('http://localhost:8090/service/' + id, {
            method: 'put',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(res => {
                if (res.ok) {
                    //                     
                } else { console.log(res.status, res) }
            })
            .catch(err => { console.log(err) });
    }

    componentDidMount() {
        const timerId = setInterval(this.getData, 5000);
        this.setState({ timerId });
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    render() {
        return <NotificationList notifications={this.state.queue} markAsRead={this.markAsRead} />
    }
}

export default NotificationService;