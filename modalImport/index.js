const THREE = require('three');

// 创建场景和摄像机
var scene = new THREE.Scene(); // 场景
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); // 相机
var renderer = new THREE.WebGLRenderer(); // 渲染器
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// 创建立方体
var geometry = new THREE.BoxGeometry( 1, 1, 1 ); // 立方体几何图形
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); // 材质
var cube = new THREE.Mesh( geometry, material ); // mesh网格
// 将立方体放入场景
scene.add( cube );
camera.position.z = 5;

// 渲染场景
function animate() {
    requestAnimationFrame( animate );
    // 让立方体动起来
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}
animate();