import React from 'react';
import '../css/userFilter.css';

const UserFilter = ({ userQueries, onQueryDelete }) => {

    const displayUserQueries = () => {
        const userQueriesList = [];
        for(let key in userQueries) {
            const value = userQueries[key];
            userQueriesList.push(
                <div className="filterItem" title={value} key={key}>
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