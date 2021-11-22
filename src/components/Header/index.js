import React from 'react'
import HeaderStyled from './HeaderStyled.js';

//Material UI
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header () {

    return (
      
        <HeaderStyled>
        
        <div className="header-all">

        <div className="header-left">
            <Avatar className="avatar-icon"/>
            <AccessTimeIcon className="avatar-accessTime" />
        </div>

        <div className="header-search">
            <SearchIcon className="search-icon"/>
            <input className="input-search" placeholder="Search..."/>
        </div>

        <div className="header-right">
        <HelpOutlineIcon className="help-icon"/>
        </div>

        </div>
        

        </HeaderStyled>

    )
}

export default Header
