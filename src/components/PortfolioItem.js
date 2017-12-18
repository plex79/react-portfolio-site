import React from 'react';

const PortfolioItem = (props) => (
    <div>
        this is from portfolio-item no. {props.match.params.id}
    </div>
);

export default PortfolioItem;