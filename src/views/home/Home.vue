<template>
  <div class="panel-main">
    <canvas
      id="main"
      style="position: relative; width: 100%; height: 100%; overflow: hidden;"
    ></canvas>
  </div>
</template>

<script lang="ts">
import '../../assets/img/sun_bg.jpg';
import { Component, Vue, Watch } from "vue-property-decorator";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSS2DRenderer, CSS2DObject } from "../../utils/CSS2DRenderer";
declare function require(any:any):string

const sun_bg = require('../../assets/img/sun_bg.jpg');
const earth_bg = require('../../assets/img/earth_bg.jpg');
const jupiter_bg = require('../../assets/img/jupiter_bg.jpg');
const mars_bg = require('../../assets/img/mars_bg.jpg');
const mercury_bg = require('../../assets/img/mercury_bg.jpg');
const neptune_bg = require('../../assets/img/neptune_bg.jpg');
const pluto_bg = require('../../assets/img/pluto_bg.jpg');
const saturn_bg = require('../../assets/img/saturn_bg.jpg');
const saturn_ring = require('../../assets/img/saturn_ring.jpg');
const uranus_bg = require('../../assets/img/uranus_bg.jpg');
const venus_bg = require('../../assets/img/venus_bg.jpg');
// import "./img/earth_bg.jpg";
// import "./img/jupiter_bg.jpg";
// import "./img/mars_bg.jpg";
// import "./img/mercury_bg.jpg";
// import "./img/neptune_bg.jpg";
// import "./img/pluto_bg.jpg";
// import "./img/saturn_bg.jpg";
// import "./img/saturn_ring.jpg";
// import "./img/uranus_bg.jpg";
// import "./img/venus_bg.jpg";

declare let document: Document | any;

