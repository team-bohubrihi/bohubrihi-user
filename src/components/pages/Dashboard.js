import React, {Component} from 'react';
import '../../assets/css/Dashboard.css';
import Layout from '../Layout';
import Login from '../parts/Login';

class Dashboard extends Component {
    render() {
        return (
            <Layout> 
                <main id="main" role="main">
                    <header className="page-header background-image-page-header">
                        <div className="container page-header-inner">
                            <h1 className="page-header-title">Course Dashboard</h1>
                        </div>
                        <span className="background-image-page-header-overlay"></span>
                    </header>
                    <Login />
                </main>
            </Layout>
        );
    }
}

export default Dashboard;