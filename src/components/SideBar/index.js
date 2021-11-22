import React from 'react'
import SideBarStyled from './SideBarStyled'
import SideBarOption from '../SideBarOption/SideBarOption';

// Material UI
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

function SideBar() {
    return (
        <SideBarStyled>
            <div className="all-sidebar">
                <div className="sidebar-header">
                <div className="sidebar-info">
                    <h2> hello everyone </h2>
                    <h3>
                <FiberManualRecordIcon className="circle-sidebar"/>
                <p>Maximilien </p>
                    </h3>
                </div>
              
                <CreateIcon classname="pen-sidebar"/>
                </div>

                <SideBarOption Icon={InsertCommentIcon} title="Threads" />
                <SideBarOption Icon={InboxIcon} title="Mentions & reactions" />
                <SideBarOption Icon={DraftsIcon} title="Saved Items" />
                <SideBarOption Icon={BookmarkBorderIcon} title="Channel browser" />
                <SideBarOption Icon={PeopleAltIcon} title="People & user groups" />
                <SideBarOption Icon={AppsIcon} title="Apps" />
                <SideBarOption Icon={FileCopyIcon} title="File browser" />
                <SideBarOption Icon={ExpandLessIcon} title="Show less" />
        
                <hr />
                <SideBarOption Icon={ExpandMoreIcon} title="Channel" />
                <hr />

                <SideBarOption Icon={AddIcon} addChanelOption title="Add channel" />

           
            </div>
 
        </SideBarStyled>
      
    )
}

export default SideBar;
