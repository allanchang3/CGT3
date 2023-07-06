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
let cubeGeometry3 = new THREE.BoxGeometry(window.innerWidth/8, 10, 10);

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

let cube11 = new THREE.Mesh(cubeGeometry, material);
cube11.castShadow = true;
let cube12 = new THREE.Mesh(cubeGeometry, material);
cube12.castShadow = true;
let cube13 = new THREE.Mesh(cubeGeometry, material);
cube13.castShadow = true;
let cube14 = new THREE.Mesh(cubeGeometry, material);
cube14.castShadow = true;
let cube15 = new THREE.Mesh(cubeGeometry, material);
cube15.castShadow = true;
let cube16 = new THREE.Mesh(cubeGeometry, material);
cube16.castShadow = true;
let cube17 = new THREE.Mesh(cubeGeometry, material);
cube17.castShadow = true;
let cube18 = new THREE.Mesh(cubeGeometry, material);
cube18.castShadow = true;

let cube19 = new THREE.Mesh(cubeGeometry, material);
cube19.castShadow = true;
let cube20 = new THREE.Mesh(cubeGeometry, material);
cube20.castShadow = true;
let cube21 = new THREE.Mesh(cubeGeometry, material);
cube21.castShadow = true;
let cube22 = new THREE.Mesh(cubeGeometry, material);
cube22.castShadow = true;
let cube23 = new THREE.Mesh(cubeGeometry, material);
cube23.castShadow = true;
let cube24 = new THREE.Mesh(cubeGeometry, material);
cube24.castShadow = true;
let cube25 = new THREE.Mesh(cubeGeometry, material);
cube25.castShadow = true;
let cube26 = new THREE.Mesh(cubeGeometry, material);
cube26.castShadow = true;

let cube27 = new THREE.Mesh(cubeGeometry3, material);
cube27.castShadow = true;
let cube28 = new THREE.Mesh(cubeGeometry3, material);
cube28.castShadow = true;
let cube29 = new THREE.Mesh(cubeGeometry3, material);
cube29.castShadow = true;
let cube30 = new THREE.Mesh(cubeGeometry3, material);
cube30.castShadow = true;

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

cube11.position.set(-20,10,10);
cube12.position.set(-20, 10, 0);
cube13.position.set(-30 , 10 , 10);
cube15.position.set(-30, 10, 0);
cube14.position.set(40, 10, 0);
cube16.position.set(40, 10, 10);
cube17.position.set(50, 10, 10);
cube18.position.set(50, 10, 0);

cube19.position.set(-40, 10, 10);
cube20.position.set(-40, 10, 0);
cube21.position.set(-50, 10, 10);
cube22.position.set(-50, 10, 0);
cube23.position.set(60,10,0);
cube24.position.set(60,10,10);
cube25.position.set(70,10,10);
cube26.position.set(70,10,0);

cube27.position.set(160, 10, 10);
cube28.position.set(160, 10, 0);
cube29.position.set(-140, 10, 10);
cube30.position.set(-140, 10, 0);

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

cube.add(cube11);
cube.add(cube12);
cube.add(cube13);
cube.add(cube14);
cube.add(cube15);
cube.add(cube16);
cube.add(cube17);
cube.add(cube18);

cube.add(cube19);
cube.add(cube20);
cube.add(cube21);
cube.add(cube22);
cube.add(cube23);
cube.add(cube24);
cube.add(cube25);
cube.add(cube26);

cube.add(cube27);
cube.add(cube28);
cube.add(cube29);
cube.add(cube30);


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

let newCube9 = new THREE.Mesh(newCubeGeometry1, material);
newCube9.castShadow = true;
let newCube10 = new THREE.Mesh(newCubeGeometry1, material);
newCube10.castShadow = true;
let newCube11 = new THREE.Mesh(newCubeGeometry1, material);
newCube11.castShadow = true;
let newCube12 = new THREE.Mesh(newCubeGeometry1, material);
newCube12.castShadow = true;
let newCube13 = new THREE.Mesh(newCubeGeometry2, material);
newCube13.castShadow = true;
let newCube14 = new THREE.Mesh(newCubeGeometry1, material);
newCube14.castShadow = true;
let newCube15 = new THREE.Mesh(newCubeGeometry2, material);
newCube15.castShadow = true;
let newCube16 = new THREE.Mesh(newCubeGeometry2, material);
newCube16.castShadow = true;

