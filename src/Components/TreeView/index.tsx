// @ts-nocheck
import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { SList, SScrollView2, SText, STheme, SView } from 'servisofts-component'
import ResizableBox from '../ResizableBox'
import Tables from "./elements/tables"
import SSQL from "../../index";
export default class TreeView extends Component<{ SSQL: SSQL }> {

    // getList() {
    //     return <SList
    //         data={["tables"]}
    //     />
    // }
    render() {
        return <SView height>
            <SView col={"xs-12"} flex style={{
                borderRightColor: STheme.color.card,
                borderRightWidth: 2
            }}>
                <ResizableBox width={200}>
                    <ScrollView style={{ flex: 1 }}>
                        <Tables {...this.props} />
                    </ScrollView>
                </ResizableBox>
            </SView>
        </SView>
    }
}