import React, { Component } from 'react';
import { View, PanResponder, Platform } from 'react-native';
import Selection from './Selection';


type PropsType = {
    direcction?: "top" | "bottom" | "left" | "right",
    size: any,
    width?: any,
    children?:any
}
class ResizableBox extends Component<PropsType> {
    panResponder;
    startWidth;
    state;
    constructor(props) {
        super(props);
        console.log("entro acas ajc ajc ajc aj caj csj ")
        this.state = {
            width: this.props.width ?? 100,
        };

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: (evt, gestureState) => {
                // this.setEnabled(false);
                Selection.preventSelection();
                this.startWidth = this.state.width
            },
            onPanResponderMove: (evt, gestureState) => {

                this.setState({ width: this.startWidth + gestureState.dx, });
            },
            onPanResponderRelease: (evt, gestureState) => {
                Selection.allowSelection();
                // this.setEnabled(true);
                // this.setState({
                //     width: this.state.width + gestureState.dx,
                // });
            },
        });
    }


    render() {
        return (
            <View style={{
                height: "100%",
                width: this.state.width,
            }}>
                {this.props.children}
                <View style={{
                    height: "100%",
                    width: 8,
                    position: "absolute",
                    right: 0,
                    top: 0,
                    cursor: "e-resize"
                }}
                    {...this.panResponder.panHandlers}
                >
                </View>
            </View >
        );
    }
}

export default ResizableBox;
