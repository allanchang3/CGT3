import * as THREE from  'three';
import {GLTFLoader} from '../build/jsm/loaders/GLTFLoader.js';
import {initRenderer, 
   initDefaultBasicLight,
   getMaxSize} from "../libs/util/util.js";



export default function planos(x){

let material;
var torreta = null;
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


if(x == 1 || x== 7 || x ==14){
   if(x== 1){   
      loadGLBFile1('./assets/torreta/', 'turret', true, 13.0, 1);
      console.log("testando");
   }else{
      if(x == 7){
         loadGLBFile1('./assets/torreta/', 'turret', true, 13.0, 2);
      }else{
         loadGLBFile1('./assets/torreta/', 'turret', true, 13.0, 3);
      }
   }
}

function loadGLBFile1(modelPath, modelName, visibility, desiredScale, flag)
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

      verificarObjetoCarregado(torreta, flag);

 
    });
}

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

function verificarObjetoCarregado(objeto, flag) {
   if (objeto !== null && objeto !== undefined && flag == 1) {
       cube.add(objeto);
   }else{
      if(objeto !== null && objeto !== undefined && flag == 2){
         cube5.add(objeto);
      }else{
         if(objeto !== null && objeto !== undefined && flag == 3){
            cube3.add(objeto);
         }
      }
   }
}



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


return cube;
}

