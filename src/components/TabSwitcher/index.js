import React from 'react'
import Tab from '../Tab'
import propTypes from 'prop-types'
import './styles.css'

const TabSwitcher = ({activeTab, handleClick, addPhoto}) => (
    <div className="tabs-holder">
        <Tab
            tabName={'ADD_PHOTO'}
            handleClick={addPhoto}
        >
            + Add Photo
        </Tab>
        <div className="ui-switch-tabs flex">
            <Tab
                isActive={activeTab === 'GRID'}
                tabName="GRID"
                handleClick={handleClick}
            >
                Grid
            </Tab>
            <Tab
                isActive={activeTab === 'SCROLL'}
                handleClick={handleClick}
                tabName="SCROLL"
            >
                Scroll
            </Tab>
        </div>
    </div>
)

TabSwitcher.propTypes = {
    activeTab: propTypes.string,
    handleClick: propTypes.func.isRequired,
    addPhoto: propTypes.func.isRequired,
}

TabSwitcher.defaultProps = {
    activeTab: 'GRID',
}

export default TabSwitcher