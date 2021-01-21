import React, { Component } from 'react';
import LottoRandomHeader from "./LottoRandomHeader";
import LottoRandomSideMenu from "./LottoRandomSideMenu";
import LottoRandomContents from "./LottoRandomContents";
import "./LottoRandomStyle.css";

class LottoRandomTemplate extends Component {

    state = {
        allCheck : false,
        selected : [],
        lottoNumbers : []
    }

    componentDidMount() {
        const {selected} = this.state;
        for(let i=1; i<46; i++) {
            selected.push(false);
        }
        this.setState({selected});
    }

    //전체 체크
    allHandleChange = (checked) => {
        const {selected} = this.state;

        for(let i=1; i<46; i++) {
            this.handleChange(checked, i)
        }
        this.setState({selected})
    }

    clearButtonOnClick = () => {
        const {lottoNumbers} = this.state
        if(lottoNumbers.length > 0) {
            while (lottoNumbers.length > 0) {
                lottoNumbers.pop()
            }
        }
        this.setState({lottoNumbers})
    }

    //숫자 선택 이벤트 발생
    handleChange = (checked, number) => {
        console.log(number);
        const {selected} = this.state;
        selected[number-1] = checked;
        this.setState({selected})
    ;}


    //몇개 보여줄지.?
    selectBundle = (flag, numbers) => {

        const {lottoNumbers} = this.state

        for(let i=0; i<(flag + 1) * 5; i++) {

            const lotto = this.selectLotto([], numbers);
            lottoNumbers.push(lotto);
            this.setState({lottoNumbers});
        }

    }

    //Generate 버튼 클릭
    handleButtonOnClick = () => {
        const {selected, lottoNumbers} = this.state
        const numbers = [];
        let selectedNumberCount = 0;

        selected.forEach((s, i) => {
            if(s) {
                selectedNumberCount++;
                numbers.push(i+1)
            }
        })

        if(selectedNumberCount < 7) {
            alert("7개 이상의 번호를 선택해야 합니다.")
            return;
        } else {
            alert("번호를 5개 생성합니다.")
            this.selectBundle(0, numbers)
            // for(let i=0; i<5; i++) {
            //     const lotto = this.selectLotto([], numbers);
            //     lottoNumbers.push(lotto);
            //     this.setState({lottoNumbers});
            // }
        }
    }

    //선택한 번호를 기준으로 생성하는 랜덤 알고리즘
    selectLotto = (lottoNumber, numbers) => {
        if(lottoNumber.length === 7) {
            const temp = lottoNumber.slice(0, 6);
            temp.sort((a,b)=>a-b);
            temp.push(lottoNumber[6]);
            return temp;
        }
        let n = numbers[Math.floor(Math.random() * numbers.length)];
        if(lottoNumber.indexOf(n) < 0) {
            lottoNumber.push(n);
        }
        return this.selectLotto(lottoNumber, numbers);
    }


    render() {
        return (
            <div className="lotto-random-template">
                <LottoRandomHeader />
                <div className="lott-random-main">
                    <LottoRandomSideMenu
                        allCheck={this.allCheck}
                        selected={this.state.selected}
                        allHandleChange={this.allHandleChange}
                        handleChange={this.handleChange}
                        handleButtonOnClick={this.handleButtonOnClick}
                    />
                    <LottoRandomContents
                        lottoNumbers={this.state.lottoNumbers}
                        clearButtonOnClick={this.clearButtonOnClick}
                    />
                </div>
            </div>
        );
    }

}

export default LottoRandomTemplate;