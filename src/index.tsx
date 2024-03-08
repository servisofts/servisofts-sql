import React from "react";
import { View } from "react-native";
import { SText, SView } from "servisofts-component";
import TabSelection from "./Components/TabSelection";
import TreeView from "./Components/TreeView";
import DataBaseTypes from "./DataBaseTypes";
type PropsType = {
    dataBase: keyof typeof DataBaseTypes,
    execute_query: (query: string) => Promise<any>;
}




export default class SSQL extends React.Component<PropsType> {
    state = {
    }

    type: PropsType["dataBase"];
    execute_query(query, params) {
        if (params && Array.isArray(params)) {
            params.map((o, i) => {
                query = (query + "").replaceAll(`$${i + 1}`, o)
            })
        }
        return this.props.execute_query(query);
    }

    render() {
        this.type = this.props.dataBase
        return <SView col={"xs-12"} flex
        // backgroundColor={this.props.backgrounColor}
        >
            {/* <MenuBar /> */}
            <SView col={"xs-12"} row flex>
                <TreeView SSQL={this} />
                <TabSelection SSQL={this} />
            </SView>
        </SView>
    }
};
