import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorPlus from './pages/JuniorPlus';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Routings() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
            {/*       Switch выбирает первый подходящий роут
            <Switch>
            в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
            exact нужен чтоб указать полное совподение (что после '/' ничего не будет)
            <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                  // add routes 1111
            у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
            <Route render={() => <Error404/>}/>
            </Switch>*/}
        </div>
    )
}

export default Routings
