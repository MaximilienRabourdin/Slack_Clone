import React from 'react'
import SideBarOptionStyled from './SideBarOptionStyted';

function SideBarOption({Icon, title, addChanelOption}) {
    return (

        // const addChannel = (e) => {

        // }

        
        // const selectChannel = (e) => {
            
        // }

        <SideBarOptionStyled>

        <div className="sidebar-container" onClick={addChanelOption ? addChannel : selectChannel }>
            {Icon && <Icon fontSize="small" style={{padding: 10 }} />}
            { Icon ? (
                <h3>
                    {title}
                </h3>
             )
              : (
                  <div className="sidebaroptionchannel">
                  <span>#</span> {title}
                  </div>
              )
              }
        </div>
   
        </SideBarOptionStyled>
   
    );
}

export default SideBarOption;
