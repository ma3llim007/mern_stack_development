import React from 'react';
import { getImageUrl } from './utils.js';


const Profile = () => {
    return (
        <section className="profile">
            <h2>Katsuko Saruhashi</h2>
            <img
                className="avatar"
                src={getImageUrl('YfeOqp2')}
                alt="Katsuko Saruhashi"
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    geochemist
                </li>
                <li>
                    <b>Awards: 2 </b>
                    (Miyake Prize for geochemistry, Tanaka Prize)
                </li>
                <li>
                    <b>Discovered: </b>
                    a method for measuring carbon dioxide in seawater
                </li>
            </ul>
        </section>
    )
}

export default Profile
