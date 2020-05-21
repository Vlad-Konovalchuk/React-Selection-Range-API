import React, {Component} from 'react';
import './ControlPanel.css';
import editorActions from "../../constants/editorActions";

class ControlPanel extends Component {
    handleAction = (event) => {
        document.execCommand(event.target.dataset.action, false, null)
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    {editorActions.map(action => (
                        <button key={action}
                                onClick={this.handleAction}
                                className="format-action"
                                type="button"
                                data-action={action.action}
                                title={action.action}
                        >
                            {action.title}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default ControlPanel;
