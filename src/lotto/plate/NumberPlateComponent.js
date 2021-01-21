import React, {Component} from "react";
import "./NumberPlateStyle.css";
import NumberPlateBoxComponent from "./NumberPlateBoxComponent";

class NumberPlateComponent extends Component {

    allHandleChange = (e) => {
        const {checked} = e.target;
        this.props.allHandleChange(checked)
    }

    render() {
        return (
            <div>
                <div className="number-plate-box">
                    <input type="checkbox" checked={this.props.allCheck} onChange={this.allHandleChange} />
                    <span>ALL</span>
                </div>
                <div className="number-plate-contents">
                    {this.props.selected.map((select, index)=>
                            <NumberPlateBoxComponent
                                key={index}
                                number={index+1}
                                selected={select}
                                handleChange={this.props.handleChange}
                            />
                    )}
                </div>
                <button className="number-button" onClick={this.props.handleButtonOnClick}>Generate</button>
            </div>
        );
    }
}

export default NumberPlateComponent;