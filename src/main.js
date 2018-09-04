import React from "react";

// HACK - these 2 imports can't be merged or launch can't be found
import {launch} from "@sencha/ext-react";
import {ExtReact} from "@sencha/ext-react";

import MyContainer from "./MyContainer";
import App from "./App";

// The main component (App) is wrapped by a pure React component (MyContainer)

// Attempt 1: wrapping everything with <ExtReact>
// The container is rendered fine, but ExtReact components are not "reactified", nothing is rendered

launch((
    <ExtReact>
        <MyContainer>
            <App/>
        </MyContainer>
    </ExtReact>
));

// // Attempt 2: wrapping ExtReact components only:
// <App> is rendered *on top* of <MyContainer>

// launch((
//     <MyContainer>
//         <ExtReact>
//             <App/>
//         </ExtReact>
//     </MyContainer>
// ));
