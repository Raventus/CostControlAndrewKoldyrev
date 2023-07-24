import React, { type FC } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute'
import NotFound from '../NotFound/NotFound'
import Auth from '../Auth/Auth'
import CostList from '../../CostList/CostList'
import CategoriesContainer from '../../Categories/CategoriesContainer'
import Layout from '../../hoc/Layout/Layout'
import Analytics from '../../Analytics/Analytics/Analytics'

const mainElement = (
    <ProtectedRoute>
        <Layout>
            <Routes>
                <Route path='/categories' element={<CategoriesContainer/>} />
                <Route path='/analytics' element={<Analytics/>} />
                <Route path='/' element={<CostList monthToCalculate={''} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    </ProtectedRoute>
)

export const Navigation: FC = (): JSX.Element => (
    <HashRouter >
        <React.StrictMode>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="*" element={mainElement} />
            </Routes>
        </React.StrictMode>
    </HashRouter>
)
