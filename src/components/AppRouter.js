import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseLearn from './pages/CourseLearn'
import Dashboard from './pages/Dashboard';
import { Switch, Route } from 'react-router-dom';

const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/courses" exact component={Courses} />
                <Route path="/course/learn/modern-javascript" exact component={CourseLearn} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </div>
    )
}

export default AppRouter;