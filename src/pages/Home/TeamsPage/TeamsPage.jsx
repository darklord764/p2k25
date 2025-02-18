import React from 'react'
import profiles from '../../../componants/ProfileCard/data'
import './TeamsPage.css'
import ProfileCard from '../../../componants/ProfileCard/ProfileCard'

export const TeamsPage = ({title}) => {
    return (
        <div className="profiles">
            <h2 className="title" >{title}</h2>
            <div>
            {
                profiles.map(user => (
                    <ProfileCard user={user} />
                ))
            }
            </div>
        </div>
    )
}

export default TeamsPage;
