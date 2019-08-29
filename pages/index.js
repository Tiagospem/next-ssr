import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import withAnalytcs from "~/hocs/withAnalytcs";

const Title = styled.h1`
  color: red;
  font-size: 40px;
`;

class Home extends Component {

    state = {
      text: ''
    };

    /*static async getInitialProps({ req }) {
        //const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        //return { userAgent }
    }*/

    handleChange = e => {
      this.setState({ text: e.target.value})
    };

    render() {
        const { text } = this.state;
        return (<div>
            <Head>
                <title>Home</title>
            </Head>

            <Title>Hello world</Title>
            <Link href="/users">
                <a>Users</a>
            </Link>
            <h1>{text}</h1>
            <div><img src="/static/rafa.jpg" width="350" /></div>
            <input type="text" value={text} onChange={this.handleChange}/>
        </div>);
    }
}
export default withAnalytcs()(Home);