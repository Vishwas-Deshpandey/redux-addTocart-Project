import React from 'react'
import Products from './Products'
import { useEffect } from "react";
import Spinner from "./Spinner";
import { useSelector, useDispatch } from 'react-redux';
import { loading } from '../actions/actions';



const Main = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((store) => store.loadingReducer.isLoading)

    useEffect(() => {
        setTimeout(() => {
            dispatch(loading())
        }, 2000);
    }, [dispatch])
    return (
        <div>
            {isLoading ?
                <Spinner />
                :
                <div>
                    <Products />
                </div>
            }

        </div>
    )
}

export default Main