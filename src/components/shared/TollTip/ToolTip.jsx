import React from 'react';
import PropTypes from 'prop-types';

const ToolTip = ({styles, counter = 0, handleModalOpen = () => ({})}) => {
    return (
        <div
            style={styles}
        >
            This word has {counter} synonyms.
{/*
            <span onClick={handleModalOpen}>Show more...</span>
*/}
        </div>
    );
};
ToolTip.propTypes = {
    styles: PropTypes.object.isRequired,
    handleModalOpen: PropTypes.func,
    counter: PropTypes.number,
}
export default ToolTip;
