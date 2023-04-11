import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConfirming: false
        };
    }

    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        const { isConfirming } = this.state;
        const { onConfirm, children } = this.props;

        return (
            <button
             onClick = {this.handleConfirm}
             disabled = {this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;