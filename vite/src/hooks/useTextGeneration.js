import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useTypingEffect from './typingEffect';

import responseModule from '../data/responseModule'

const useTextGeneration = () => {
  const selectedQuestionReducer = useSelector(store => store.selectedQuestionReducer);

  //Create a copy of old viewStateReducer value so that I can compare it 
  //to the new ViewStateReducer value: So then I can manually make the questionsVisible
  //turn off, allowing the new lines of text to be generated.
  const viewStateReducer = useSelector(store => store.viewStateReducer);
  const [viewStateCopy, setViewStateCopy] = useState(viewStateReducer)


  // UseState for toggling talking options:
  const [dialogSequence, setDialogSequence] = useState(responseModule(selectedQuestionReducer).dialogSequence);
  const [collectionIndex, setCollectionIndex] = useState(0);
  const [isFollowUpQuestion, setIsFollowUpQuestion] = useState(responseModule(selectedQuestionReducer).isFollowUpQuestion);

  // Continue text indicator and click blocker useStates:
  const [questionsVisible, setQuestionsVisible] = useState(false);
  const [continueIndicatorVisible, setContinueIndicatorVisible] = useState(false);
  const [endTextIndicatorVisible, setEndTextIndicatorVisible] = useState(false);

  // Text parameters:
  const defaultTextSpeedValue = 8;
  const spedUpTextSpeedValue = 0.00001;
  const [textSpeed, setTextSpeed] = useState(defaultTextSpeedValue);

  const text = useTypingEffect(dialogSequence, collectionIndex, textSpeed, setContinueIndicatorVisible, setQuestionsVisible, setEndTextIndicatorVisible, isFollowUpQuestion);

  // Whenever there is a change in the selectedQuestionReducer, the setDialogSequence will get the new list of text
  // to be generated based on the selectedQuestionReducer
  useEffect(() => {

    //If the viewStateReducer is differnt from the viewStateCopy
    //that means the NavBar buttons were pressed. And thus the setQuestionsVisible useState
    //needs to be set to false. In order for the next if statement to run,
    //which basically allows for the text to reset itself with the new sequence of dialog.
    if (viewStateReducer != viewStateCopy) {
      setQuestionsVisible(false);
    }

    if (!questionsVisible) {
      console.log('QuestionReducer has been changed', selectedQuestionReducer);
      setDialogSequence(responseModule(selectedQuestionReducer).dialogSequence);
      setIsFollowUpQuestion(responseModule(selectedQuestionReducer).isFollowUpQuestion);
      setEndTextIndicatorVisible(false);
      setCollectionIndex(0);
      setTextSpeed(defaultTextSpeedValue);
    }
  }, [selectedQuestionReducer, questionsVisible, viewStateReducer]);

  // This function is used to continue the text to the next set of lines to be generated after the user has finished reading.
  // If the user clicks the div while the text is still being generated, when the indicator isn't showing,
  // it will increase the speed at which the text will be generated.
  const nextText = () => {
    if (continueIndicatorVisible) {
      if (collectionIndex !== dialogSequence.length - 1) {
        setCollectionIndex(collectionIndex + 1);
      }
      setContinueIndicatorVisible(false);
      setTextSpeed(defaultTextSpeedValue);
    } else {
      setTextSpeed(spedUpTextSpeedValue);
    }
  };

  return { text, continueIndicatorVisible, questionsVisible, setQuestionsVisible, endTextIndicatorVisible, setEndTextIndicatorVisible, nextText };
};

export default useTextGeneration;
