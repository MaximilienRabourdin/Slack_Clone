import React from 'react'
import { db } from '../../firebase';

import SideBarOptionStyled from './SideBarOptionStyted';

function SideBarOption({Icon, title, addChanelOption, id}) {

    const addChannel = (e) => {
     
            const channelName = prompt('Please enter the channel name');

            if (channelName) {
                db.collection('rooms').add({
                    name: channelName,
                });
            
        }
    };
    
    const selectChannel = (e) => {
        
    };


    return (

        <SideBarOptionStyled>

        <div className="sidebar-container" onClick={addChanelOption ? addChannel : selectChannel }>
            {Icon && <Icon fontSize="small" style={{padding: 10 }} />}
            { Icon ? (
                <h3>
                    {title}
                </h3>
             )
              : (
                 
                   <h3 className="channels-option">
                  <span>#</span> {title}
                  </h3>
                 
              )
              }
        </div>
      
   
        </SideBarOptionStyled>
   
    );
}

export default SideBarOption;
