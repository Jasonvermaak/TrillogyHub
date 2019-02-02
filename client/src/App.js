import React, { Component } from 'react';
import './App.css';
import { Layout } from 'react-mdl';
import { Header } from 'react-mdl';
import { Navigation } from 'react-mdl';
import { Drawer} from 'react-mdl';
import { Content } from 'react-mdl';
import Main from './Components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className ="header-color" title="Team Get A Job" scroll>
            <Navigation>
                <Link to="/MyPage">MyPage</Link>
                <Link to="/Career">Career</Link>
                <Link to="/SelfAssessment">Self Assessment</Link>
                <Link to="/Logout">Logout</Link>
            </Navigation>
        </Header>
        <Drawer title="Team Get A Job">
            <Navigation>
                <a href="/">Career</a>
                <a href="/">Self Assessment</a>
                <a href="/">Logout</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
