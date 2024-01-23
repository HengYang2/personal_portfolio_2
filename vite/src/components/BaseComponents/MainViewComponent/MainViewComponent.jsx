
//Import styles:
import { useSelector } from "react-redux";
import styles from "../../../styles/styles"

//Import components:
import DialogBox from '../../DialogComponents/DialogBox/DialogBox'

export default function MainViewComponent(props) {
    //styles
    const mainViewStyles = styles().mainViewStyles;
    const interactiveWindowStyles = styles().interactiveWindowStyles;
    const dialogWindowStyles = styles().dialogWindowStyles;

    //Use selector to get the current state of viewStateReducer:
    const viewStateReducer = useSelector(store => store.viewStateReducer)

    //Function for rendering invisible interactive divs: for example the interactable books and trophies:

    //Function to toggle if the dialogWindow div should be opened or not
    //If viewState reducer is equal to a certain '' then don't render it:
    function conditionalRenderDialogWindow() {
        if (viewStateReducer == '') {
            return <></>
        } else {
            return (<div style={dialogWindowStyles}>
                <DialogBox/>
            </div>)
        }
    }


    return (
        <div style={mainViewStyles}>
            <div style={interactiveWindowStyles}>

            </div>
            {conditionalRenderDialogWindow()}
        </div>
    )
}
