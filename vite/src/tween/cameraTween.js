import * as TWEEN from '@tweenjs/tween.js'

//The 'func' variable should be the useIsTweenFinished function that was passed in from the main component calling CameraTween.js
export default function cameraTween(camera, target, selectedTarget, func) {

  //func is basically calling a dispatch to the isTweenFinishedReducer saying that a tween is in action
  //hence why it is passing in the 'false' boolean value.
  func(false);

  //Constants
  const zoomInSpeed = 2000;

  const tweenMe = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
      .to({ x: -1.4, y: 4, z: 0.15 }, zoomInSpeed)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: -1.4, y: 2.5, z: -4 }, zoomInSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);


    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(() => { func(true) });
  }


  const tweenBooks = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
      .to({ x: -2.5, y: 5, z: -.83 }, zoomInSpeed)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: -6, y: 1.5, z: -.83 }, zoomInSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);


    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(() => { func(true) });
  }


  const tweenTrophies = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
      .to({ x: -2.5, y: 5.5, z: -.83 }, zoomInSpeed)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: -6, y: 4, z: -.83 }, zoomInSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);


    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(() => { func(true) });
  }



  const tweenDesk = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
      .to({ x: 0, y: 4.5, z: 2.76 }, zoomInSpeed)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: -4, y: 4, z: 2.76 }, zoomInSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(() => { func(true) });
  }



  const tweenLaptop = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
      .to({ x: -3, y: 3.55, z: 2.765 }, zoomInSpeed)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: -3.5, y: 3.555, z: 2.765 }, zoomInSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(() => { func(true) });
  }

  const tweenZombieHand = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
      .to({ x: -3, y: 8, z: 2.765 }, zoomInSpeed)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: -3.5, y: 3.555, z: 2.765 }, zoomInSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(() => { func(true) });
  }

  const tweenMrFrogPhoto = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
      .to({ x: -3, y: 8, z: 2.765 }, zoomInSpeed)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: -3.5, y: 3.555, z: 2.765 }, zoomInSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(() => { func(true) });
  }

  const tweenShotgun = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
      .to({ x: -3, y: 4, z: 2.765 }, zoomInSpeed)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: -3.5, y: 4, z: 2.765 }, zoomInSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(() => { func(true) });
  }


  const tweenSpeakers = () => {

    const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
      .to({ x: 1.1, y: 4, z: -1.5 }, zoomInSpeed)
      .onUpdate((coords) => {
        camera.position.x = coords.x
        camera.position.y = coords.y
        camera.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);

    const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
      .to({ x: 1.1, y: 4, z: -4.5 }, zoomInSpeed)
      .onUpdate((coords) => {
        target.position.x = coords.x
        target.position.y = coords.y
        target.position.z = coords.z
      })
      .easing(TWEEN.Easing.Exponential.InOut)
      .repeat(0)
      .delay(10);


    tweenCamera.start();
    tweenTarget.start();
    tweenCamera.onComplete(() => { func(true) });
  }


  // const tweenBack = () => {

  //   const tweenCamera = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
  //     .to({ x: 6, y: 5, z: 6 }, zoomOutSpeed)
  //     .onUpdate((coords) => {
  //       camera.position.x = coords.x
  //       camera.position.y = coords.y
  //       camera.position.z = coords.z
  //     })
  //     .easing(TWEEN.Easing.Exponential.InOut)
  //     .repeat(0)
  //     .delay(10);

  //   const tweenTarget = new TWEEN.Tween({ x: target.position.x, y: target.position.y, z: target.position.z })
  //     .to({ x: 0, y: 1, z: 0 }, zoomOutSpeed)
  //     .onUpdate((coords) => {
  //       target.position.x = coords.x
  //       target.position.y = coords.y
  //       target.position.z = coords.z
  //     })
  //     .easing(TWEEN.Easing.Exponential.InOut)
  //     .repeat(0)
  //     .delay(10);


  //   tweenCamera.start();
  //   tweenTarget.start();
  //   tweenCamera.onComplete(() => { func(true) });
  // }



  switch (selectedTarget) {
    case 'me':
      return tweenMe();
      break;
    case 'books':
      return tweenBooks();
      break;
    case 'trophies':
      return tweenTrophies();
      break;
    case 'desk':
      return tweenDesk();
      break;
    case 'laptop':
      return tweenLaptop();
      break;
    case 'zombieHand':
      return tweenZombieHand();
      break;
    case 'mrFrogPhoto':
      return tweenMrFrogPhoto();
      break;
    case 'shotgun':
      return tweenShotgun();
      break;
    case 'speakers':
      return tweenSpeakers();
      break;
    default:
      return tweenMe();
      break;
  }
}