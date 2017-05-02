import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
    return (
        <main className="home-page">
            <section className="home-page-intro">
                <div
                    className="content"
                >
                    <section className="intro-title-container center-aligned-item-container">
                        <div
                            className="intro-title"
                        >
                            <h1>WELCOME</h1>
                            <h2>to the social network for football betting tips</h2>
                        </div>
                    </section>
                    <side
                        className="login-form"
                    ></side>
                </div>
            </section>

        </main>
    );
};

export default HomePage;
