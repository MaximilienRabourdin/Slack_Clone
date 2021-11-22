import styled from 'styled-components';

const HeaderStyled = styled.div `


.header-all{
display: flex !important;
width: 100%;
max-height:4vh;
/* position: fixed; */
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color);
}

.header-left {
 display:0.4;
 width: 30%;
 display: flex;
 align-items: center;
 margin-left: 20px;
 justify-content: space-between;
 cursor:pointer;


 > .MuiSvgIcon-root {
     margin-left:auto;
     color: white;
    
 } 
    .avatar-icon {
        cursor:pointer;
       
        :hover {
            opacity: 0.8;
}

.avatar-accessTime{
    display: flex-end;
    margin-left:30px;
}

}
}

.header-search {

    flex:0.3;
    color:grey;
    display: flex;
    opacity: 1;
    border: 0.8px gray solid;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    padding: 0 50px;

> input {
    background-color: transparent;
    border:none;
    text-align: center;
    min-width: 30vw;
    outline:none;
    color:white;
}

    .search-icon {
        color:grey;
    }
}

.header-right {
    flex:0.1;
    display:flex;


  >  .MuiSvgIcon-root {
      margin-left: auto;
      margin-right: 20px;
  }
    .help-icon {
        color:white;
        cursor:pointer;
    }
}
`

export default HeaderStyled;

