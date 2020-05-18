import React from 'react';
import PropTypes from 'prop-types';

const SynonymsList = ({list}) => {
    return (
        <div>
            <ul>
                {list.length && list.map(item => (
                    <li key={`${item.word}-${item.score}`}>{item.word}</li>
                ))}
            </ul>
        </div>
    );
};
SynonymsList.propTypes = {
    list: PropTypes.array.isRequired,
}
export default SynonymsList;
