import React, { useRef, useEffect } from 'react';

const ThreeDChristmasScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dynamically import Three.js
    import('three').then((THREE) => {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setClearColor(0x000000, 0.1);
      containerRef.current.appendChild(renderer.domElement);

      camera.position.z = 50;

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 0.8);
      pointLight.position.set(30, 30, 20);
      scene.add(pointLight);

      const pointLight2 = new THREE.PointLight(0xff0000, 0.5);
      pointLight2.position.set(-30, -30, 20);
      scene.add(pointLight2);

      // Create snowflakes
      const snowflakes = [];
      const snowGeometry = new THREE.BufferGeometry();
      const snowMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.5,
        sizeAttenuation: true,
        opacity: 0.8,
        transparent: true,
      });

      for (let i = 0; i < 100; i++) {
        const x = (Math.random() - 0.5) * 200;
        const y = Math.random() * 150;
        const z = (Math.random() - 0.5) * 50;
        snowflakes.push({
          position: new THREE.Vector3(x, y, z),
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.2,
            -Math.random() * 0.5 - 0.1,
            (Math.random() - 0.5) * 0.1
          ),
        });
      }

      const positions = snowflakes.map((f) => [f.position.x, f.position.y, f.position.z]).flat();
      snowGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
      const snowParticles = new THREE.Points(snowGeometry, snowMaterial);
      scene.add(snowParticles);

      // Create rotating Christmas tree
      const treeGroup = new THREE.Group();

      // Tree foliage (cone)
      const treeGeometry = new THREE.ConeGeometry(8, 20, 16);
      const treeMaterial = new THREE.MeshPhongMaterial({ color: 0x1B5E20 });
      const tree = new THREE.Mesh(treeGeometry, treeMaterial);
      tree.position.set(0, 0, 0);
      treeGroup.add(tree);

      // Tree lights (ornaments)
      for (let i = 0; i < 15; i++) {
        const lightGeometry = new THREE.SphereGeometry(0.6, 16, 16);
        const colors = [0xFF0000, 0x00FF00, 0xFFFF00, 0xFF00FF, 0xFFD700];
        const lightMaterial = new THREE.MeshPhongMaterial({ 
          color: colors[i % colors.length],
          emissive: colors[i % colors.length],
          emissiveIntensity: 0.8,
        });
        const light = new THREE.Mesh(lightGeometry, lightMaterial);

        const angle = (i / 15) * Math.PI * 2;
        const radius = 5 + (Math.random() - 0.5) * 3;
        const height = -10 + Math.random() * 15;

        light.position.set(
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        );
        treeGroup.add(light);
      }

      // Tree trunk
      const trunkGeometry = new THREE.CylinderGeometry(2, 2.5, 8, 8);
      const trunkMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.y = -14;
      treeGroup.add(trunk);

      // Star on top
      const starGeometry = new THREE.SphereGeometry(1.5, 16, 16);
      const starMaterial = new THREE.MeshPhongMaterial({
        color: 0xFFD700,
        emissive: 0xFFD700,
        emissiveIntensity: 1,
      });
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.y = 12;
      treeGroup.add(star);

      treeGroup.position.set(-25, -5, 0);
      scene.add(treeGroup);

      // Create floating ornaments
      const ornaments = [];
      const ornamentColors = [0xFF0000, 0x00FF00, 0x0000FF, 0xFFFF00, 0xFF00FF];

      for (let i = 0; i < 5; i++) {
        const ornGeometry = new THREE.SphereGeometry(2, 16, 16);
        const ornMaterial = new THREE.MeshPhongMaterial({
          color: ornamentColors[i],
          shininess: 100,
          reflectivity: 0.8,
        });
        const ornament = new THREE.Mesh(ornGeometry, ornMaterial);
        ornament.position.set(
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 30
        );

        ornaments.push({
          mesh: ornament,
          velocityX: (Math.random() - 0.5) * 0.3,
          velocityY: (Math.random() - 0.5) * 0.3,
          velocityZ: (Math.random() - 0.5) * 0.3,
          rotationX: Math.random(),
          rotationY: Math.random(),
          rotationZ: Math.random(),
        });

        scene.add(ornament);
      }

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Update snowflakes
        snowflakes.forEach((flake, i) => {
          flake.position.add(flake.velocity);

          // Reset snowflake position if it goes too far down
          if (flake.position.y < -100) {
            flake.position.y = 100;
            flake.position.x = (Math.random() - 0.5) * 200;
          }

          // Wrap around sides
          if (flake.position.x > 100) flake.position.x = -100;
          if (flake.position.x < -100) flake.position.x = 100;
        });

        const positions = snowflakes.map((f) => [f.position.x, f.position.y, f.position.z]).flat();
        snowParticles.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
        snowParticles.geometry.attributes.position.needsUpdate = true;

        // Rotate tree
        treeGroup.rotation.y += 0.005;

        // Animate ornaments
        ornaments.forEach((ornament) => {
          ornament.mesh.position.x += ornament.velocityX;
          ornament.mesh.position.y += ornament.velocityY;
          ornament.mesh.position.z += ornament.velocityZ;

          ornament.mesh.rotation.x += ornament.rotationX * 0.01;
          ornament.mesh.rotation.y += ornament.rotationY * 0.01;
          ornament.mesh.rotation.z += ornament.rotationZ * 0.01;

          // Wrap around if too far
          if (ornament.mesh.position.y < -80) ornament.mesh.position.y = 80;
          if (ornament.mesh.position.y > 80) ornament.mesh.position.y = -80;
          if (ornament.mesh.position.x < -120) ornament.mesh.position.x = 120;
          if (ornament.mesh.position.x > 120) ornament.mesh.position.x = -120;
        });

        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        if (!containerRef.current) return;
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
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
      className="fixed inset-0 pointer-events-none z-5"
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    />
  );
};

export default ThreeDChristmasScene;
