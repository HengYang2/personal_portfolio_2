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
camera.position.set(15, 11, 15);

//Scene - like a containter that holds all objects, cameras and lights
const scene = new THREE.Scene();

//Load background:
// const backgroundTexture = new THREE.TextureLoader().load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT682qf4vqnxcw_P0luBZR4XnlrOUHnltmt0A&usqp=CAU');
// scene.background = backgroundTexture;
// scene.backgroundIntensity = 0.5;
// scene.backgroundBlurriness = 0.5;
const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
  '../public/freeSkyBox.jpg',
  '../public/freeSkyBox.jpg',
  '../public/freeSkyBox.jpg',
  '../public/freeSkyBox.jpg',
  '../public/freeSkyBox.jpg',
  '../public/freeSkyBox.jpg',
]);

scene.background = texture;


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
target.position.set(0, 2, 0)
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
light.target.position.set(100,50,100);
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
scene.add(light, ambientLight, hemisphereLight, spl1,   pl2,  pl3,  pl4  );

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
gltfLoader.load('../public/bedroomMODIFIED2.gltf', (gltfscene) => {

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

  gltfscene.scene.position.set(0, 1, 0)
  // gltfscene.scene.castShadow.valueOf(5)

});



//OrbitControls: This listens to DOM events on the mouse and positions the camera accordingly:
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
// controls.dampingFactor = 0.05;


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
