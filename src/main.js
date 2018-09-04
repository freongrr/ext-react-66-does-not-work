import React from "react";

import {launch} from "@extjs/reactor";

import MyContainer from "./MyContainer";
import App from "./App";

// The main component (App) is wrapped by a pure React component (MyContainer)

launch((
    <MyContainer>
        <App/>
    </MyContainer>
));
