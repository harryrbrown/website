
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFalse, setTrue } from '../features/config/configSlice';
import './../css/homepage.css';
import sprite from './../img/sprite_shadow.gif';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTrue())
        return () => {
            dispatch(setFalse())
        }
    }, [])

    return (
        <>
            <div class="main">
                <div class="homepage-title">
                    <h1>
                        <span class="gradienttext" style={{background: "linear-gradient(#26547C, #333)", fontWeight: "800"}}>Harry Brown</span>
                    </h1>
                    <img src={sprite}></img>
                    <br></br>
                </div>
            </div>
            <div>
            <div className="homepage-nav">
            <Link activeClassName="is-active" to="/about">ABOUT </Link>
            <Link activeClassName="is-active" to="/work">WORK </Link>
            <Link activeClassName="is-active" to="/contact">CONTACT </Link>
            </div>
            </div>
        </>
    )
}

export default Home;