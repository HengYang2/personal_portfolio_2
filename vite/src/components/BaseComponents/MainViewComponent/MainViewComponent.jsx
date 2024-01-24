import { useEffect, useState } from "react";

//Import styles:
import { useSelector } from "react-redux";
import styles from "../../../styles/styles"

//Import components:
import DialogBox from '../../DialogComponents/DialogBox/DialogBox'
import TechStackView from "../../ViewComponents/TechStackView/TechStackView";
import ProjectView from "../../ViewComponents/ProjectView/ProjectView";

export default function MainViewComponent(props) {
    //styles
    const mainContainerViewStyles = styles().mainContainerViewStyles;
    const interactiveWindowStyles = styles().interactiveWindowStyles;
    const dialogWindowStyles = styles().dialogWindowStyles;

    //Use selector to get the current state of viewStateReducer:
    const viewStateReducer = useSelector(store => store.viewStateReducer)
    const [currentViewState, setCurrentViewState] = useState(viewStateReducer);

    //Function for rendering invisible interactive divs: for example the interactable books and trophies:
    function conditionalRenderInteractiveWindow(state) {
        switch (state) {
            case 'aboutMeView':
                return <></>
            case 'projectView':
                return <ProjectView target={props.target} camera={props.camera} />
            case 'techStackView':
                return <TechStackView target={props.target} camera={props.camera} />
            case 'contactView':
                return
            case 'musicView':
                return
            default:
                return <></>
        }
    }

    //Function to toggle if the dialogWindow div should be opened or not
    //If viewState reducer is equal to a certain '' then don't render it:
    function conditionalRenderDialogWindow(state) {
        if (state == '') {
            return <></>
        } else {
            return (
                <div style={dialogWindowStyles}>
                    <DialogBox />
                </div>
            )
        }
    }


    useEffect(() => {
        setCurrentViewState(viewStateReducer);
    }, [viewStateReducer])





    return (
        <div style={mainContainerViewStyles}>
            <div style={interactiveWindowStyles}>
                {conditionalRenderInteractiveWindow(currentViewState)}
            </div>
            {conditionalRenderDialogWindow(viewStateReducer)}
        </div>
    )
}

