import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useTypingEffect from './typingEffect';

import responseModule from '../data/responseModule';

const useTextGeneration = () => {
  const selectedQuestionReducer = useSelector(store => store.selectedQuestionReducer);

  // UseState for toggling talking options:
  const [questionsVisible, setQuestionsVisible] = useState(false);
  const [textCollection, setTextCollection] = useState(responseModule(selectedQuestionReducer));
  const [collectionIndex, setCollectionIndex] = useState(0);

  // Continue text indicator and click blocker useStates:
  const [indicatorVisible, setIndicatorVisible] = useState(false);
  const [clickBlockerDiv, setClickBlockerDiv] = useState(false);

  // Text parameters:
  const defaultTextSpeedValue = 25;
  const spedUpTextSpeedValue = 0.0005;
  const [textSpeed, setTextSpeed] = useState(defaultTextSpeedValue);

  const text = useTypingEffect(textCollection, collectionIndex, textSpeed, setIndicatorVisible, setQuestionsVisible, setClickBlockerDiv);

  // Whenever there is a change in the selectedQuestionReducer, the setTextCollection will get the new list of text
  // to be generated based on the selectedQuestionReducer
  useEffect(() => {
    if (!questionsVisible) {
      setTextCollection(responseModule(selectedQuestionReducer));
      setCollectionIndex(0);
      setTextSpeed(defaultTextSpeedValue);
    }
  }, [selectedQuestionReducer, questionsVisible]);

  // This function is used to continue the text to the next set of lines to be generated after the user has finished reading.
  // If the user clicks the div while the text is still being generated, when the indicator isn't showing,
  // it will increase the speed at which the text will be generated.
  const nextText = () => {
    if (indicatorVisible) {
      if (collectionIndex !== textCollection.length - 1) {
        setCollectionIndex(collectionIndex + 1);
      }
      setIndicatorVisible(false);
      setTextSpeed(defaultTextSpeedValue);
    } else {
      setTextSpeed(spedUpTextSpeedValue);
    }
  };

  return { text, indicatorVisible, questionsVisible, setQuestionsVisible, nextText };
};

export default useTextGeneration;
