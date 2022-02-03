import React from 'react';
import { BiHelpCircle,BiBarChartAlt2 } from 'react-icons/bi';
import {IoSettingsOutline} from 'react-icons/io5'

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="menu">
        <BiHelpCircle className="icon" onClick={this.props.onHelp}/>
        </div>
        <div className="title">வேடல்<div className="titleSubText">(WORD HUNTING)</div></div>
        <div className="menu">
        <BiBarChartAlt2 className="icon" onClick={this.props.onStats}/>
        <IoSettingsOutline className="icon" onClick={this.props.onFeedback}/>
          {/* <button className="statsButton" onClick={this.props.onStats}>
            📊
          </button> */}
          {/* <button className="statsButton" onClick={this.props.onFeedback}>
            😃
          </button> */}
        </div>
      </div>
    );
  }
}
