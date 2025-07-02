'use client'

export default function TestPage() {
  return (
    <div>
      <div id="three-container" className="size-[300px]"></div>
      <script type="module">
        {`import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.156/build/three.module.js';

          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
          camera.position.set(1.5,1.5,2);

          const renderer = new THREE.WebGLRenderer({ antialias: true });
          renderer.setSize(300, 300);
          document.getElementById('three-container').appendChild(renderer.domElement);

          const geometry = new THREE.BoxGeometry(1,1,1);
          const material = new THREE.MeshStandardMaterial({
            color:0x00ccff, emissive:0x220022, roughness:0.4
          });
          const cube = new THREE.Mesh(geometry, material);
          scene.add(cube);

          const light = new THREE.DirectionalLight(0xffffff,1);
          light.position.set(2,2,2);
          scene.add(light);

          function animate(){
          // console.log('animate')
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
          }
          animate();
          `}
      </script>
    </div>
  )
}
