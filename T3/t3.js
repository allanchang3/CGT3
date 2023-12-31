//* Imports básicos necessários 
import * as THREE from  'three';
import {GLTFLoader} from '../build/jsm/loaders/GLTFLoader.js';
import {initRenderer, 
        initDefaultBasicLight,
        onWindowResize, 
        getMaxSize} from "../libs/util/util.js";
import plano from "./plano.js";


//* Criação da cena, do render, da câmera e da luz 

let scene, camera, light;

scene = new THREE.Scene(); 

var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer = initRenderer();    
   renderer.setClearColor("rgb(30, 30, 42)");

camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 30000);
  camera.position.set(0,11,-60);
  camera.lookAt(camera.position.x, 10, 30 );

light = initDefaultBasicLight(scene, true); 

//* Funções ligadas ao movimento do mouse e tamanho da tela

window.addEventListener( 'resize', function(){onWindowResize(camera, renderer)}, false );
window.addEventListener('mousemove', onMouseMove);

//* Iluminação
let position = new THREE.Vector2(-15, 15);
let lightColor = "rgb(255, 255, 255)";

const dirLight = new THREE.DirectionalLight(lightColor, 0.8);
    dirLight.position.copy(position);
    dirLight.castShadow = true;
scene.add(dirLight);

light.shadow.mapSize.width = 2048; // default
light.shadow.mapSize.height = 2048; // default
light.shadow.camera.near = -40; // default
light.shadow.camera.far = 400; // default
light.shadow.camera.left = 90; // default
light.shadow.camera.right = -90; // default
light.shadow.camera.bottom = -90; // default
light.shadow.camera.top = 90; // default

//* Skybox

let materialArray = [];
let texture_ft = new THREE.TextureLoader().load( './assets/skybox/kenon_star_ft.jpg');
let texture_bk = new THREE.TextureLoader().load( './assets/skybox/kenon_star_bk.jpg');
let texture_up = new THREE.TextureLoader().load( './assets/skybox/kenon_star_up.jpg');
let texture_dn = new THREE.TextureLoader().load( './assets/skybox/kenon_star_dn.jpg');
let texture_rt = new THREE.TextureLoader().load( './assets/skybox/kenon_star_rt.jpg');
let texture_lf = new THREE.TextureLoader().load( './assets/skybox/kenon_star_lf.jpg');
  
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
   
for (let i = 0; i < 6; i++)
  materialArray[i].side = THREE.BackSide;
   
let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
let skybox = new THREE.Mesh( skyboxGeo, materialArray );
scene.add( skybox );


//* Dinâmica dos planos 

class Queue {
   constructor() {
     this.items = [];
   }
   
   enqueue(element) {
     this.items.push(element);
   }
   
   dequeue() {
     return this.items.shift();
   }
 
   get(i) {
     return this.items[i];
   }
   
 }

const planos = new Queue();
for(let i = 0; i<20; i++){
    let plane = plano(i);
    plane.translateZ((i*20));
    scene.add(plane);
    planos.enqueue(plane);
}


//* Importação do objeto avião e da torreta

var aviao = null;

loadGLBFile('./assets/', 'xwing', true, 14.0 )

function loadGLBFile(modelPath, modelName, visibility, desiredScale)
{
   var loader = new GLTFLoader( );
   loader.load( modelPath + modelName + '.glb', function ( gltf ) {
      var obj = gltf.scene;
      obj.name = modelName;
      obj.visible = visibility;
      obj.traverse( function ( child ) {
         if( child.isMesh ) child.castShadow = true;
         if( child.material ) child.material.side = THREE.DoubleSide;         
      });

      var normalizedObj = normalizeAndRescale(obj, desiredScale);
     
      var fixedObj = fixPosition(normalizedObj);

      aviao = fixedObj;
      verificarObjetoCarregado(aviao);     

    });
}

function normalizeAndRescale(obj, newScale)
  {
    if(obj.name == 'xwing'){
      var scale = getMaxSize(obj); 
      obj.scale.set(newScale * (1.0/scale),
                    newScale * (1.0/scale),
                    newScale * (1.0/scale));
    }
                  
    return obj;
} 

