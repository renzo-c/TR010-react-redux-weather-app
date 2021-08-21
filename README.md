# Simple weather forecast for Canadian cities

This is a proof of concept that implements a basic weather forecast by using redux as the state manager 

See the <a href="https://grid-photo-gallery.netlify.app" target="_blank">Demo</a>

<p align="center">
  <img align="center" width="295" height="180" src="/src/utils/images/screen.png">
</p>

## Libraries:
- redux: To implement the centralized state manager
- redux-promise: To handle async requests within actions
- material-ui: For building the UI
- axios: For HTTP post requests
- react-sparklines: To draw the charts
## Tools:
- OpenWeather API: To get temperature, pression, and humidity values of each city
- Goggle Maps API: To show each city map
- Hook useRef: To get the div in which the maps is going to be rendered
