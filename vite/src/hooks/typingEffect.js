import React, { useState, useEffect, useRef } from 'react'
// import responseModule from '../components/FocusedInScreen/FocusViews/modules/responseModule';

export default function useTypingEffect(dialogSequence, collectionIndex, textSpeed, setContinueIndicatorVisible, setQuestionsVisable, setEndTextIndicatorVisible, isFollowUpQuestion) {

    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            //Increment position in string
            setCurrentPosition((value) => value + 1)
            currentPositionRef.current += 1;

            //When the incrementaion is larger that the lenght of the string. Stop looping.
            if (currentPositionRef.current > dialogSequence[collectionIndex].length) {

                clearInterval(intervalId);

                //If all the strings in the dialogSequence array have been itterated through,
                //set the questions visible.
                //Otherwise, set the indicator visible, which will tell the users that 
                //they can click to continue onto the next string of dialog that is held in the
                //dialogSequence array.
                if (collectionIndex == dialogSequence.length - 1) {

                    setContinueIndicatorVisible(false);
                    //If the followUpQuestion bool is true, set the questions visible,
                    //otherwise set EndTextIndicator to true.
                    if (isFollowUpQuestion == true) {
                        setQuestionsVisable(true);
                    } else {
                        setEndTextIndicatorVisible(true)
                    }

                } else {
                    setContinueIndicatorVisible(true);
                }
            }
        }, textSpeed);

        return () => {
            clearInterval(intervalId);
            setCurrentPosition(0);
            currentPositionRef.current = 0;
        }

    }, [textSpeed, dialogSequence[collectionIndex]], collectionIndex);

    return dialogSequence[collectionIndex].substring(0, currentPosition);
}