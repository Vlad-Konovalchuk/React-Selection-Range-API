import React, {useState, useEffect} from "react";
import axios from 'axios'
import Api from "../../utils/api";
import helpers from "../../utils/helpers";

export const SynonymsAutocompleteContext = React.createContext({});


const SynonymsAutocompleteProvider = ({children}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getSynonyms = async (value) => {
        setLoading(true)
        const newSynonyms = await Api.get('/', {params: {rel_syn: value}});
        (!helpers.isNil(newSynonyms) && !!newSynonyms.length) && setData({
            list: newSynonyms,
            counter: newSynonyms.length
        })
        setLoading(false)
    }

    return (
        <SynonymsAutocompleteContext.Provider value={{loading, store: data, fetchSynonyms: getSynonyms}}>
            {children}
        </SynonymsAutocompleteContext.Provider>
    )
}

export default SynonymsAutocompleteProvider;
