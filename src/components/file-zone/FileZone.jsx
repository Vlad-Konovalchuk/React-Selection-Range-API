import React, {useContext, useEffect, useMemo, useState} from 'react';
import './FileZone.css';
import useTextSelection from "../../customHooks/useTextSelection";
import {SynonymsAutocompleteContext} from "../SynonymsAutocomplete/SynonymsAutocomplete";
import ToolTip from "../shared/TollTip/ToolTip";
import ModalComponent from "../shared/ModalComponent/ModalComponent";
import SynonymsList from "../shared/SynonymsList/SynonymsList";
import helpers from "../../utils/helpers";

const FileZone = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [selectionValue] = useTextSelection()

    const synonyms = useContext(SynonymsAutocompleteContext)

    useEffect(() => {
        if (selectionValue) {
            synonyms.fetchSynonyms(selectionValue.value)
        }
    }, [selectionValue])

    const isTooltipOpen = useMemo(() => {
        return !!selectionValue
    }, [selectionValue])

    const getStyles = () => {
        return ({
            position: 'absolute',
            left: selectionValue.position.x,
            top: selectionValue.position.y + 20
        })
    }

    const toggleModal = () => {
        setIsModalOpen(prev => !prev)
    }
    return (
        <div className="editor">
            <div className="editor__content" contentEditable={true}/>
            {
                (isTooltipOpen && synonyms.store) && (
                    <ToolTip
                        styles={getStyles()}
                        counter={synonyms.store.counter}
                        handleModalOpen={toggleModal}
                    />
                )
            }
            <ModalComponent
                modalIsOpen={isModalOpen}
                closeModal={toggleModal}
            >
                <p>{selectionValue && selectionValue.value}</p>
            </ModalComponent>
        </div>
    );

}

export default FileZone;
