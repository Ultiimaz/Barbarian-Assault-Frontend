import * as THREE from 'three';

var scene;
var geometry, material, mesh;


const Spot = (x,y, z = 0) => {

    geometry = new THREE.BoxGeometry( 5, 1, 5 );

    material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;
   return mesh;
};
const InitialGameScene = () =>
{

        scene = new THREE.Scene();

        for(let x = 0; x< 20;x = x + 2.1)
        {
            for(let y = 0; y< 20;y = y + 2.1)
            {
                scene.add(new Spot((x * 2.75)-10,0,(y * 2.75)-10),0);
            }
        }

        return scene;
};
export default InitialGameScene;