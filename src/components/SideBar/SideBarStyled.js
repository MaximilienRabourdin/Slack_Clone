import styled from 'styled-components';

const SideBarStyled = styled.div `

.all-sidebar{
color:white;
min-width: 25vw;
max-width:30vw;
background-color: var(--slack-color);
height:100vh;
border-top: 1px solid #49274b };


    hr {
        margin-top: 10px;
        margin-bottom:10px;
        border:1px solid #49274b;
            }


.sidebar-header {
    display: flex;
    padding:13px;
    border-bottom: 1px solid #49274b;


> .MuiSvgIcon-root{
    padding:8px;
    color:#49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
}

}

.sidebar-info{
    flex:1;
    margin-right: 0.5rem;
    
    >h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom:5px;
        text-transform: uppercase;
    }

    >h3 {
        display:flex;
        font-size: 13px;
        font-weight: 400;
        align-items:center
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top:1px;
        margin-right: 2px;
        color:green;

    }



}

`
export default SideBarStyled;

