import React from 'react'
import propTypes from 'prop-types'
import DEFAULT_DP from '../../assets/default_dp.png'
import './styles.css'

const UploadedBy = ({avatarUrl, name, timeStamp}) => (
    <div className="uploaded-by flex">
        <div
            className="avatar round"
            style={{backgroundImage: `url('${avatarUrl}')`}}
        >
        </div>
        <div className="name-details flex flex-col">
            <div className="name">{name}</div>
            <div className="timestamp"><b>uploaded on:</b> {timeStamp}</div>
        </div>
    </div>
)

UploadedBy.propTypes = {
    avatarUrl: propTypes.string,
    name: propTypes.string,
    timeStamp: propTypes.string,
}

UploadedBy.defaultProps = {
    avatarUrl: DEFAULT_DP,
    name: 'Anonymous',
    timeStamp: '',
}

export default UploadedBy