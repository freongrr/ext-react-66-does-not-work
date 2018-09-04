import React from "react";
import {Button, Column, Grid, Panel, RendererCell} from "@extjs/ext-react";

export default class App extends React.Component {

    store = new Ext.data.Store({
        data: [
            {"name": "Lisa", "email": "lisa@simpsons.com", "phone": "555-111-1224"},
            {"name": "Bart", "email": "bart@simpsons.com", "phone": "555-222-1234"},
            {"name": "Homer", "email": "home@simpsons.com", "phone": "555-222-1244"},
            {"name": "Marge", "email": "marge@simpsons.com", "phone": "555-222-1254"}
        ]
    });

    render() {
        return (
            <Panel title="Panel" margin="20" padding="20" layout="fit" height="400">
                <Grid store={this.store}>
                    <Column text="Name" dataIndex="name" flex="1"/>
                    <Column text="Email" dataIndex="email" flex="1"/>
                    <Column text="Phone" dataIndex="phone" flex="1">
                        <RendererCell renderer={this.renderPhone}/>
                    </Column>
                </Grid>
            </Panel>
        );
    }

    renderPhone = (value) => {
        // This works with ExtReact 6.5
        return <Button text={value}/>;
    };
}
