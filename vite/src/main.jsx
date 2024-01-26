import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import { easing } from 'maath'
import * as TWEEN from '@tweenjs/tween.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three';
//Import orbit controls to make the scene more interactive:
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { render } from 'react-dom'


//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-1.5, 4, 0);

//Scene - like a containter that holds all objects, cameras and lights
const scene = new THREE.Scene();

//For if I need it later
// const texture_ft = new THREE.TextureLoader().load('skyBox_ft.png');
// const texture_bk = new THREE.TextureLoader().load('skyBox_bk.png');
// const texture_up = new THREE.TextureLoader().load('skyBox_up.png');
// const texture_dn = new THREE.TextureLoader().load('skyBox_dn.png');
// const texture_rt = new THREE.TextureLoader().load('skyBox_rt.png');
// const texture_lf = new THREE.TextureLoader().load('skyBox_lf.png');

//Load background: //&************************************************************************************************************************************************************
// const backgroundTexture = new THREE.TextureLoader().load('skyBox_bk.png', 'skyBox_ft.png', 'skyBox_dn.png', 'skyBox_lf.png', 'skyBox_rt.png', 'skyBox_up.png',);
// scene.background = backgroundTexture;
const selectedImage = 'snowymountains.avif';
const materialArray = [];
const texture_ft = new THREE.TextureLoader().load(selectedImage);
const texture_bk = new THREE.TextureLoader().load(selectedImage);
const texture_up = new THREE.TextureLoader().load(selectedImage);
const texture_dn = new THREE.TextureLoader().load(selectedImage);
const texture_rt = new THREE.TextureLoader().load(selectedImage);
const texture_lf = new THREE.TextureLoader().load(selectedImage);

materialArray.push(new THREE.MeshBasicMaterial({map:texture_ft}));
materialArray.push(new THREE.MeshBasicMaterial({map:texture_bk}));
materialArray.push(new THREE.MeshBasicMaterial({map:texture_up}));
materialArray.push(new THREE.MeshBasicMaterial({map:texture_dn}));
materialArray.push(new THREE.MeshBasicMaterial({map:texture_rt}));
materialArray.push(new THREE.MeshBasicMaterial({map:texture_lf}));

for (let i=0; i<6; i++) {
  materialArray[i].side = THREE.BackSide;
}

let skyboxGeo = new THREE.BoxGeometry(400,400,500)
const skybox = new THREE.Mesh(skyboxGeo, materialArray);

skybox.position.set(0,12,0);

scene.add(skybox);
scene.backgroundIntensity = 0;


// const backgroundTexture = new THREE.TextureLoader().load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT682qf4vqnxcw_P0luBZR4XnlrOUHnltmt0A&usqp=CAU');
// scene.background = backgroundTexture;
// scene.backgroundIntensity = 0.5;
// scene.backgroundBlurriness = 0.5;
// const loader = new THREE.CubeTextureLoader();
// const texture = loader.load([
//   '../public/skyBoxXPos.png',
//   '../public/skyBoxXNeg.png',
//   '../public/skyBoxYPos.png',
//   '../public/skyBoxYNeg.png',
//   '../public/skyBoxZPos.png',
//   '../public/skyBoxZNeg.png',
// ]);
// const fileNames = ['../public/skyBox_bk.png', '../public/skyBox_dn.png', '../public/skyBox_ft.png', '../public/skyBox_lf.png', '../public/skyBox_rt.png', '../public/skyBox_up.png',];

// function createPathStrings(filename) {
//   const basePath = "../public/";
//   const baseFilename = basePath + filename;
//   const fileType = ".png";
//   const sides = ["ft", "bk", "up", "dn", "rt", "lf"];
//   const pathStings = sides.map(side => {
//     return baseFilename + "_" + side + fileType;
//   });

//   return pathStings;
// }


// function createMaterialArray(filename) {
//   const skyboxImagepaths = createPathStrings(filename);
//   const materialArray = skyboxImagepaths.map(image => {
//     let texture = new THREE.TextureLoader().load(image);

//     return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide }); // <---
//   });
//   return materialArray;
// }

// const skyboxImage = 'skyBox';

// function init() {

//   const materialArray = createMaterialArray(skyboxImage);
//   const skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
//   const skybox = new THREE.Mesh(skyboxGeo, materialArray);
//   scene.add(skybox);
// }





// scene.background = texture;


//Renderer
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
  antialias: true,

});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.shadowMap.enabled = true;


renderer.render(scene, camera);

// const axesHelper = new THREE.AxesHelper(8);
// scene.add(axesHelper)

//Target: 
const target = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshStandardMaterial({ color: 0xFF6347, wireframe: false }).transparent = false)
target.position.set(-1.5, 3, -5)
scene.add(target)


//Scene Lights:
const plIntensity = 1

const spl1 = new THREE.PointLight(0xffffff);
const spl1Helper = new THREE.PointLightHelper(spl1, 1)
spl1.position.set(2.43, 5.6, 2.76)
spl1.intensity = plIntensity;
spl1.distance = 5;
spl1.decay = 2;
spl1.castShadow = true;
spl1Helper.position.copy(spl1.position)

const pl2 = new THREE.PointLight(0xffffff);
const pl2Helper = new THREE.PointLightHelper(pl2, 1)
pl2.position.set(-2.43, 5.6, -2.76)
pl2.intensity = plIntensity;
pl2.distance = 5;
pl2.decay = 2;
pl2.castShadow = true;
pl2Helper.position.copy(pl2.position)

