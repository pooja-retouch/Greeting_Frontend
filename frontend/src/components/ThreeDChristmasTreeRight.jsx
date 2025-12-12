import React, { useRef, useEffect } from 'react';

const ThreeDChristmasTreeRight = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dynamically import Three.js
    import('three').then((THREE) => {
      // Scene setup
      const scene = new THREE.Scene();
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      renderer.shadowMap.enabled = true;
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.right = '0';
      renderer.domElement.style.top = '0';
      containerRef.current.appendChild(renderer.domElement);

      camera.position.set(15, 10, 35);
      camera.lookAt(15, 10, 0);

      // Lighting - Key for dramatic effect
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(20, 30, 15);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 2048;
      directionalLight.shadow.mapSize.height = 2048;
      scene.add(directionalLight);

      const pointLight = new THREE.PointLight(0xffff00, 1.5);
      pointLight.position.set(0, 40, 10);
      scene.add(pointLight);

      // Create Main Tree Group
      const treeGroup = new THREE.Group();
      treeGroup.scale.set(1.5, 1.5, 1.5); // Make tree bigger
      treeGroup.position.set(15, 0, 0); // Position on right side

      // Create multi-layered tree (3 large cones)
      const treeColors = [0x0B6623, 0x155E3A, 0x1B7534];
      const treeLayers = [
        { scale: 1, heightOffset: 0 },
        { scale: 0.75, heightOffset: 15 },
        { scale: 0.5, heightOffset: 25 },
      ];

      treeLayers.forEach((layer, index) => {
        const treeGeometry = new THREE.ConeGeometry(15 * layer.scale, 20, 32);
        const treeMaterial = new THREE.MeshPhongMaterial({
          color: treeColors[index],
          shininess: 30,
          emissive: 0x003300,
          emissiveIntensity: 0.3,
        });
        const tree = new THREE.Mesh(treeGeometry, treeMaterial);
        tree.position.y = layer.heightOffset;
        tree.castShadow = true;
        tree.receiveShadow = true;
        treeGroup.add(tree);
      });

      // Tree trunk
      const trunkGeometry = new THREE.CylinderGeometry(3, 4, 12, 16);
      const trunkMaterial = new THREE.MeshPhongMaterial({
        color: 0x5D4E37,
        shininess: 10,
      });
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.y = -10;
      trunk.castShadow = true;
      trunk.receiveShadow = true;
      treeGroup.add(trunk);

      // Add trunk bark texture details
      for (let i = 0; i < 8; i++) {
        const barkGeometry = new THREE.BoxGeometry(0.3, 12, 0.2);
        const barkMaterial = new THREE.MeshPhongMaterial({ color: 0x3D2E1F });
        const bark = new THREE.Mesh(barkGeometry, barkMaterial);
        const angle = (i / 8) * Math.PI * 2;
        bark.position.set(
          Math.cos(angle) * 3.5,
          -10,
          Math.sin(angle) * 3.5
        );
        bark.castShadow = true;
        treeGroup.add(bark);
      }

      // Create ornaments (large colorful balls)
      const ornamentColors = [
        0xFF0000, 0x00FF00, 0x0000FF, 0xFFFF00, 0xFF00FF, 0xFFA500,
        0xFF1493, 0x00CED1, 0x32CD32, 0xFF69B4
      ];

      for (let i = 0; i < 40; i++) {
        const ornGeometry = new THREE.SphereGeometry(1.2, 32, 32);
        const color = ornamentColors[i % ornamentColors.length];
        const ornMaterial = new THREE.MeshPhongMaterial({
          color: color,
          shininess: 100,
          reflectivity: 0.9,
          emissive: color,
          emissiveIntensity: 0.4,
        });
        const ornament = new THREE.Mesh(ornGeometry, ornMaterial);

        // Distribute ornaments on tree
        const angle = Math.random() * Math.PI * 2;
        const height = Math.random() * 30 - 5;
        const radius = Math.random() * 12 + 2;

        ornament.position.set(
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        );
        ornament.castShadow = true;
        ornament.receiveShadow = true;

        // Store rotation properties
        ornament.userData = {
          rotationX: Math.random() * 0.01,
          rotationY: Math.random() * 0.01,
          rotationZ: Math.random() * 0.01,
          bobSpeed: 0.005 + Math.random() * 0.005,
          bobAmount: 0.5,
          originalY: ornament.position.y,
        };

        treeGroup.add(ornament);
      }

      // Add string lights (small glowing points)
      const lightColors = [0xFF0000, 0xFFFF00, 0x00FF00, 0x0000FF];
      for (let i = 0; i < 50; i++) {
        const lightGeometry = new THREE.SphereGeometry(0.3, 16, 16);
        const lightColor = lightColors[i % lightColors.length];
        const lightMaterial = new THREE.MeshPhongMaterial({
          color: lightColor,
          emissive: lightColor,
          emissiveIntensity: 1,
        });
        const light = new THREE.Mesh(lightGeometry, lightMaterial);

        const angle = Math.random() * Math.PI * 2;
        const height = Math.random() * 32 - 5;
        const radius = Math.random() * 13;

        light.position.set(
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        );

        light.userData = {
          pulse: Math.random() * 0.05 + 0.03,
          phase: Math.random() * Math.PI * 2,
        };

        treeGroup.add(light);
      }

      // Star on top (enhanced)
      const starGeometry = new THREE.IcosahedronGeometry(2.5, 4);
      const starMaterial = new THREE.MeshPhongMaterial({
        color: 0xFFD700,
        emissive: 0xFFFF00,
        emissiveIntensity: 1.2,
        shininess: 200,
      });
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.y = 37;
      star.castShadow = true;
      star.userData = {
        rotationSpeed: 0.05,
      };
      treeGroup.add(star);

      // Add star glow
      const glowGeometry = new THREE.IcosahedronGeometry(3.5, 4);
      const glowMaterial = new THREE.MeshPhongMaterial({
        color: 0xFFFF99,
        emissive: 0xFFFF00,
        emissiveIntensity: 0.6,
        transparent: true,
        opacity: 0.3,
      });
      const starGlow = new THREE.Mesh(glowGeometry, glowMaterial);
      starGlow.position.y = 37;
      treeGroup.add(starGlow);

      scene.add(treeGroup);

      // Animation variables
      let time = 0;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        time += 0.01;

        // Rotate entire tree slowly
        treeGroup.rotation.y += 0.003;

        // Animate ornaments (bobbing + rotation)
        treeGroup.children.forEach((child) => {
          if (child.userData.bobSpeed) {
            // Bobbing animation
            child.position.y = child.userData.originalY + Math.sin(time * child.userData.bobSpeed) * child.userData.bobAmount;

            // Rotation
            child.rotation.x += child.userData.rotationX;
            child.rotation.y += child.userData.rotationY;
            child.rotation.z += child.userData.rotationZ;
          }

          // Pulsing lights
          if (child.userData.pulse) {
            const pulseMaterial = child.material;
            pulseMaterial.emissiveIntensity = 0.5 + Math.sin(time * child.userData.pulse + child.userData.phase) * 0.5;
          }

          // Rotating star
          if (child.userData.rotationSpeed) {
            child.rotation.x += child.userData.rotationSpeed * 0.01;
            child.rotation.y += child.userData.rotationSpeed * 0.015;
            child.rotation.z += child.userData.rotationSpeed * 0.01;
          }
        });

        // Star glow pulsing
        if (starGlow && starGlow.material) {
          starGlow.material.opacity = 0.2 + Math.sin(time * 0.05) * 0.15;
        }

        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        if (!containerRef.current) return;
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        background: 'transparent',
      }}
    />
  );
};

export default ThreeDChristmasTreeRight;
