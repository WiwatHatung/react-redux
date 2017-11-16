import React, { Component } from 'react';
import {Container, Header, ContainerBody, ContainerIcon, TageIcon,ContainerSign} from '../style-js/grid'
import GoogleButton from 'react-google-button'
class PageDemo extends Component {
    render() {
        return (
            <Container>
                <Header></Header>
                <ContainerBody>
                    <i className="material-icons">&#xE927;</i>
                    <h1>Training Center</h1>
                    <p>Online traning courses with certificates that can help you build your skills and advance your
                        career!</p>
                    <ContainerIcon>
                        <TageIcon className="material-icons">&#xE927;</TageIcon>
                        <TageIcon className="material-icons">&#xE927;</TageIcon>
                        <TageIcon className="material-icons">&#xE927;</TageIcon>
                    </ContainerIcon>
                    <ContainerSign>
                        <GoogleButton
                            onClick={() => { console.log('button clicked') }}
                        />
                    </ContainerSign>
                </ContainerBody>
            </Container>
        );
    }
}

PageDemo.defaultProps = {};

export default PageDemo;
