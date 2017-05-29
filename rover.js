marsGrid: [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

var rover = {
  position: [0, 0],
  direction: 'N',
};

function rotateRover(direction) {
  switch (direction) {
    case 'r':
      if (rover.direction == 'N') {
        rover.direction = 'E';
      } else if (rover.direction == 'S') {
        rover.direction = 'W';
      } else if (rover.direction == 'E') {
        rover.direction = 'S';
      } else if (rover.direction == 'W') {
        rover.direction = 'N';
      }

      break;
    case 'l':
      if (rover.direction == 'N') {
        rover.direction = 'W';
      } else if (rover.direction == 'S') {
        rover.direction = 'E';
      } else if (rover.direction == 'E') {
        rover.direction = 'N';
      } else if (rover.direction == 'W') {
        rover.direction = 'S';
      }

      break;
  }

}

function moveRover(command) {
  switch (command) {
    case 'f':
      rover.position[0]++;
      break;
    case 'r':
      rotateRover(command);
      break;
    case 'b':
      rover.position[0]--;
      break;
    case 'l':
      rotateRover(command);
      break;
  }
}

function getStatus() {
  var status = 'New Rover Position: [' + rover.position[0] + ', ';
  status += rover.position[1] + '] New Rover Direction: ' + rover.direction;
  return status;
}

console.log(getStatus());
moveRover('f');
console.log(getStatus());
moveRover('b');
console.log(getStatus());
moveRover('l');
console.log(getStatus());
moveRover('r');
console.log(getStatus());
moveRover('b');
console.log(getStatus());
moveRover('l');
console.log(getStatus());
