import React from 'react'
import propTypes from 'prop-types'

import './styles.css'

const ModalShimmer = ({children, closeModal}) => (
    <div className="photo-modal-shimmer">
        {children}
        <div
            className="modal-close-icon"
            onClick={closeModal}
        >
            Close
        </div>
    </div>
)

ModalShimmer.propTypes = {
    children: propTypes.node.isRequired,
    closeModal: propTypes.func.isRequired,
}

export default ModalShimmer