@Component({
  name: "Name",
})
export default class Home extends Vue {
  mounted(): void {
    const canvas = document.getElementById("main");

    /*画布大小*/
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /*renderer*/
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true; //辅助线
    renderer.shadowMapSoft = true; //柔和阴影
    renderer.setClearColor(0xffffff, 0);

    /*scene*/
    const scene = new THREE.Scene();

    /*camera*/
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

    var orbitcontrols = new OrbitControls(camera, labelRenderer.domElement);
    orbitcontrols.update();

    const loader = new THREE.TextureLoader();

    const SunSystem = new THREE.Object3D();
    scene.add(SunSystem);

    const planets:any = [];

    /*sun*/
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: loader.load(sun_bg),
    });
    const Sun = new THREE.Mesh(
      new THREE.SphereGeometry(14, 30, 30),
      sunMaterial
    );
    Sun.name = "Sun";
    SunSystem.add(Sun);

    // const planetDiv = document.createElement("div");
    // planetDiv.className = "label";
    // planetDiv.textContent = "Sun";
    // planetDiv.style.marginTop = "-0.3em";
    // const planetLabel = new CSS2DObject(planetDiv);
    // planetLabel.position.set(0, 14, 0);
    // Sun.add(planetLabel);

    //添加水星
    const Mercury = loadPlanet("mercury", 2, 20, 0.02);
    planets.push(Mercury);
    //添加金星
    const Venus = loadPlanet("venus", 4, 30, 0.012);
    planets.push(Venus);
    //添加地球
    const Earth = loadPlanet("earth", 5, 40, 0.01);
    planets.push(Earth);
    //添加火星
    const Mars = loadPlanet("mars", 4, 50, 0.008);
    planets.push(Mars);
    //添加木星
    const Jupiter = loadPlanet("jupiter", 9, 70, 0.006);
    planets.push(Jupiter);
    //添加土星
    const Saturn = loadPlanet("saturn", 7, 100, 0.005);
    planets.push(Saturn);
    //添加天王星
    const Uranus = loadPlanet("uranus", 4, 120, 0.003);
    planets.push(Uranus);
    //添加海王星
    const Neptune = loadPlanet("neptune", 3, 150, 0.002);
    planets.push(Neptune);
    //添加冥王星
    const Pluto = loadPlanet("pluto", 4, 160, 0.0016);
    planets.push(Pluto);

    const particleSystem = initParticle();
    scene.add(particleSystem);

    function loadPlanet(name:any, radius:any, position:any, speed:any) {
      const planetSystem:any = new THREE.Mesh(
        new THREE.SphereGeometry(1, 1, 1),
        new THREE.MeshLambertMaterial()
      ); //材质设定
      planetSystem.speed = speed;
      let materialLoader = pluto_bg;
      if(name === 'mercury') {
        materialLoader = mercury_bg
      }
      if(name === 'venus') {
        materialLoader = venus_bg
      }
      if(name === 'earth') {
        materialLoader = earth_bg
      }
      if(name === 'mars') {
        materialLoader = mars_bg
      }
      if(name === 'jupiter') {
        materialLoader = jupiter_bg
      }
      if(name === 'saturn') {
        materialLoader = saturn_bg
      }
      if(name === 'uranus') {
        materialLoader = uranus_bg
      }
      if(name === 'neptune') {
        materialLoader = neptune_bg
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
    }

    function initParticle() {
      /*背景星星*/
      const particles = 50000; //星星数量
      /*buffer做星星*/
      let bufferGeometry = new THREE.BufferGeometry();

      let positions = new Float32Array(particles * 3);
      let colors = new Float32Array(particles * 3);

      let color = new THREE.Color();

      const gap = 900; // 定义星星的最近出现位置

      for (let i = 0; i < positions.length; i += 3) {
        // positions

        /*-2gap < x < 2gap */
        let x = Math.random() * gap * 2 * (Math.random() < 0.5 ? -1 : 1);
        let y = Math.random() * gap * 2 * (Math.random() < 0.5 ? -1 : 1);
        let z = Math.random() * gap * 2 * (Math.random() < 0.5 ? -1 : 1);

        /*找出x,y,z中绝对值最大的一个数*/
        let biggest =
          Math.abs(x) > Math.abs(y)
            ? Math.abs(x) > Math.abs(z)
              ? "x"
              : "z"
            : Math.abs(y) > Math.abs(z)
            ? "y"
            : "z";

        let pos:any = { x, y, z };

        /*如果最大值比n要小（因为要在一个距离之外才出现星星）则赋值为n（-n）*/
        if (Math.abs(pos[biggest]) < gap)
          pos[biggest] = pos[biggest] < 0 ? -gap : gap;

        x = pos["x"];
        y = pos["y"];
        z = pos["z"];

        positions[i] = x;
        positions[i + 1] = y;
        positions[i + 2] = z;

        // colors

        /*70%星星有颜色*/
        let hasColor = Math.random() > 0.3;
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
      let material = new THREE.PointsMaterial({
        size: 6,
        vertexColors: THREE.VertexColors,
      });
      const particleSystem = new THREE.Points(bufferGeometry, material);

      return particleSystem;
    }

    function resizeRendererToDisplaySize(renderer:any) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    function render(time:any) {
      time *= 0.00001;

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      SunSystem.rotation.y = -time;
      for (var i = 0; i < planets.length; i++) {
        planets[i].rotation.y -= planets[i].speed;
        const planet = planets[i].children[0];
        planet.rotation.y -= 0.1;
      }

      orbitcontrols.update();

      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }
}
</script>

<style lang="scss" scoped>
.panel-main {
  display: table;
  width: 100%;
  height: 100%;
}
.panel-inverted {
  font-weight: 100;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);

  a {
    color: #fff;
  }
}
.panel-main__inner {
  display: table-cell;
  position: relative;
  z-index: 900;
  padding: 0 1.2rem;
  vertical-align: middle;
}
.panel-main__content {
  max-width: 12.4rem;
  margin: 0 auto;
}
.panel-cover__logo {
  margin-bottom: 0.06rem;
}
.logo {
  border-radius: 50%;
  border: 0.06rem solid #fff;
  box-shadow: 0 0 0.02rem 0.02rem rgba(0, 0, 0, 0.3);
}
.panel-title {
  margin: 0 0 0.1rem 0;
  font-size: 0.75rem;
  letter-spacing: 0.08rem;
  color: #fff;
}
.panel-subtitle {
  display: block;
  font-family: "ff-tisa-web-pro-1", "ff-tisa-web-pro-2", "Lucida Grande",
    "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
  font-size: 0.36rem;
  font-weight: lighter;
  letter-spacing: 0.06rem;
  color: #fff;
  -webkit-font-smoothing: antialiased;
}
.panel-cover__divider {
  width: 50%;
  margin: 0.4rem auto;
  border-top: 0.02rem solid rgba(255, 255, 255, 0.14);
}
.panel-cover__description {
  margin: 0 0.6rem;
  font-size: 0.4rem;
  line-height: 0.51rem;
}
.panel-cover__divider--secondary {
  width: 15%;
}
.cover-navigation {
  position: relative;
  display: inline-block;
  margin-top: 0.84rem;
}
.navigation {
  position: relative;
  display: inline-block;
  margin: 0;
  list-style-type: none;
  list-style: none;
}
.navigation__item {
  display: inline-block;
  margin: 0.1rem 0.1rem 0 0;
  line-height: 0.3rem;

  a {
    position: relative;
    display: block;
    padding: 0.2rem 0.4rem;
    border: 1px solid #fff;
    border-radius: 0.4rem;
    color: #fff;
    font-size: 0.27rem;
    font-weight: bold;
    letter-spacing: 0.02rem;
    text-shadow: none;
    -webkit-font-smoothing: antialiased;
    opacity: 0.8;
  }
  a:hover {
    color: #fff;
    border-color: #fff;
    opacity: 1;
  }
}
.fa {
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.social {
  font-size: 0.44rem;
}
.navigation--social {
  a {
    border: 0;
    padding: 0.12rem 0.16rem 0.12rem 0.18rem;
  }
}
</style>