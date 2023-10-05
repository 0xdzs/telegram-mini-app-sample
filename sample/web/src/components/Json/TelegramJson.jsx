import React from 'react';
import JsonView from "react18-json-view";
import 'react18-json-view/src/style.css'
import 'react18-json-view/src/dark.css'
import './TelegramJson.css';

const TelegramJson = (props) => {
    return (
        <JsonView {...props} className={'telegramJson ' + props.className} />
    );
};

export default TelegramJson;