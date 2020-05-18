import React, {Component} from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    handleAction = (event) => {
        document.execCommand(event.target.dataset.action, false, null)
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button onClick={this.handleAction} className="format-action" type="button" data-action="increaseFontSize">
                        F+</button>
                    <button onClick={this.handleAction} className="format-action" type="button" data-action="bold">
                        <strong>B</strong></button>
                    <button onClick={this.handleAction} className="format-action" type="button" data-action="italic">
                        <i>I</i></button>
                    <button onClick={this.handleAction} className="format-action" type="button" data-action="underline">
                        <u>U</u></button>
                    <button onClick={this.handleAction} className="format-action" type="button"
                            data-action="justifyleft">Left
                    </button>
                    <button onClick={this.handleAction} className="format-action" type="button"
                            data-action="justifycenter">Left
                    </button>
                    <button onClick={this.handleAction} className="format-action" type="button"
                            data-action="strike">
                        <del>S</del>
                    </button>
                    <button onClick={this.handleAction} className="format-action" type="button"
                            data-action="superscript">
                        X<sup>2</sup>
                    </button>
                    <button onClick={this.handleAction} className="format-action" type="button"
                            data-action="subscript">
                        X<sub>2</sub>
                    </button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
