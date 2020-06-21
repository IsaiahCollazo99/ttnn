import React from 'react';

const UserFilter = ({ userQueries, onQueryDelete }) => {

    const displayUserQueries = () => {
        const userQueriesList = [];
        for(let key in userQueries) {
            const value = userQueries[key];
            userQueriesList.push(
                <div className="filterItem" title={value}>
                    {value} <span onClick={onQueryDelete}>X</span>
                </div>)
        }
        return userQueriesList;
    }

    const userQueriesList = displayUserQueries();
    
    return (
        <div className="userFilter">
            {userQueriesList}
        </div>
    )
}

export default UserFilter;