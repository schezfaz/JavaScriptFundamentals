# WebXR - Nik Lever

- https is required (secure site)

Three.js: WebGL Renderer (y-axis points up: EUS system | x(East) Y(Up) Z(South))

## Objects
- Defined using vertices
- Vertex: Vector Value
- Each vector has 3 values (x,y,z)
- in three.js Vector --> Vector3

**Object:** Vertices + Faces
**Cubes:** 8 vertices, 6 faces
**Normal:** vector3 property that stores the direction (usually of unit length)

**Face:** Material (colour, image mapping)

*UV MAPPING*: Vector2 value:
- Vector with 2 values:
  - U: how far left to right
  - V: up to down
Bottom left (0,0), top right (1,1)

## Shaders:
- Vertex Shader (converts all values to between -1 and 1)
- Fragment Shader (works at pixel level) - follows the vertex shader (i.e. it already has the vertices converted into clip based coordinates): calculates the pixel colour 

## Rendering Pipeline
Process of converting 3D data into 2D

## WebXR + Three.js
WebXR will generate viewer position and orientation, controller position and orientation and allow you to hit test on real world geometry. WebXR does not really render anything

Three.js makes WebGL (a low level API) easy to use. WebXRManager: Acts as a bridge between the three.js camera and the WebXR API
