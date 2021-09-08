import React from 'react'

export const PageList = ({ pageListClassName }) => {
    return (
        <div>
            <div ClassName={pageListClassName}>
                <button>home page</button>
                <button>Task</button>
                <button>calender</button>
                <button>problem</button>
                <button>Setting</button>

            </div>              
        </div>
    );
};


export default PageList;