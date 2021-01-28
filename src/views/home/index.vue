<template>
  <div class="table w-full h-full">
    <canvas id="main" class="relative w-full h-full overflow-hidden"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSS2DRenderer, CSS2DObject } from "../../utils/CSS2DRenderer";

declare function require(any: any): string;
/**
 * @function require
 * @description 直接引入图片不能使用
 */
const sun_bg = require("../../assets/img/sun_bg.jpg");
const earth_bg = require("../../assets/img/earth_bg.jpg");
const jupiter_bg = require("../../assets/img/jupiter_bg.jpg");
const mars_bg = require("../../assets/img/mars_bg.jpg");
const mercury_bg = require("../../assets/img/mercury_bg.jpg");
const neptune_bg = require("../../assets/img/neptune_bg.jpg");
const pluto_bg = require("../../assets/img/pluto_bg.jpg");
const saturn_bg = require("../../assets/img/saturn_bg.jpg");
const saturn_ring = require("../../assets/img/saturn_ring.jpg");
const uranus_bg = require("../../assets/img/uranus_bg.jpg");
const venus_bg = require("../../assets/img/venus_bg.jpg");

declare let document: Document | any;

@Component({})
export default class Index extends Vue {
  public mounted(): void {
    setTimeout(() => {
      const canvas = document.getElementById("main");

      /**
       * @description canvas size
       * @param width canvas width
       * @param height canvas height
       */
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      /**
       * @description renderer THREE.WebGLRenderer
       */
      const renderer: any = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true; // 辅助线
      renderer.shadowMapSoft = true; // 柔和阴影
      renderer.setClearColor(0xffffff, 0);

      /**
       * @description scene THREE.Scene
       */
      const scene = new THREE.Scene();

      /**
       * @description camera THREE.PerspectiveCamera
       */
      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        3000
      );
      camera.position.set(-200, 50, 0);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      scene.add(camera);

      // const AxesHelper = new THREE.AxesHelper(500);
      // scene.add(AxesHelper);

      const labelRenderer = new CSS2DRenderer();
      labelRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
      labelRenderer.domElement.style.position = "absolute";
      labelRenderer.domElement.style.top = "0px";
      document.body.appendChild(labelRenderer.domElement);

      const orbitcontrols = new OrbitControls(camera, labelRenderer.domElement);
      orbitcontrols.update();

      const loader = new THREE.TextureLoader();

      const SunSystem = new THREE.Object3D();
      scene.add(SunSystem);

      const planets: any = [];

      /**
       * @description sun
       */
      const sunMaterial = new THREE.MeshBasicMaterial({
        map: loader.load(sun_bg),
      });
      const Sun = new THREE.Mesh(
        new THREE.SphereGeometry(14, 30, 30),
        sunMaterial
      );
      Sun.name = "Sun";
      SunSystem.add(Sun);

      const planetLink = document.createElement("a");
      planetLink.className = "label";
      planetLink.textContent = "JackDan's Den";
      planetLink.style.marginTop = "-1em";
      planetLink.style.fontSize = "1rem";
      planetLink.style.padding = "1rem";
      planetLink.href = "/blog";
      const planetLabel = new CSS2DObject(planetLink);
      planetLabel.position.set(0, 14, 0);
      Sun.add(planetLabel);
      const loadPlanet: any = (
        name: any,
        radius: any,
        position: any,
        speed: any
      ) => {
        const planetSystem: any = new THREE.Mesh(
          new THREE.SphereGeometry(1, 1, 1),
          new THREE.MeshLambertMaterial()
        );
        // 材质设定
        planetSystem.speed = speed;
        let materialLoader = pluto_bg;
        if (name === "mercury") {
          materialLoader = mercury_bg;
        }
        if (name === "venus") {
          materialLoader = venus_bg;
        }
        if (name === "earth") {
          materialLoader = earth_bg;
        }
        if (name === "mars") {
          materialLoader = mars_bg;
        }
        if (name === "jupiter") {
          materialLoader = jupiter_bg;
        }
        if (name === "saturn") {
          materialLoader = saturn_bg;
        }
        if (name === "uranus") {
          materialLoader = uranus_bg;
        }
        if (name === "neptune") {
          materialLoader = neptune_bg;
        }
        const material = new THREE.MeshBasicMaterial({
          map: loader.load(materialLoader),
        });
        const planet = new THREE.Mesh(
          new THREE.SphereGeometry(radius, 30, 30),
          material
        );
        planet.position.z = -position;
        // planet.rotateOnAxis(new THREE.Vector3(1, 0, 0).normalize(), -23.36 * Math.PI / 180)
        planetSystem.add(planet);

        if (name === "saturn") {
          const ringMaterial = new THREE.MeshBasicMaterial({
            map: loader.load(saturn_ring),
            side: THREE.DoubleSide,
          });
          const ring = new THREE.Mesh(
            new THREE.RingGeometry(radius * 1.2, radius * 1.5, 64, 1),
            ringMaterial
          );
          ring.rotation.x = -Math.PI / 2;
          planet.add(ring);
        }

        const track = new THREE.Mesh(
          new THREE.RingGeometry(position, position + 0.05, 64, 1),
          new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
          })
        );
        track.rotation.x = -Math.PI / 2;
        scene.add(track);

        // const planetDiv = document.createElement("div");
        // planetDiv.className = "label";
        // planetDiv.textContent = name;
        // planetDiv.style.marginTop = "-0.3em";
        // const planetLabel = new CSS2DObject(planetDiv);
        // planetLabel.position.set(0, radius, 0);
        // planet.add(planetLabel);

        SunSystem.add(planetSystem);

        return planetSystem;
      };
      // Add Mercury 添加水星
      const Mercury = loadPlanet("mercury", 2, 20, 0.02);
      planets.push(Mercury);
      // Add Venus 添加金星
      const Venus = loadPlanet("venus", 4, 30, 0.012);
      planets.push(Venus);
      // Add Earth 添加地球
      const Earth = loadPlanet("earth", 5, 40, 0.01);
      planets.push(Earth);
      // Add Mars 添加火星
      const Mars = loadPlanet("mars", 4, 50, 0.008);
      planets.push(Mars);
      // Add Jupiter 添加木星
      const Jupiter = loadPlanet("jupiter", 9, 70, 0.006);
      planets.push(Jupiter);
      // Add Saturn 添加土星
      const Saturn = loadPlanet("saturn", 7, 100, 0.005);
      planets.push(Saturn);
      // Add Uranus 添加天王星
      const Uranus = loadPlanet("uranus", 4, 120, 0.003);
      planets.push(Uranus);
      // Add Neptune 添加海王星
      const Neptune = loadPlanet("neptune", 3, 150, 0.002);
      planets.push(Neptune);
      // Add Pluto 添加冥王星
      const Pluto = loadPlanet("pluto", 4, 160, 0.0016);
      planets.push(Pluto);

