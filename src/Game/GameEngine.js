import * as THREE from 'three';

import React from 'react';
import GameHeader from '../Components/GameHeader';
import InitialGameScene from './InitialGameScene';
import OrbitControls from 'threejs-orbit-controls';
var camera, scene,controls,renderer;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();


export default class GameEngine extends React.Component
{

    constructor(props)
    {
        super(props);
        this.init();
        this.update();
    }
    onMouseMove( event ) {
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.width ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.height ) * 2 + 1;
        var intersects = raycaster.intersectObjects( scene.children );

        for ( var i = 0; i < intersects.length; i++ ) {
            intersects[ i ].object.material.color.set( 0xff0000 );

        }
}
onWindowResize()
{


    function onWindowResize(){

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }
}
    init()
    {
        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
        camera.position.z = 10;

        if(this.props.gameState != null) {
            if (this.props.GameState === "profile") {
                // scene = ProfileScene();
            }
            if (this.props.GameState === "coordinateLookup") {

            }
        }else
            {
                scene = InitialGameScene();
            }
        // this.props.gameState
        document.addEventListener( 'mousemove', this.onMouseMove, false );

        document.addEventListener('click',this.onMouseClick);

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.domElement.id = 'renderer';
        controls = new OrbitControls( camera, renderer.domElement );
        controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;

        controls.minDistance = 50;
        controls.maxDistance = 101;
        controls.maxPolarAngle = Math.PI / 2;

        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild(renderer.domElement);
    }
    update = () =>
    {

        window.addEventListener( 'resize', this.onWindowResize, false );
        raycaster.setFromCamera( mouse, camera );
        requestAnimationFrame(this.update);
        renderer.render(scene,camera);
    };

    render()
    {
        return <GameHeader />
    }

    onMouseClick(event)
    {
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.width ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.height ) * 2 + 1;
        let intersects = raycaster.intersectObjects( scene.children );

        for ( let i = 0; i < intersects.length; i++ )
        {

            intersects[ i ].object.material.color.set( 0x00ff00 );
            console.log(intersects[ i ].object);
        }
    }
}