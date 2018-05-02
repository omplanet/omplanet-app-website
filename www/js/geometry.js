document.addEventListener("DOMContentLoaded", function() {
    init();
    animate();
}, !1)

function init() {
// Geometric objects used from Three.js lib, sources:
//   https://github.com/mrdoob/three.js/blob/master/src/geometries/TetrahedronGeometry.js
//   https://github.com/mrdoob/three.js/blob/master/src/geometries/IcosahedronGeometry.js

    (renderer = new THREE.WebGLRenderer({
        antialias: !0,
        alpha: !0
    })).setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1), renderer.setSize(window.innerWidth, window.innerHeight), renderer.autoClear = !1, renderer.setClearColor(0, 0), document.getElementById("canvas_three").appendChild(renderer.domElement), scene = new THREE.Scene, (camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1e3)).position.z = 400, scene.add(camera), circle = new THREE.Object3D, skelet = new THREE.Object3D, particle = new THREE.Object3D, scene.add(circle), scene.add(skelet), scene.add(particle);
    for (var e = new THREE.TetrahedronGeometry(2, 0), n = new THREE.TetrahedronGeometry(5, 0), t = new THREE.IcosahedronGeometry(15, 0), o = new THREE.MeshPhongMaterial({
            color: 16777215,
            shading: THREE.FlatShading
        }), r = 0; r < 20; r++) {
        var i = new THREE.Mesh(e, o);
        i.position.set(Math.random() - .5, Math.random() - .5, Math.random() - .5).normalize(), i.position.multiplyScalar(90 + 700 * Math.random()), particle.add(i)
    }
    var a = new THREE.MeshPhongMaterial({
            color: 16777215,
            shading: THREE.FlatShading
        }),
        c = new THREE.MeshPhongMaterial({
            color: 16777215,
            wireframe: !0,
            side: THREE.DoubleSide
        }),
        l = new THREE.Mesh(n, a);
    l.scale.x = l.scale.y = l.scale.z = 16, circle.add(l);
    var s = new THREE.Mesh(t, c);
    s.scale.x = s.scale.y = s.scale.z = 10, skelet.add(s);
    var d = new THREE.AmbientLight(6710886);
    scene.add(d);
    var u = [];
    u[0] = new THREE.DirectionalLight(16777215, 1), u[0].position.set(1, 0, 0), u[1] = new THREE.DirectionalLight(15728895, 1), u[1].position.set(.75, 1, .5), u[2] = new THREE.DirectionalLight(3961855, 1), u[2].position.set(-.75, -1, .5), scene.add(u[0]), scene.add(u[1]), scene.add(u[2]), window.addEventListener("resize", onWindowResize, !1)
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight, camera.updateProjectionMatrix(), renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
    requestAnimationFrame(animate), particle.rotation.x += 0, particle.rotation.y -= .004, circle.rotation.x -= .002, circle.rotation.y -= .003, skelet.rotation.x -= .001, skelet.rotation.y += .002, renderer.clear(), renderer.render(scene, camera)

    setTimeout(function() {
        document.getElementById("canvas_three").classList.add('animated')
    }, 200);
}
