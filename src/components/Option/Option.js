import React from 'react';

const Option = ({ option }) => {
    return (
        <div>
            {/* <p>{option}</p> */}
            {/* <input type="radio" name='aaa' id="" /> */}
            <input type="radio" value="" name="gender" />{option}
        </div>
    );
};

export default Option;