import React, { useEffect, useState } from "react";
import { Switch } from 'antd';
import { setTheme } from '../utils/themes';

import './themeToggle.css';
import '../css/colours.css';

function ThemeToggle() {
    const [toggleClass, setToggleClass] = useState('light');
    let theme = localStorage.getItem('theme');

    const onToggleChange = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setToggleClass('light');
        } else {
            setTheme('theme-dark');
            setToggleClass('dark');
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setToggleClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setToggleClass('light')
        }
    }, [theme])

    return (
        <div className='toggle'>
            <Switch checkedChildren="🌙" unCheckedChildren="🌞" checked={toggleClass === "dark"} onChange={onToggleChange} />
        </div>
    )
}

export default ThemeToggle;