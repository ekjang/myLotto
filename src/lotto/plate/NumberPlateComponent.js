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
                <div className="text-style">
                    포함하고 싶은 숫자를 선택하세요😊
                </div>
                <div className="number-plate-all-box">
                    <input type="checkbox" checked={this.props.allCheck} onChange={this.allHandleChange} />
                    <span>ALL</span>
                    <button className="number-button" onClick={this.props.handleButtonOnClick}>Generate</button>
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
            </div>
        );
    }
}

export default NumberPlateComponent;