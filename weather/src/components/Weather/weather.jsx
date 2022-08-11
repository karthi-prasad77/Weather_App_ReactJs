import './weather.css';
import React from 'react';
import {Card} from 'semantic-ui-react';

const Report = ({weatherData}) => (
    <Card>
        <Card.Content>
            <Card.Header classNmae="header">{weatherData.name}</Card.Header>
        </Card.Content>
    </Card>
)

// export weather data component
export default Report;