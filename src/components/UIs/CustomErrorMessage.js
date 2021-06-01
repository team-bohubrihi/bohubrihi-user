import React from 'react';

const CustomErrorMessage = props => {
    return (
        <div className="text-danger">
            {props.children}
        </div>
    );
}

export default CustomErrorMessage;