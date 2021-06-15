Stuff used:
1. JavaScript
2. WebVR: API for obtaining information from VR devices (device capabilities, device information)
3. WebGL
4. Three.js
5. Device Orientation: Information about mobile rotation, acceleration, compass etc
6. GamePad API
7. Web Audio API

# WebVR
- Obtain device compatibility and positioning information
- Display content via WebGL
- navigator.getVRDisplay() --> Entry point
- navigator.getVRDevices() --> to check if there are VR compatible devices
- Security Features: only present in response to a user action(UA)

# WebGL
- JavaScript API used to render 2D and 3D content in browsers via HTML5 Canvas
- Based on OpenGL|ES (ES --> Embedded Systems)

# Three.js 
-  Used to develop WebGL Experiences

# Device Orientation Events
- Device Orientation
    - Alpha: z-axis (rotating the phone)
    - Beta: x-axis (tipping the phone towards or away)
    - Gamma: y-axis (tilting the phone left or right)

- Device Motion
    - Acceleration in m/(s^2)
    - Acceleration including gravity
    - Rotation Rate in degrees per second
    - Interval in milliseconds 

- Compass Needs Calibration (not widely supported)



