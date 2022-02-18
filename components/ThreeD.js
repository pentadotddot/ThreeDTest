import CustomContainer from "./CustomContainer";
import React, {Suspense} from "react";
import ReactDOM from 'react-dom'
import {Text, Image, Box, GridItem,Link, Grid, SimpleGrid, StylesProvider, AspectRatio, Flex } from "@chakra-ui/react"
import { useNFTBalances } from "react-moralis";
import { useEffect, useLayoutEffect } from "react";
import styles from "../styles/Dashboard.module.css";
import * as THREE from 'three'
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture  } from "@react-three/drei";
import boxtexture from "../static/login_card.gif";


function restoreContext() {
    const canvas = renderer.domElement;
    canvas.addEventListener(
      'webglcontextlost',
      function (event) {
        event.preventDefault();
        setTimeout(function () {
          renderer.forceContextRestore();
        }, 1);
      },
      false
    );
  }

function Scene() {

    const texture = useLoader(THREE.TextureLoader, boxtexture)

    return (
      <>
        <ambientLight intensity={0.2} />
        <directionalLight />
        <mesh>
            <boxBufferGeometry attach="geometry" args = {[1,1,1]}/>
            <meshBasicMaterial attach="material" map = {boxtexture} />
        </mesh>
      </>
    )
  }
  

export default function ThreeD({user}){

    return(
        <CustomContainer >
            <Flex height="50vh">
                <Canvas className = {styles.threeDBox} >
                <OrbitControls/>
                <ambientLight intensity = {0.5}/>
                <directionalLight position = {[-2,5,2]}  instensity = {1} />
                    <Suspense fallback={null}>

                        <Scene/>

                    </Suspense>

                </Canvas>

            </Flex>
        </CustomContainer>

    )
}

