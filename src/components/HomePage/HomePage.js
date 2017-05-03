import React from 'react';

import LoginForm from './LoginForm';

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
                            <h1>the social network for football betting tips</h1>
                        </div>
                    </section>
                    <side
                        className="login-form-container center-aligned-item-container"
                    >
                        <LoginForm />
                    </side>
                </div>
            </section>

        </main>
    );
};

export default HomePage;
