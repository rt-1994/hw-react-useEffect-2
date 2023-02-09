import React from "react";
import styles from "./Tabs.scss";

const Tab = props => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

class Tabs extends React.Component {
    state = {
        activeTab: this.props.children[0].props.label
    }

    changeTab = (tab) => {
        this.setState({activeTab: tab});
    };

    render() {
        let content;
        let buttons = [];

        const TabButtons = ({buttons, changeTab, activeTab}) => {

            return (
                <div className="tab-buttons">
                    {buttons.map(button => {
                        return <button key={Math.floor(Math.random()*100000)}  className={button === activeTab ? styles.active : ''}
                                       onClick={() => changeTab(button)}>{button}</button>
                    })}
                </div>
            )
        }

        return (
            <div>
                {React.Children.map(this.props.children, child => {
                    buttons.push(child.props.label)
                    if (child.props.label === this.state.activeTab) {
                        content = child.props.children
                    }
                })}

                <TabButtons

                    buttons={buttons}
                    changeTab={this.changeTab}
                    activeTab={this.state.activeTab}/>
                <div>{content}</div>

            </div>
        );
    }
}


export {Tabs, Tab};