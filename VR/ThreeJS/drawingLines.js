/* renderer.domElement --> <canvas> element where the scene will be rendered */
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

/*Create a blue lineBasicMaterial*/
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

/*Geometry with some vertices
  Vector3: 3D direction 
  will create 2 lines: from A(-10,0,0) --> B(0,10,0) and B --> C(10,0,0)
*/
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

/*BufferGeometry is a representation of mesh/line/point geometry - includes vertex positions, face indices, normals, colors, UVs and custom attribute within buffers*/
const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );
scene.add( line );
renderer.render( scene, camera );