const pl3 = new THREE.PointLight(0xffffff);
const pl3Helper = new THREE.PointLightHelper(pl3, 1)
pl3.position.set(2.43, 5.6, -2.76)
pl3.intensity = plIntensity;
pl3.distance = 5;
pl3.decay = 2;
pl3.castShadow = true;
pl3Helper.position.copy(pl3.position)

const pl4 = new THREE.PointLight(0xffffff);
const pl4Helper = new THREE.PointLightHelper(pl4, 1)
pl4.position.set(-2.43, 5.56, 2.76)
pl4.intensity = plIntensity;
pl4.distance = 5;
pl4.decay = 2;
pl4.castShadow = true;
pl4Helper.position.copy(pl4.position)



const ambientLight = new THREE.AmbientLight(0xffffff, 0.02);


const hemisphereLight = new THREE.HemisphereLight(0xFFFFED, 0x004987, 0.5);

const light = new THREE.DirectionalLight(0xFFFFFF, 2);
const helper = new THREE.DirectionalLightHelper(light, 5);
light.position.set(0, 4, 0);
light.target.position.set(100, 50, 100);
light.castShadow = true;
light.shadow.bias = 0.01;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
light.shadow.camera.near = 1.0;
light.shadow.camera.far = 500;
light.shadow.camera.left = 200;
light.shadow.camera.right = -200;
light.shadow.camera.top = 200;
light.shadow.camera.bottom = 200;
helper.light


//Add the light to the scene
scene.add(light, ambientLight, hemisphereLight, spl1, pl2, pl3, pl4);

//shadows
// const frustrumSize = 80;
// light.shadow.camera = new THREE.OrthographicCamera(
//   -frustrumSize / 2,
//   frustrumSize / 2,
//   frustrumSize / 2,
//   -frustrumSize / 2,
//   1,
//   80
// )

// light.shadow.mapSize.x = 2048;
// light.shadow.mapSize.y = 2048;

// const pars = {
//   minFilter: THREE.NearestFilter,
//   magFilter: THREE.NearestFilter,
//   format: THREE.RGBAFormat
// };

// light.shadow.map = new THREE.WebGLRenderTarget(light.shadow.mapSize.x, this.light.shadow.mapSize.y, pars);

// // Same position as LIGHT position.
// light.shadow.camera.position.copy(light.position);
// light.shadow.camera.lookAt(scene.position);
// scene.add(light.shadow.camera);



//Light helper shows where the light is and its position:
// const lightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(lightHelper);
//Grid helper creates a 2D grid:
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper)


//Room Model:
const gltfLoader = new GLTFLoader();
gltfLoader.load('/hengsRoomModel.gltf', (gltfscene) => {

  scene.add(gltfscene.scene);
  console.log("gltfscene", scene.getObjectByName("Scene"));
  //Load in indivdual meshes from the gltfscene.scene and add them as properties
  //to the global window object, to make the meshes from the scene, global
  //variables as well.
  window.blueBook = scene.getObjectByName("Scene").getObjectByName("blueBook");
  window.greenBook = scene.getObjectByName("Scene").getObjectByName("greenBook");
  window.redBook = scene.getObjectByName("Scene").getObjectByName("redBook");
  window.yellowBook = scene.getObjectByName("Scene").getObjectByName("yellowBook");
  window.orangeBook = scene.getObjectByName("Scene").getObjectByName("orangeBook");
  window.purpleBook = scene.getObjectByName("Scene").getObjectByName("purpleBook");
  window.brownBook = scene.getObjectByName("Scene").getObjectByName("brownBook");
  window.blackBook = scene.getObjectByName("Scene").getObjectByName("blackBook");
  window.limeGreenBook = scene.getObjectByName("Scene").getObjectByName("limeGreenBook");
  window.magentaBook = scene.getObjectByName("Scene").getObjectByName("magentaBook");
  window.pinkBook = scene.getObjectByName("Scene").getObjectByName("pinkBook");
  window.cyanBook = scene.getObjectByName("Scene").getObjectByName("cyanBook");

  window.project1 = scene.getObjectByName("Scene").getObjectByName("project1");
  window.project2 = scene.getObjectByName("Scene").getObjectByName("project2");
  window.project3 = scene.getObjectByName("Scene").getObjectByName("project3");
  window.project4 = scene.getObjectByName("Scene").getObjectByName("project4");
  window.project5 = scene.getObjectByName("Scene").getObjectByName("project5");

  //Add ZombieHandActive and ZombieHandInactive models to the window object
  window.zombieHandActive = scene.getObjectByName("Scene").getObjectByName("ZombieHandActive");
  window.zombieHandUnactive = scene.getObjectByName("Scene").getObjectByName("ZombieHandUnactive");

  gltfscene.scene.position.set(0, 1, 0)
  // gltfscene.scene.castShadow.valueOf(5)

});



//OrbitControls: This listens to DOM events on the mouse and positions the camera accordingly:
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
// controls.dampingFactor = 0.05;
controls.enabled = false;


//ensure tween is running
const animate = (t) => {
  controls.update();
  TWEEN.update(t);
  requestAnimationFrame(animate);
  camera.lookAt(target.position);
  renderer.render(scene, camera);
  // scene.getObjectByName("Scene").getObjectByName("Cube042").position.set(0,0,0);
  // console.log("window var", window.globalVariable);

}
animate();


////////////////////
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App target={target} camera={camera} scene={scene} />
    </Provider>
  </React.StrictMode>,
)
