import {useState, useEffect} from 'react';
import debounce from 'lodash/debounce'

export default (el) => {
    const [selectionValue, setSelectionValue] = useState(null);
    useEffect(() => {
        document.addEventListener('selectionchange', debounce(setupSelectionListener, 1000))
        return () =>
            document.removeEventListener('scroll', setupSelectionListener);
    }, []);
    const setupSelectionListener = () => {
        const selection = document.getSelection();
        if (selection.toString().length <= 3) {
            setSelectionValue(null)
            return
        }
        ;
        console.log('ALEO')
        const range = selection.getRangeAt(0)
        window.aleo = selection
        setSelectionValue({
            value: selection.toString(),
            position: range.getBoundingClientRect()
        })
    }
    return [selectionValue];
}
