import Home from './pages/Home';
import Courses from './pages/Courses';
import { Switch, Route } from 'react-router-dom';

const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/courses" exact component={Courses} />
            </Switch>
        </div>
    )
}

export default AppRouter;