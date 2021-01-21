import React, {Component} from "react";
import "./LottoRandomStyle.css";
import LottoBoxComponent from "./numberBox/LottoBoxComponent";

class LottoRandomContents extends Component {
    render() {
        const lottoNumbers = this.props.lottoNumbers
        return (
            <div className="lotto-random-contents">
                {lottoNumbers.map((lottoNumber, i) =>
                    <LottoBoxComponent
                        key={i}
                        lottoNumber={lottoNumber}
                    />
                )}
            </div>
        );
    }
}

export default LottoRandomContents;