function fixPosition(obj)
  {
    // Fix position of the object over the ground plane
    var box = new THREE.Box3().setFromObject( obj );
    if(box.min.y > 0)
      obj.translateY(-box.min.y);
    else
     obj.translateY(-1*box.min.y);
    
     return obj;
  
}

function verificarObjetoCarregado(objeto) {
    if (objeto !== null && objeto !== undefined) {

          scene.add(objeto);

          var box = new THREE.Box3().setFromObject(objeto);

          var boxMin = box.min;
          var boxMax = box.max;

          var boxSize = boxMax.clone().sub(boxMin);
          var boxGeometry = new THREE.BoxGeometry(boxSize.x/2, boxSize.y/2, boxSize.z/2);

          var boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
          var boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

          objeto.add(boxMesh);
          
          render();
    } 
}


//* Criação do raycaster e sua dinâmica 

let raycaster = new THREE.Raycaster();

raycaster.layers.enable( 0 );        
camera.layers.enable( 0 );

let raycasterplane, planeGeometry, planeMaterial;

planeGeometry = new THREE.PlaneGeometry(20,  15 , 20, 20);
planeMaterial = new THREE.MeshLambertMaterial();
planeMaterial.side = THREE.DoubleSide;
planeMaterial.transparent = true;
planeMaterial.opacity = 0.0;
raycasterplane = new THREE.Mesh(planeGeometry, planeMaterial);
raycasterplane.translateY(11);
scene.add(raycasterplane);

let objects = [raycasterplane];
raycasterplane.material.color.set("green"); 
raycasterplane.layers.set(0); 

//* Criação do target 

const vertices = [
    new THREE.Vector3(-1, 1, 0),
    new THREE.Vector3(1, 1, 0),
    new THREE.Vector3(-1, 1, 0),
    new THREE.Vector3(-0.3, 0.3, 0),
    new THREE.Vector3(-1, 1, 0),
    new THREE.Vector3(-1, -1, 0),
    new THREE.Vector3(-1, -1, 0),
    new THREE.Vector3(-0.3, -0.3, 0),
    new THREE.Vector3(-1, -1, 0),
    new THREE.Vector3(1, -1, 0),
    new THREE.Vector3(1, -1, 0),
    new THREE.Vector3(0.3, -0.3, 0),
    new THREE.Vector3(1, -1, 0),
    new THREE.Vector3(1, 1, 0),
    new THREE.Vector3(1, 1, 0),
    new THREE.Vector3(0.3, 0.3, 0)
 ];

const edges = new THREE.LineSegments(
    new THREE.BufferGeometry().setFromPoints(vertices),
    new THREE.LineBasicMaterial({ color: 0xffffff })
 );
 
const target = new THREE.Group();
target.add(edges);
scene.add(target);
 
target.position.set(0, 4, 0);
target.scale.set(0.5, 0.5, 0.5);
 
target.scale.set(0.7,0.7,0.7);


//* Configuração do lerp do avião

const lerpConfigAviao = {
    destination: new THREE.Vector3(0.0, 0.25, 0.0),
    alpha: 0.05,
    angle: 0.1,
    move: true
}

//* Configuração do lerp da câmera

const lerpConfigCamera = {
    destination: new THREE.Vector3(0.0, 0.25, 0.0),
    alpha: 0.035,
    angle: 0.1,
    move: false
}

//* Definição da função do movimento do mouse e do lerp

function onMouseMove(event) 
{
  if(!pausado){
   target.visible = false;

   let pointer = new THREE.Vector2();
   pointer.x =  (event.clientX / window.innerWidth) * 2 - 1;
   pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;


   raycaster.setFromCamera(pointer, camera);

   let intersects = raycaster.intersectObjects(objects);

   if (intersects.length > 0) 
   {      
      let point = intersects[0].point; 
      target.visible = true;
      target.position.set(point.x, point.y, point.z);

      lerpConfigAviao.move = true;

      lerpConfigAviao.destination = new THREE.Vector3(point.x, point.y, aviao.position.z);
      
   }
  }
};


