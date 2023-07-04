import * as THREE from  'three';
import { OrbitControls } from '../build/jsm/controls/OrbitControls.js';
import {GLTFLoader} from '../build/jsm/loaders/GLTFLoader.js';
import {initRenderer, 
    initDefaultBasicLight,
    getMaxSize} from "../libs/util/util.js";


let scene, camera, light;

var torreta = null;
//var torreta2 = null;

loadGLBFile1('./assets/torreta/', 'turret', true, 13.0);
//loadGLBFile2('./assets/torreta/', 'turret', true, 13.0);

function loadGLBFile1(modelPath, modelName, visibility, desiredScale)
{
   var loader = new GLTFLoader( );
   loader.load( modelPath + modelName + '.gltf', function ( gltf ) {
      var obj = gltf.scene;
      obj.name = modelName;
      obj.visible = visibility;
      obj.castShadow = true;                          
      obj.traverse( function ( child ) {
         if ( child ) {
            child.castShadow = true;
         }
      });
      obj.traverse( function( node )
      {
         if( node.material ) node.material.side = THREE.DoubleSide;
      });

      var normalizedObj = normalizeAndRescale(obj, desiredScale);
     
      var fixedObj = fixPosition1(normalizedObj);

      torreta = fixedObj;

      verificarObjetoCarregado(torreta, 0);

 
    });
}

// function loadGLBFile2(modelPath, modelName, visibility, desiredScale)
// {
//    var loader = new GLTFLoader( );
//    loader.load( modelPath + modelName + '.gltf', function ( gltf ) {
//       var obj = gltf.scene;
//       obj.name = modelName;
//       obj.visible = visibility;
//       obj.castShadow = true;                          
//       obj.traverse( function ( child ) {
//          if ( child ) {
//             child.castShadow = true;
//          }
//       });
//       obj.traverse( function( node )
//       {
//          if( node.material ) node.material.side = THREE.DoubleSide;
//       });

//       var normalizedObj = normalizeAndRescale(obj, desiredScale);
     
//       var fixedObj = fixPosition2(normalizedObj);

//       torreta2 = fixedObj;

//       verificarObjetoCarregado(torreta2, 1);

 
//     });
// }

function normalizeAndRescale(obj, newScale)
  {
      var scale = getMaxSize(obj); 
      obj.scale.set(newScale * (0.5/scale),
                    newScale * (0.5/scale),
                    newScale * (0.5/scale));
                  
    return obj;
} 

function fixPosition1(obj)
  {

    obj.translateX(0)
    obj.translateY(8);
    obj.translateZ(-2);
    obj.rotateY(THREE.MathUtils.degToRad(90));  
  
     return obj;
  
}

// function fixPosition2(obj)
//   {

//     obj.translateX(18)
//     obj.translateY(8);
//     obj.translateZ(7);
//     obj.rotateY(THREE.MathUtils.degToRad(90));  
  
//     return obj;
  
// }

function verificarObjetoCarregado(objeto, cont) {
    if (objeto !== null && objeto !== undefined) {
        cube.add(objeto);
        if(cont == 1){
            render();
        }

    }
}

scene = new THREE.Scene(); 

var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer = initRenderer();    
   renderer.setClearColor("rgb(30, 30, 42)");

camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 30000);
  camera.position.set(0,13,-100);
  camera.lookAt(camera.position.x, camera.position.y, 50 );

light = initDefaultBasicLight(scene, true); 

let orbit = new OrbitControls( camera, renderer.domElement );

let material;

// Material e Geometria do cubo 
material = new THREE.MeshLambertMaterial();
let cubeGeometry = new THREE.BoxGeometry( 10, 10, 10 );

// Criação dos cubos 
let cube = new THREE.Mesh(cubeGeometry, material);
cube.castShadow = true;
let cube2 = new THREE.Mesh(cubeGeometry, material);
cube2.castShadow = true;
let cube3 = new THREE.Mesh(cubeGeometry, material);
cube3.castShadow = true;
let cube4 = new THREE.Mesh(cubeGeometry, material);
cube4.castShadow = true;
let cube5 = new THREE.Mesh(cubeGeometry, material);
cube5.castShadow = true;
let cube6 = new THREE.Mesh(cubeGeometry, material);
cube6.castShadow = true;
let cube7 = new THREE.Mesh(cubeGeometry, material);
cube7.castShadow = true;
let cube8 = new THREE.Mesh(cubeGeometry, material);
cube8.castShadow = true;
let cube9 = new THREE.Mesh(cubeGeometry, material);
cube9.castShadow = true;
let cube10 = new THREE.Mesh(cubeGeometry, material);
cube10.castShadow = true;

