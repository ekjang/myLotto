import React, {Component} from "react";
import "./LottoRandomStyle.css";
import LottoBoxComponent from "./numberBox/LottoBoxComponent";

class LottoRandomContents extends Component {
    render() {
        const lottoNumbers = this.props.lottoNumbers
        return (
            <div className="lotto-random-contents">
                <div className="blank-style">
                    <button className="clear-button" onClick={this.props.clearButtonOnClick}>Clear</button>
                </div>
                <div>
                    {lottoNumbers.map((lottoNumber, i) =>
                        <LottoBoxComponent
                            key={i}
                            lottoNumber={lottoNumber}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default LottoRandomContents;