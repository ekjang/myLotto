import React, {Component} from "react";
import "./LottoBoxStyle.css"

class LottoBoxComponent extends Component {
    state = {
        numbers : [1, 2, 3, 4, 5, 6],
        b_number : 7
    }
    render() {
        const numbers = this.props.lottoNumber.slice(0, 6)
        const b_number = this.props.lottoNumber[6]

        return (
            <div className="lotto-contents">
                <div className="lotto-box">
                    {numbers.map(n=>
                        <div
                            className="lotto-box-number"
                            key={n}>{n}
                        </div>
                    )}
                    <div className="lotto-box-plus">+</div>
                    <div className="lotto-box-number">{b_number}</div>
                </div>

            </div>
        );
    }
}

export default LottoBoxComponent;