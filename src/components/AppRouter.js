import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseLearn from './pages/CourseLearn'
import Dashboard from './pages/Dashboard';
import CourseDetails from './pages/CourseDetails';
import { Switch, Route } from 'react-router-dom';

const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/courses" exact component={Courses} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/courseDetails" exact component={CourseDetails} />
                <Route path="/course/learn/modern-javascript" exact component={CourseLearn} />
            </Switch>
        </div>
    )
}

export default AppRouter;