let newCube17 = new THREE.Mesh(newCubeGeometry1, material);
newCube17.castShadow = true;
let newCube18 = new THREE.Mesh(newCubeGeometry1, material);
newCube18.castShadow = true;
let newCube19 = new THREE.Mesh(newCubeGeometry2, material);
newCube19.castShadow = true;
let newCube20 = new THREE.Mesh(newCubeGeometry1, material);
newCube20.castShadow = true;
let newCube21 = new THREE.Mesh(newCubeGeometry2, material);
newCube21.castShadow = true;

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

let newSphere7 = new THREE.Mesh( newSphereGeometry, material); 
newSphere7.castShadow = true;
let newSphere8 = new THREE.Mesh( newSphereGeometry, material); 
newSphere8.castShadow = true;
let newSphere9 = new THREE.Mesh( newSphereGeometry, material); 
newSphere9.castShadow = true;
let newSphere10 = new THREE.Mesh( newSphereGeometry, material); 
newSphere10.castShadow = true;
let newSphere11 = new THREE.Mesh( newSphereGeometry, material); 
newSphere11.castShadow = true;
let newSphere12 = new THREE.Mesh( newSphereGeometry, material); 
newSphere12.castShadow = true;


cube.add(newCube1);
cube.add(newCube2);
cube.add(newCube3);
cube.add(newCube4);
cube.add(newCube5);
cube.add(newCube6);
cube.add(newCube7);
cube.add(newCube8);

cube.add(newCube9);
cube.add(newCube10);
cube.add(newCube11);
cube.add(newCube12);
cube.add(newCube13);
cube.add(newCube14);
cube.add(newCube15);
cube.add(newCube16);

cube.add(newCube17);
cube.add(newCube18);
cube.add(newCube19);
cube.add(newCube20);
cube.add(newCube21);

cube.add(newSphere1);
cube.add(newSphere2);
cube.add(newSphere3);
cube.add(newSphere4);
cube.add(newSphere5);
cube.add(newSphere6);

cube.add(newSphere7);
cube.add(newSphere8);
cube.add(newSphere9);
cube.add(newSphere10);
cube.add(newSphere11);
cube.add(newSphere12);


if(x == 1 || x== 7 || x ==14){
   if(x== 1){   
      loadGLBFile1('./assets/torreta/', 'turret', true, 13.0, 1);
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
       var box = new THREE.Box3().setFromObject(objeto);

       var boxMin = box.min;
       var boxMax = box.max;
       
       var boxSize = boxMax.clone().sub(boxMin);
       var boxGeometry = new THREE.BoxGeometry(boxSize.x/4, boxSize.y/4, boxSize.z/4);
       
       var boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
       var boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
       
       
       objeto.add(boxMesh);
   }else{
      if(objeto !== null && objeto !== undefined && flag == 2){
         cube5.add(objeto);
         var box = new THREE.Box3().setFromObject(objeto);

         var boxMin = box.min;
         var boxMax = box.max;
         
         var boxSize = boxMax.clone().sub(boxMin);
         var boxGeometry = new THREE.BoxGeometry(boxSize.x/4, boxSize.y/4, boxSize.z/4);
         
         var boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
         var boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
         
         
         objeto.add(boxMesh);
      }else{
         if(objeto !== null && objeto !== undefined && flag == 3){
            cube3.add(objeto);
            var box = new THREE.Box3().setFromObject(objeto);

            var boxMin = box.min;
            var boxMax = box.max;
            
            var boxSize = boxMax.clone().sub(boxMin);
            var boxGeometry = new THREE.BoxGeometry(boxSize.x/4, boxSize.y/4, boxSize.z/4);
            
            var boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
            var boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
      
            
            objeto.add(boxMesh);
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

newCube9.position.set(50,15,0);
newCube10.position.set(45,15,5);
newCube11.position.set(59,15,9);
newCube12.position.set(55,16,12);
newCube13.position.set(-25,14,10);
newCube14.position.set(-30,15,6);
newCube15.position.set(-20,15,2);
newCube16.position.set(-33,15,2);

newCube17.position.set(65,15,0);
newCube18.position.set(70,15,8);
newCube19.position.set(76,15,2);
newCube20.position.set(80,15,0);
newCube21.position.set(90,15,3);

newSphere1.position.set(-13,14.5,0);
newSphere2.position.set(-9,14.5,7);
newSphere3.position.set(14,4.5,10);
newSphere4.position.set(-5.5,10,10);
newSphere5.position.set(25,13,10);
newSphere6.position.set(30,15,4);

newSphere7.position.set(33,15,10);
newSphere8.position.set(48,15,5);
newSphere9.position.set(52,15,9);
newSphere10.position.set(-25,15,5);
newSphere11.position.set(-19,15,8);
newSphere12.position.set(-30,15,10);



return cube;
}

