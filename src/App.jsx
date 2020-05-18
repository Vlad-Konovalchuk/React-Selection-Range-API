import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./components/control-panel/ControlPanel";
import FileZone from "./components/file-zone/FileZone";
import getMockText from './text.service';
import SynonymsAutocompleteProvider from "./components/SynonymsAutocomplete/SynonymsAutocomplete";

class App extends Component {
    getText() {
        getMockText().then(function (result) {
            console.log(result);
        });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <SynonymsAutocompleteProvider>
                        <>
                            <ControlPanel/>
                            <FileZone/>
                        </>
                    </SynonymsAutocompleteProvider>
                </main>
            </div>
        );
    }
}

export default App;
