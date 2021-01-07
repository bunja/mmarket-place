import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
const DashBoard = () => <h2>DashBoard</h2>;
const AdNew = () => <h2>AdNew</h2>;
const Home = () => <h2>HOME</h2>;

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/myads" component={DashBoard}/>
                    <Route path="/myads/new" component={AdNew}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;