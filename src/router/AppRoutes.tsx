
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ChallengeDetail from'../pages/ChallengeDetail'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Challenge/:challengeId' element={<ChallengeDetail/>}/>
        </Routes>
    )

}

export default AppRoutes