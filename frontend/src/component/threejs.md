React
  │
  └── Canvas
       │
       └── Three.js
            │
            ├── Scene       → where things exist
            ├── Camera      → what we see
            ├── Renderer    → puts it on screen
            │
            └── Particles
                 ├── positions
                 ├── appearance
                 └── movement


BufferGeometry  → particle data/positions
BufferAttribute → tells Three.js how that data is arranged
PointsMaterial  → how particles look
Points          → turns that data + appearance into visible particles

STEP 1  → Get one particle on screen       ✅
STEP 2  → Get many particles
STEP 3  → Control their positions
STEP 4  → Generate text coordinates
STEP 5  → Make particles form "React.js"
STEP 6  → Break them apart
STEP 7  → Form "JavaScript"
STEP 8  → Repeat
STEP 9  → Add colors + polish