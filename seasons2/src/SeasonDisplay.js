import './SeasonDisplay.css'
import React from 'react';

const WINTER = 'winter';
const SUMMER = 'summer';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it is chilly...",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    
    //northen Hemisphere summer months: 3-8, southern Hemisphere summer months: 9-2
    if (month > 2 && month < 9) {
        return lat > 0 ? SUMMER : WINTER;
    } else {
        return lat > 0 ? WINTER : SUMMER;
    }
}

const SeasonDisplay = props => {

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]; 

    //const seasonTxt = season === WINTER ? 'Burr, it is chilly' : 'Let\'s hit the beach';
    //const seasonIcon = season === WINTER ? 'snowflake' : 'sun';

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;