//* Manipulação do teclado e pause do jogo

let pausado = false;

let visibilidadeDoCursor = false;

document.body.style.cursor = 'none';

var speed = 0; //Velocidade inicial 

document.addEventListener("keydown", (event) => {
  if(event.key === 'Escape'){
    console.log("esc");
    visibilidadeDoCursor = true;
    pausado = true;
    document.body.style.cursor = visibilidadeDoCursor ? 'auto' : 'none';
  }
})

document.addEventListener('mouseup', (event) => {
  if (event.button === 0) {
    document.body.style.cursor = 'none';
    if(!pausado){
        shootBullet();

    } else {
      pausado = false;
    }
  }
});



//* Colisões 

const bulletGeometry = new THREE.SphereGeometry(0.2, 8, 8);
const bulletMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
let bullets = [];


//* Criando a função que realiza o tiro do avião

function shootBullet() {
  if (bullets.length < 20) { 
    const bullet = new THREE.Mesh(bulletGeometry, bulletMaterial);
    let bbBullet = new THREE.Box3().setFromObject(bullet);
    let bbHelper1 = createBBHelper(bbBullet, 'green', bullet);
    bbHelper1.visible = true;
    bullet.position.copy(aviao.position);
    scene.add(bullet);
    bullets.push(bullet);

    const velocidadeBala = 0.008;

    const direcaoBala = new THREE.Vector3();
    direcaoBala.subVectors(target.position, aviao.position);

    function updateBulletPosition() {

      for (let i = 0; i < bullets.length; i++) {
        
        const bullet = bullets[i];
        bullet.position.addScaledVector(direcaoBala, velocidadeBala);

      }
    }

    requestAnimationFrame(updateBulletPosition);

  }
}

function createBBHelper(bb, color, obj)
{
   // Create a bounding box helper
   let helper = new THREE.Box3Helper( bb, color );
   obj.add( helper );
   return helper;
}



//* Mudança da posição da câmera 

function movimentacaoCamera(){

    if(aviao.position.x <= - 7){

        lerpConfigCamera.move = true;
        lerpConfigCamera.destination = new THREE.Vector3( -6 , 13 , camera.position.z);

        if(lerpConfigCamera.move) {

            camera.position.lerp(lerpConfigCamera.destination, lerpConfigCamera.alpha);

        }

    }

    else if(aviao.position.x >= 7){

        lerpConfigCamera.move = true;
        lerpConfigCamera.destination = new THREE.Vector3( 6 , 13 , camera.position.z);

        if(lerpConfigCamera.move) {

            camera.position.lerp(lerpConfigCamera.destination, lerpConfigCamera.alpha);

        }

    }

    else {

        lerpConfigCamera.move = true;
        lerpConfigCamera.destination = new THREE.Vector3( 0 , 13 , camera.position.z);

        if(lerpConfigCamera.move) {

            camera.position.lerp(lerpConfigCamera.destination, lerpConfigCamera.alpha);

        }

    }

}


//* Função render 

function render()
{
   requestAnimationFrame(render);
   renderer.render(scene, camera);

   if (lerpConfigAviao.move && !pausado) {

      aviao.position.lerp(lerpConfigAviao.destination, lerpConfigAviao.alpha);

    }

   speed = 0.8;

   movimentacaoCamera();

   if(!pausado){

    bullets.forEach((bullet, index) => {
      bullet.position.z += 0.5;
      if (bullet.position.z > 50) {
        scene.remove(bullet);
        bullets.splice(index, 1);
      }
    });

    for(let i=0; i<20; i++){
        planos.get(i).translateZ(-speed);
      }
    
      if(planos.get(0).position.z.toFixed(1) == -100){
        let aux = planos.dequeue();
        aux.translateZ((400));
        planos.enqueue(aux);
      }
    
      for(let i =0; i<20; i++){
        if(planos.get(i).position.z > 120){
          planos.get(i).material.opacity = 0;
        }else{
          planos.get(i).material.opacity += speed/40;
        }
      }
    
   }

}

