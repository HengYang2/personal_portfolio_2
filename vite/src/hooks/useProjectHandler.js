
import projectModalInfo from "../data/projectModalInfo";

//Inject the data from the adjacent projects when the < > buttons are pressed:
export default function useProjectHandler(direction, projectNumber, setProjectNumber, setModalInformation) {

    //projectInfoIndex:
    const projectInfoIndex = ["PROJECT0", "PROJECT1", "PROJECT2", "PROJECT3", "PROJECT4"];

    let newNumber = projectNumber;

    if (direction == 'forward') {
        //Increment the projectNumber by 1
        newNumber = newNumber + 1;

        //If newNumber is greater than the number of items there are -1, 
        //then reset it to 0:
        if (newNumber > 4) {
            newNumber = 0;
        } else { }

    } else {

        //Decrement the projectNumber by 1
        newNumber = newNumber - 1;

        //If newNumber is negative then reset it to 4:
        if (newNumber < 0) {
            newNumber = 4;
        } else { }

    }

    //Update the projectNumber useState:
    setProjectNumber(newNumber)

    //Update the modalInformation useState using the projectInfoIndex and the new projectNumber
    setModalInformation(projectModalInfo(projectInfoIndex[newNumber]))

    return
}
