import React, {Component} from "react";
import "./LottoRandomStyle.css";
import NumberPlateComponent from "./plate/NumberPlateComponent";

class LottoRandomSideMenu extends Component {

    render() {
        return (
            <div className="lotto-random-sidemenu">
                <NumberPlateComponent
                    allCheck={this.props.allCheck}
                    selected={this.props.selected}
                    allHandleChange={this.props.allHandleChange}
                    handleChange={this.props.handleChange}
                    handleButtonOnClick={this.props.handleButtonOnClick}
                />
            </div>
        );
    }
}

export default LottoRandomSideMenu;