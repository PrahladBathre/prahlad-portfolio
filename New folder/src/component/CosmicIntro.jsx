import { useEffect, useRef } from "react";
import * as THREE from "three";

const CosmicIntro = ({
    onTransitionStart,
    onComplete,
}) => {
    const canvasRef = useRef(null);

    const onTransitionStartRef =
        useRef(onTransitionStart);

    const onCompleteRef =
        useRef(onComplete);

    onTransitionStartRef.current =
        onTransitionStart;

    onCompleteRef.current =
        onComplete;

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const scene = new THREE.Scene();

        scene.background =
            new THREE.Color(0x020107);

        const camera =
            new THREE.PerspectiveCamera(
                55,
                window.innerWidth /
                window.innerHeight,
                0.1,
                100
            );

        camera.position.set(
            0,
            0,
            12
        );

        const renderer =
            new THREE.WebGLRenderer({
                canvas,
                antialias: true,
                alpha: true,
                powerPreference:
                    "high-performance",
                depth: true,
                stencil: false,
            });

        const initialPixelRatio =
            Math.min(
                window.devicePixelRatio,
                2
            );

        renderer.setPixelRatio(
            initialPixelRatio
        );

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        const createRadialTexture = () => {
            const size = 256;

            const textureCanvas =
                document.createElement(
                    "canvas"
                );

            textureCanvas.width = size;
            textureCanvas.height = size;

            const context =
                textureCanvas.getContext(
                    "2d"
                );

            const gradient =
                context.createRadialGradient(
                    size / 2,
                    size / 2,
                    0,
                    size / 2,
                    size / 2,
                    size / 2
                );

            gradient.addColorStop(
                0,
                "rgba(255,255,255,1)"
            );

            gradient.addColorStop(
                0.15,
                "rgba(255,255,255,0.95)"
            );

            gradient.addColorStop(
                0.4,
                "rgba(255,255,255,0.35)"
            );

            gradient.addColorStop(
                0.7,
                "rgba(255,255,255,0.08)"
            );

            gradient.addColorStop(
                1,
                "rgba(255,255,255,0)"
            );

            context.fillStyle = gradient;

            context.fillRect(
                0,
                0,
                size,
                size
            );

            const texture =
                new THREE.CanvasTexture(
                    textureCanvas
                );

            texture.needsUpdate = true;

            return texture;
        };

        const particleTexture =
            createRadialTexture();

        const isMobile =
            window.innerWidth < 768;

        /*
         * --------------------------------------------------
         * STARS
         * --------------------------------------------------
         */

        const starCount = isMobile
            ? 2200
            : 4800;

        const starGeometry =
            new THREE.BufferGeometry();

        const starPositions =
            new Float32Array(
                starCount * 3
            );

        const starColors =
            new Float32Array(
                starCount * 3
            );

        const starPalette = [
            new THREE.Color(0xffffff),
            new THREE.Color(0x8fd8ff),
            new THREE.Color(0xb77aff),
            new THREE.Color(0xff9de2),
        ];

        for (
            let i = 0;
            i < starCount;
            i++
        ) {
            const i3 = i * 3;

            const radius =
                5 +
                Math.random() * 22;

            const theta =
                Math.random() *
                Math.PI *
                2;

            const phi =
                Math.acos(
                    2 *
                    Math.random() -
                    1
                );

            starPositions[i3] =
                radius *
                Math.sin(phi) *
                Math.cos(theta);

            starPositions[i3 + 1] =
                radius *
                Math.sin(phi) *
                Math.sin(theta);

            starPositions[i3 + 2] =
                radius *
                Math.cos(phi) -
                8;

            const color =
                starPalette[
                Math.floor(
                    Math.random() *
                    starPalette.length
                )
                ];

            starColors[i3] = color.r;
            starColors[i3 + 1] =
                color.g;
            starColors[i3 + 2] =
                color.b;
        }

        starGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(
                starPositions,
                3
            )
        );

        starGeometry.setAttribute(
            "color",
            new THREE.BufferAttribute(
                starColors,
                3
            )
        );

        const starMaterial =
            new THREE.PointsMaterial({
                size: isMobile
                    ? 0.055
                    : 0.045,
                map: particleTexture,
                transparent: true,
                opacity: 0.82,
                vertexColors: true,
                depthWrite: false,
                blending:
                    THREE.AdditiveBlending,
                sizeAttenuation: true,
            });

        const stars =
            new THREE.Points(
                starGeometry,
                starMaterial
            );

        scene.add(stars);

        /*
         * --------------------------------------------------
         * SPACE GLOW
         * --------------------------------------------------
         */

        const purpleGlowMaterial =
            new THREE.SpriteMaterial({
                map: particleTexture,
                color: 0x7c24ff,
                transparent: true,
                opacity: 0.85,
                depthWrite: false,
                blending:
                    THREE.AdditiveBlending,
            });

        const purpleGlow =
            new THREE.Sprite(
                purpleGlowMaterial
            );

        purpleGlow.position.set(
            -5,
            2,
            -8
        );

        purpleGlow.scale.set(
            18,
            18,
            1
        );

        scene.add(purpleGlow);

        const purpleGlowMaterial2 =
            new THREE.SpriteMaterial({
                map: particleTexture,
                color: 0x3b7dff,
                transparent: true,
                opacity: 0.85,
                depthWrite: false,
                blending:
                    THREE.AdditiveBlending,
            });

        const purpleGlow2 =
            new THREE.Sprite(
                purpleGlowMaterial2
            );

        purpleGlow2.position.set(
            6,
            -2,
            -10
        );

        purpleGlow2.scale.set(
            15,
            15,
            1
        );

        scene.add(purpleGlow2);

        /*
         * --------------------------------------------------
         * PLANET
         * --------------------------------------------------
         */

        const planetGroup =
            new THREE.Group();

        scene.add(planetGroup);

        const planetGeometry =
            new THREE.SphereGeometry(
                0.72,
                64,
                64
            );

        const planetMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x32106f,
                roughness: 0.45,
                metalness: 0.15,
                emissive: 0x16052f,
                emissiveIntensity: 0.8,
            });

        const planet =
            new THREE.Mesh(
                planetGeometry,
                planetMaterial
            );

        planetGroup.add(planet);

        const atmosphereGeometry =
            new THREE.SphereGeometry(
                0.79,
                64,
                64
            );

        const atmosphereMaterial =
            new THREE.MeshBasicMaterial({
                color: 0x8f4dff,
                transparent: true,
                opacity: 0.18,
                side: THREE.BackSide,
                depthWrite: false,
                blending:
                    THREE.AdditiveBlending,
            });

        const atmosphere =
            new THREE.Mesh(
                atmosphereGeometry,
                atmosphereMaterial
            );

        planetGroup.add(
            atmosphere
        );

        /*
         * --------------------------------------------------
         * PLANET RINGS
         * --------------------------------------------------
         */

        const rings = [];

        const ringData = [
            {
                inner: 1.05,
                outer: 1.13,
                color: 0x8c45ff,
                opacity: 0.5,
            },
            {
                inner: 1.2,
                outer: 1.25,
                color: 0x4e8cff,
                opacity: 0.32,
            },
            {
                inner: 1.34,
                outer: 1.38,
                color: 0xc45cff,
                opacity: 0.22,
            },
        ];

        ringData.forEach(
            (data) => {
                const ringGeometry =
                    new THREE.RingGeometry(
                        data.inner,
                        data.outer,
                        128
                    );

                const ringMaterial =
                    new THREE.MeshBasicMaterial({
                        color:
                            data.color,
                        transparent:
                            true,
                        opacity:
                            data.opacity,
                        side:
                            THREE.DoubleSide,
                        depthWrite:
                            false,
                        blending:
                            THREE.AdditiveBlending,
                    });

                const ring =
                    new THREE.Mesh(
                        ringGeometry,
                        ringMaterial
                    );

                ring.rotation.x =
                    THREE.MathUtils.degToRad(
                        68
                    );

                ring.rotation.z =
                    Math.random() *
                    Math.PI;

                ring.rotation.y =
                    Math.random() *
                    0.3;

                planetGroup.add(
                    ring
                );

                rings.push(ring);
            }
        );

        /*
         * --------------------------------------------------
         * PLANET GLOW
         * --------------------------------------------------
         */

        const planetGlowMaterial =
            new THREE.SpriteMaterial({
                map: particleTexture,
                color: 0x7028ff,
                transparent: true,
                opacity: 0.3,
                depthWrite: false,
                blending:
                    THREE.AdditiveBlending,
            });

        const glow =
            new THREE.Sprite(
                planetGlowMaterial
            );

        glow.scale.set(
            3.7,
            3.7,
            1
        );

        planetGroup.add(glow);

        /*
         * --------------------------------------------------
         * LIGHTING
         * --------------------------------------------------
         */

        const purpleLight =
            new THREE.PointLight(
                0x7b32ff,
                3,
                8
            );

        purpleLight.position.set(
            -2,
            2,
            2
        );

        scene.add(purpleLight);

        const blueLight =
            new THREE.PointLight(
                0x3c8cff,
                2.5,
                10
            );

        blueLight.position.set(
            3,
            -1,
            3
        );

        scene.add(blueLight);

        /*
         * --------------------------------------------------
         * GPU DEBRIS
         * --------------------------------------------------
         */

        const debrisCount = isMobile
            ? 700
            : 1600;

        const debrisGeometry =
            new THREE.BufferGeometry();

        const debrisDirections =
            new Float32Array(
                debrisCount * 3
            );

        const debrisDistances =
            new Float32Array(
                debrisCount
            );

        const debrisColors =
            new Float32Array(
                debrisCount * 3
            );

        const debrisPalette = [
            new THREE.Color(0xffffff),
            new THREE.Color(0x65d9ff),
            new THREE.Color(0x4f8cff),
            new THREE.Color(0x9b55ff),
            new THREE.Color(0xff8fe1),
        ];

        for (
            let i = 0;
            i < debrisCount;
            i++
        ) {
            const i3 = i * 3;

            const theta =
                Math.random() *
                Math.PI *
                2;

            const phi =
                Math.acos(
                    2 *
                    Math.random() -
                    1
                );

            debrisDirections[i3] =
                Math.sin(phi) *
                Math.cos(theta);

            debrisDirections[i3 + 1] =
                Math.sin(phi) *
                Math.sin(theta);

            debrisDirections[i3 + 2] =
                Math.cos(phi);

            debrisDistances[i] =
                4 +
                Math.random() * 11;

            const color =
                debrisPalette[
                Math.floor(
                    Math.random() *
                    debrisPalette.length
                )
                ];

            debrisColors[i3] = color.r;
            debrisColors[i3 + 1] =
                color.g;
            debrisColors[i3 + 2] =
                color.b;
        }

        debrisGeometry.setAttribute(
            "aDirection",
            new THREE.BufferAttribute(
                debrisDirections,
                3
            )
        );

        debrisGeometry.setAttribute(
            "aDistance",
            new THREE.BufferAttribute(
                debrisDistances,
                1
            )
        );

        debrisGeometry.setAttribute(
            "color",
            new THREE.BufferAttribute(
                debrisColors,
                3
            )
        );

        const debrisMaterial =
            new THREE.ShaderMaterial({
                uniforms: {
                    uProgress: {
                        value: 0,
                    },

                    uPhase: {
                        value: 0,
                    },

                    uOpacity: {
                        value: 0,
                    },

                    uPointSize: {
                        value: isMobile
                            ? 0.065
                            : 0.055,
                    },

                    uPixelRatio: {
                        value:
                            initialPixelRatio,
                    },

                    uTexture: {
                        value:
                            particleTexture,
                    },
                },

                vertexShader: `
                    attribute vec3 aDirection;
                    attribute float aDistance;

                    uniform float uProgress;
                    uniform float uPhase;
                    uniform float uPointSize;
                    uniform float uPixelRatio;

                    varying vec3 vColor;

                    void main() {

                        float travel;

                        if (uPhase < 1.5) {

                            travel =
                                0.45 +
                                pow(
                                    uProgress,
                                    1.25
                                ) *
                                aDistance;

                        } else {

                            travel =
                                aDistance *
                                (
                                    1.0 +
                                    uProgress *
                                    1.8
                                );
                        }

                        vec3 transformed =
                            aDirection *
                            travel;

                        vec4 modelPosition =
                            modelMatrix *
                            vec4(
                                transformed,
                                1.0
                            );

                        vec4 viewPosition =
                            viewMatrix *
                            modelPosition;

                        gl_Position =
                            projectionMatrix *
                            viewPosition;

                        gl_PointSize =
                            uPointSize *
                            uPixelRatio *
                            (
                                300.0 /
                                max(
                                    1.0,
                                    -viewPosition.z
                                )
                            );

                        vColor = color;
                    }
                `,

                fragmentShader: `
                    uniform sampler2D uTexture;
                    uniform float uOpacity;

                    varying vec3 vColor;

                    void main() {

                        vec4 textureColor =
                            texture2D(
                                uTexture,
                                gl_PointCoord
                            );

                        if (
                            textureColor.a <
                            0.01
                        ) {
                            discard;
                        }

                        gl_FragColor =
                            vec4(
                                vColor,
                                textureColor.a *
                                uOpacity
                            );
                    }
                `,

                transparent: true,
                vertexColors: true,
                depthWrite: false,
                blending:
                    THREE.AdditiveBlending,
            });

        const debris =
            new THREE.Points(
                debrisGeometry,
                debrisMaterial
            );

        scene.add(debris);

        /*
         * --------------------------------------------------
         * EXPLOSION FLASH
         * --------------------------------------------------
         */

        const flashMaterial =
            new THREE.SpriteMaterial({
                map: particleTexture,
                color: 0xffffff,
                transparent: true,
                opacity: 0,
                depthWrite: false,
                blending:
                    THREE.AdditiveBlending,
            });

        const flash =
            new THREE.Sprite(
                flashMaterial
            );

        flash.visible = false;

        flash.scale.set(
            0.5,
            0.5,
            1
        );

        scene.add(flash);

        /*
         * --------------------------------------------------
         * MOUSE PARALLAX
         * --------------------------------------------------
         */

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (
            event
        ) => {
            mouseX =
                (
                    event.clientX /
                    window.innerWidth -
                    0.5
                ) * 2;

            mouseY =
                (
                    event.clientY /
                    window.innerHeight -
                    0.5
                ) * 2;
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        /*
         * --------------------------------------------------
         * RESIZE
         * --------------------------------------------------
         */

        const handleResize = () => {
            camera.aspect =
                window.innerWidth /
                window.innerHeight;

            camera.updateProjectionMatrix();

            renderer.setSize(
                window.innerWidth,
                window.innerHeight
            );

            const pixelRatio =
                Math.min(
                    window.devicePixelRatio,
                    2
                );

            renderer.setPixelRatio(
                pixelRatio
            );

            debrisMaterial.uniforms.uPixelRatio.value =
                pixelRatio;
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        /*
         * --------------------------------------------------
         * TIMING
         * --------------------------------------------------
         *
         * Using performance.now()
         * instead of THREE.Clock.
         */

        const animationStart =
            performance.now();

        const planetDuration = 5;

        const explosionDuration =
            0.75;

        const debrisDuration = 5;

        const totalDuration =
            planetDuration +
            explosionDuration +
            debrisDuration;

        const heroTransitionPoint =
            0.82;

        const easeOutExpo = (
            value
        ) => {
            return value === 1
                ? 1
                : 1 -
                Math.pow(
                    2,
                    -10 * value
                );
        };

        let animationId = null;

        let completed = false;

        let transitionStarted =
            false;

        /*
         * --------------------------------------------------
         * ANIMATION
         * --------------------------------------------------
         */

        const animate = () => {
            animationId =
                requestAnimationFrame(
                    animate
                );

            const elapsed =
                (
                    performance.now() -
                    animationStart
                ) / 1000;

            /*
             * Background
             */

            stars.rotation.y =
                elapsed * 0.008;

            stars.rotation.x =
                Math.sin(
                    elapsed * 0.08
                ) * 0.01;

            const starPulse =
                0.82 +
                Math.sin(
                    elapsed * 1.2
                ) *
                0.06;

            starMaterial.opacity =
                starPulse;

            purpleGlow.material.opacity =
                0.85 +
                Math.sin(
                    elapsed * 0.18
                ) *
                0.08;

            purpleGlow2.material.opacity =
                0.85 +
                Math.sin(
                    elapsed * 0.22 +
                    2
                ) *
                0.08;

            /*
             * --------------------------------------------------
             * PLANET
             * --------------------------------------------------
             */

            if (
                elapsed <
                planetDuration
            ) {
                planet.visible = true;

                atmosphere.visible =
                    true;

                glow.visible = true;

                rings.forEach(
                    (
                        ring,
                        index
                    ) => {
                        ring.visible =
                            true;

                        ring.rotation.z +=
                            0.006 *
                            (index + 1);

                        ring.rotation.y +=
                            0.0015 *
                            (index + 1);
                    }
                );

                planet.rotation.y +=
                    0.004;

                planet.rotation.x +=
                    0.001;

                const pulse =
                    Math.sin(
                        elapsed * 1.8
                    ) *
                    0.5 +
                    0.5;

                glow.scale.set(
                    3.7 +
                    pulse * 0.6,
                    3.7 +
                    pulse * 0.6,
                    1
                );

                glow.material.opacity =
                    0.28 +
                    pulse * 0.08;

                renderer.render(
                    scene,
                    camera
                );

                return;
            }

            /*
             * --------------------------------------------------
             * EXPLOSION
             * --------------------------------------------------
             */

            const explosionElapsed =
                elapsed -
                planetDuration;

            if (
                explosionElapsed <
                explosionDuration
            ) {
                const progress =
                    explosionElapsed /
                    explosionDuration;

                const burst =
                    easeOutExpo(
                        progress
                    );

                planet.visible = false;

                atmosphere.visible =
                    false;

                glow.visible = false;

                rings.forEach(
                    (ring) => {
                        ring.visible =
                            false;
                    }
                );

                flash.visible = true;

                flash.scale.set(
                    0.5 +
                    burst * 5.5,
                    0.5 +
                    burst * 5.5,
                    1
                );

                flash.material.opacity =
                    Math.sin(
                        progress *
                        Math.PI
                    ) * 1.5;

                debrisMaterial.uniforms.uPhase.value =
                    1;

                debrisMaterial.uniforms.uProgress.value =
                    progress;

                debrisMaterial.uniforms.uOpacity.value =
                    Math.min(
                        1,
                        progress * 4
                    );

                renderer.render(
                    scene,
                    camera
                );

                return;
            }

            /*
             * --------------------------------------------------
             * DEBRIS + CAMERA TRAVEL
             * --------------------------------------------------
             */

            const debrisElapsed =
                explosionElapsed -
                explosionDuration;

            const debrisProgress =
                Math.min(
                    1,
                    debrisElapsed /
                    debrisDuration
                );

            planet.visible = false;

            atmosphere.visible =
                false;

            glow.visible = false;

            flash.visible = false;

            rings.forEach(
                (ring) => {
                    ring.visible =
                        false;
                }
            );

            debrisMaterial.uniforms.uPhase.value =
                2;

            debrisMaterial.uniforms.uProgress.value =
                debrisProgress;

            debrisMaterial.uniforms.uOpacity.value =
                Math.max(
                    0,
                    1 -
                    Math.pow(
                        debrisProgress,
                        1.45
                    )
                );

            /*
             * Camera starts travelling
             * at 45% of debris phase.
             */

            const cameraTravelStart =
                0.45;

            if (
                debrisProgress >
                cameraTravelStart
            ) {
                const travelProgress =
                    (
                        debrisProgress -
                        cameraTravelStart
                    ) /
                    (
                        1 -
                        cameraTravelStart
                    );

                const easedTravel =
                    1 -
                    Math.pow(
                        1 -
                        travelProgress,
                        3
                    );

                camera.position.z =
                    12 -
                    easedTravel * 8;

                camera.position.x +=
                    (
                        mouseX * 0.45 -
                        camera.position.x
                    ) *
                    0.025;

                camera.position.y +=
                    (
                        -mouseY * 0.35 -
                        camera.position.y
                    ) *
                    0.025;

                camera.lookAt(
                    0,
                    0,
                    -4
                );
            } else {
                camera.position.z +=
                    (
                        12 -
                        camera.position.z
                    ) *
                    0.035;

                camera.position.x +=
                    (
                        mouseX * 0.45 -
                        camera.position.x
                    ) *
                    0.025;

                camera.position.y +=
                    (
                        -mouseY * 0.35 -
                        camera.position.y
                    ) *
                    0.025;

                camera.lookAt(
                    0,
                    0,
                    0
                );
            }

            /*
             * --------------------------------------------------
             * SMOOTH HERO HANDOFF
             * --------------------------------------------------
             */

            if (
                debrisProgress >=
                heroTransitionPoint &&
                !transitionStarted
            ) {
                transitionStarted = true;

                if (
                    typeof onTransitionStartRef.current ===
                    "function"
                ) {
                    onTransitionStartRef.current();
                }
            }

            /*
             * --------------------------------------------------
             * FINISH
             * --------------------------------------------------
             */

            if (
                elapsed >=
                totalDuration &&
                !completed
            ) {
                camera.position.z = 4;

                camera.position.x = 0;
                camera.position.y = 0;

                camera.lookAt(
                    0,
                    0,
                    -4
                );

                debrisMaterial.uniforms.uOpacity.value =
                    0;

                flash.visible = false;

                completed = true;

                if (
                    typeof onCompleteRef.current ===
                    "function"
                ) {
                    onCompleteRef.current();
                }
            }

            renderer.render(
                scene,
                camera
            );
        };

        animate();

        /*
         * --------------------------------------------------
         * CLEANUP
         * --------------------------------------------------
         */

        return () => {
            if (
                animationId !== null
            ) {
                cancelAnimationFrame(
                    animationId
                );
            }

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            window.removeEventListener(
                "resize",
                handleResize
            );

            starGeometry.dispose();
            starMaterial.dispose();

            planetGeometry.dispose();
            planetMaterial.dispose();

            atmosphereGeometry.dispose();
            atmosphereMaterial.dispose();

            rings.forEach(
                (ring) => {
                    ring.geometry.dispose();
                    ring.material.dispose();
                }
            );

            debrisGeometry.dispose();
            debrisMaterial.dispose();

            flashMaterial.dispose();

            purpleGlowMaterial.dispose();
            purpleGlowMaterial2.dispose();

            particleTexture.dispose();

            renderer.dispose();
        };
    }, []);

    return (
        <section className="cosmic-intro">
            <canvas
                ref={canvasRef}
                className="hero-canva"
            />
        </section>
    );
};

export default CosmicIntro;