// Textura dos cubos 
var textureLoader = new THREE.TextureLoader();
var texture = textureLoader.load('./assets/CubeTexture.png');
cube.material.map = texture;

//Posição dos cubos 
cube.position.set(-10, -5.0, -40);
cube2.position.set(-10, 10, 0);
cube3.position.set(10 , 0 , 0);
cube5.position.set(20, 0, 0);
cube4.position.set(30, 10, 0);
cube6.position.set(-10, 10, 10);
cube7.position.set(10, 0, 10);
cube8.position.set(20, 0, 10);
cube9.position.set(30, 10, 10);
cube10.position.set(0, 0, 10);


cube.material.transparent = true;

cube.add(cube2);
cube.add(cube3);
cube.add(cube4);
cube.add(cube5);
cube.add(cube6);
cube.add(cube7);
cube.add(cube8);
cube.add(cube9);
cube.add(cube10);

scene.add(cube);

// Criação das novas texturas 
let newCubeGeometry1 = new THREE.BoxGeometry( 2, 2, 2 );
let newCubeGeometry2 = new THREE.BoxGeometry( 4, 4, 4 );

let newSphereGeometry = new THREE.SphereGeometry( 1.5, 32, 16 ); 

let newCube1 = new THREE.Mesh(newCubeGeometry1, material);
newCube1.castShadow = true;
let newCube2 = new THREE.Mesh(newCubeGeometry1, material);
newCube2.castShadow = true;
let newCube3 = new THREE.Mesh(newCubeGeometry2, material);
newCube3.castShadow = true;
let newCube4 = new THREE.Mesh(newCubeGeometry1, material);
newCube4.castShadow = true;
let newCube5 = new THREE.Mesh(newCubeGeometry2, material);
newCube5.castShadow = true;
let newCube6 = new THREE.Mesh(newCubeGeometry2, material);
newCube6.castShadow = true;
let newCube7 = new THREE.Mesh(newCubeGeometry1, material);
newCube7.castShadow = true;
let newCube8 = new THREE.Mesh(newCubeGeometry1, material);
newCube8.castShadow = true;

let newSphere1 = new THREE.Mesh( newSphereGeometry, material); 
newSphere1.castShadow = true;
let newSphere2 = new THREE.Mesh( newSphereGeometry, material); 
newSphere2.castShadow = true;
let newSphere3 = new THREE.Mesh( newSphereGeometry, material); 
newSphere3.castShadow = true;
let newSphere4 = new THREE.Mesh( newSphereGeometry, material); 
newSphere4.castShadow = true;
let newSphere5 = new THREE.Mesh( newSphereGeometry, material); 
newSphere5.castShadow = true;
let newSphere6 = new THREE.Mesh( newSphereGeometry, material); 
newSphere6.castShadow = true;


cube.add(newCube1);
cube.add(newCube2);
cube.add(newCube3);
cube.add(newCube4);
cube.add(newCube5);
cube.add(newCube6);
cube.add(newCube7);
cube.add(newCube8);

cube.add(newSphere1);
cube.add(newSphere2);
cube.add(newSphere3);
cube.add(newSphere4);
cube.add(newSphere5);
cube.add(newSphere6);


// Setando as posições das texturas 
newCube1.position.set(-10,15,0);
newCube2.position.set(-5,13,0);
newCube3.position.set(-5,5,-1);
newCube4.position.set(5,5,0);
newCube5.position.set(12,4.5,-2);
newCube6.position.set(25,5,6);
newCube7.position.set(25,12,-3);
newCube8.position.set(33,14.5,-1);

newSphere1.position.set(-13,14.5,0);
newSphere2.position.set(-9,14.5,7);
newSphere3.position.set(14,4.5,10);
newSphere4.position.set(-5.5,10,10);
newSphere5.position.set(25,13,10);
newSphere6.position.set(30,15,4);

render();

function render()
{
   requestAnimationFrame(render);
   renderer.render(scene, camera);

}