      const initParticle = () => {
        /**
         * Particles 背景星星数量
         */
        const particles = 15000;

        /**
         * Buffer Geometry buffer做星星
         */
        const bufferGeometry = new THREE.BufferGeometry();

        const positions = new Float32Array(particles * 3);
        const colors = new Float32Array(particles * 3);

        const color = new THREE.Color();

        /**
         * gap 定义星星的最近出现位置
         */
        const gap = 900;

        for (let i = 0; i < positions.length; i += 3) {
          // positions

          /*-2gap < x < 2gap */
          let x = Math.random() * gap * 2 * (Math.random() < 0.5 ? -1 : 1);
          let y = Math.random() * gap * 2 * (Math.random() < 0.5 ? -1 : 1);
          let z = Math.random() * gap * 2 * (Math.random() < 0.5 ? -1 : 1);

          /*找出x,y,z中绝对值最大的一个数*/
          const biggest =
            Math.abs(x) > Math.abs(y)
              ? Math.abs(x) > Math.abs(z)
                ? "x"
                : "z"
              : Math.abs(y) > Math.abs(z)
              ? "y"
              : "z";

          const pos: any = { x, y, z };

          /*如果最大值比n要小（因为要在一个距离之外才出现星星）则赋值为n（-n）*/
          if (Math.abs(pos[biggest]) < gap) {
            pos[biggest] = pos[biggest] < 0 ? -gap : gap;
          }

          x = pos.x;
          y = pos.y;
          z = pos.z;

          positions[i] = x;
          positions[i + 1] = y;
          positions[i + 2] = z;

          // colors

          /*70%星星有颜色*/
          const hasColor = Math.random() > 0.3;
          let vx, vy, vz;

          if (hasColor) {
            vx = (Math.random() + 1) / 2;
            vy = (Math.random() + 1) / 2;
            vz = (Math.random() + 1) / 2;
          } else {
            vx = 1;
            vy = 1;
            vz = 1;
          }

          color.setRGB(vx, vy, vz);

          colors[i] = color.r;
          colors[i + 1] = color.g;
          colors[i + 2] = color.b;
        }

        bufferGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );
        bufferGeometry.setAttribute(
          "color",
          new THREE.BufferAttribute(colors, 3)
        );
        bufferGeometry.computeBoundingSphere();

        /*星星的material*/
        const material = new THREE.PointsMaterial({
          size: 6,
          vertexColors: THREE.VertexColors,
        });
        const particleSystem = new THREE.Points(bufferGeometry, material);

        return particleSystem;
      };

      const particleSystem = initParticle();
      scene.add(particleSystem);

      const resizeRendererToDisplaySize = (renderer: any) => {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
      };

      const render = (time: any) => {
        time *= 0.00001;

        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }

        SunSystem.rotation.y = -time;
        for (let i = 0; i < planets.length; i++) {
          planets[i].rotation.y -= planets[i].speed;
          const planet = planets[i].children[0];
          planet.rotation.y -= 0.1;
        }

        orbitcontrols.update();

        renderer.render(scene, camera);
        labelRenderer.render(scene, camera);

        window.requestAnimationFrame(render);
      };

      requestAnimationFrame(render);
    }, 300);
  }
}
</script>

<style lang="scss" scoped>
</style>