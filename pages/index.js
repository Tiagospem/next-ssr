import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import withAnalytcs from "~/hocs/withAnalytcs";

const Title = styled.h1`
  color: red;
  font-size: 40px;
`;

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
        </Head>
        <img src="/static/rafa.jpg" width="350" />
        <Title>Hello world</Title>
        <Link href="/users">
            <a>Users</a>
        </Link>
    </div>
);

export default withAnalytcs()(Home);