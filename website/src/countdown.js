import React, { Component } from 'react';
import PropTypes from 'prop-types'
import 'semantic-ui-css/semantic.min.css'
import { Button, Grid, Feed, Icon, Image, Header, Segment } from 'semantic-ui-react'

/**
 * Note : 
 * If you're using react v 15.4 or less
 * You can directly import PropTypes from react instead. 
 * Refer to this : https://reactjs.org/warnings/dont-call-proptypes.html
 */

class Countdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
        }
    }

    componentDidMount() {
        // update every second
        this.interval = setInterval(() => {
            const date = this.calculateCountdown(this.props.date);
            date ? this.setState(date) : this.stop();
        }, 1000);
    }

    componentWillUnmount() {
        this.stop();
    }

    calculateCountdown(endDate) {
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

        // clear countdown when date is reached
        if (diff <= 0) return false;

        const timeLeft = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0
        };

        // calculate time difference between now and expected date
        if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) { // 24 * 60 * 60
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) { // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;

        return timeLeft;
    }

    stop() {
        clearInterval(this.interval);
    }

    addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    }

    render() {
        const countDown = this.state;

        return (
            <div className="section">
                <div id="section-grey">
                    <div className="Countdown">
                        <div id="assignment-box">
                            <span className="assignment">
                                <b>OPGAVENAVN</b>
                            </span>
                        </div>
                        <div id="date-connector">
                        </div>
                        <br />
                        <span className="Countdown-date-front">
                            <span className="Countdown-col-element">
                                <text>2021/5/5</text>
                                <b>Yesterday</b>
                                <span>12:00</span>
                            </span>
                        </span>

                        <span className="Countdown-col">
                            <span className="Countdown-col-element">
                                <text>&zwnj;</text>
                                <b>{this.addLeadingZeros(countDown.days)}</b>
                                <span>{countDown.days === 1 ? 'Day' : 'Days'}</span>
                            </span>
                        </span>

                        <span className="Countdown-col">
                            <span className="Countdown-col-element">
                                <text>&zwnj;</text>
                                <b>{this.addLeadingZeros(countDown.hours)}</b>
                                <span>Hours</span>
                            </span>
                        </span>


                        <span className="Countdown-col">
                            <span className="Countdown-col-element">
                                <text>&zwnj;</text>
                                <b>{this.addLeadingZeros(countDown.min)}</b>
                                <span>Min</span>
                            </span>
                        </span>

                        <span className="Countdown-col">
                            <span className="Countdown-col-element">
                                <text>&zwnj;</text>
                                <b>{this.addLeadingZeros(countDown.sec)}</b>
                                <span>Sec</span>
                            </span>
                        </span>

                        <span className="Countdown-date-back">
                            <span className="Countdown-col-element">
                                <text>2021/5/6</text>
                                <b>Today</b>
                                <span>16:00</span>
                            </span>
                        </span>
                    </div>

                    <div id="spacer">
                    </div>
                    <br />
                    <span className="section2">
                        <span className="delivery-status">
                            <b>Afleveringsstatus: </b>
                            <b id="status">MANGLER</b>
                        </span>
                    </span>
                    <br />
                    <div id="aflever">
                        <Button size="massive" color="green">Afléver</Button>
                    </div>
                </div>
                <br />
                <Grid centered columns={2} divided>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Feed>
                                <Feed.Event>
                                    <Feed.Label>
                                        <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                    </Feed.Label>
                                    <Feed.Content>
                                        <Feed.Summary>
                                            <Feed.User>Dr. Morde Hammertime</Feed.User> Added a comment
                                            <Feed.Date>29 May</Feed.Date>
                                        </Feed.Summary>
                                        <Feed.Extra>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </Feed.Extra>
                                        <Feed.Meta>
                                            <Feed.Like>
                                                Reply
                                            </Feed.Like>
                                        </Feed.Meta>
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <div>
                                <Header as='h3' color attached='top'>
                                    Assessment
                                </Header>
                                <Segment attached>
                                    No Assesment has been given for this assignment yet
                                </Segment>
                            </div>
                            <br />
                            <div>
                                <Header as='h3' color attached='top'>
                                    Emergency Contact
                                </Header>
                                <Segment attached>
                                    In case of techincal issues assignment can be mailed to: HA2020BA04@fov.sdu.dk
                                </Segment>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div >
        );
    }
}

Countdown.propTypes = {
    date: PropTypes.string.isRequired
};

Countdown.defaultProps = {
    date: new Date()
};

export default Countdown;
