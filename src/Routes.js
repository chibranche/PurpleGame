// Copyright © FINANCE SECURITY GmbH - All rights reserved.

import React, { Component, lazy, Suspense } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';

import Loading from './components/utils/Loading/Loading'

const LocalGame = lazy(()=>import("./components/LocalGame"))
const Homepage = lazy(()=>import("./components/HomePage"))
const NotFound = lazy(()=>import("./components/NotFound"))
const Rules = lazy(() => import('./components/Rules'))


export class Routes extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <Suspense fallback={<Loading />}>
                <main id="main" className='main-content'>
                    <Switch>
                        {/* Homepage */}
                        <Route exact path="/">
                            <Homepage />
                        </Route>

                        {/* Local game */}
                        <Route exact path="/local-game">
                            <LocalGame/>
                        </Route>

                        {/* Rules */}
                        <Route exact path="/how-to-play">
                            <Rules />
                        </Route>

                        {/* 404 */}
                        <Route path="*">
                            <NotFound />
                        </Route>

                    </Switch>
                </main>
            </Suspense>
        )
    }
}

export default withRouter(Routes)
