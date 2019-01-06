document.addEventListener('DOMContentLoaded', function() {

  const statusText = document.getElementsByClassName('status');
  const lightswitch = document.getElementByTagName('button');
  const light = document.getElementsByClassName('light');

  lightswitch.addEventListener('click', function() {
    if (lightswitch.className === 'switch off') {
      lightswitch.className = 'switch on';
      light.className = 'light';
      statusText.innerText = "It's so bright in here!";
    } else if (lightswitch.className === 'switch on') {
      lightswitch.className = 'switch off';
      light.className = 'dark';
      statusText.innertext = 'Hey, who turned off the lights?';
    }
  });
});
