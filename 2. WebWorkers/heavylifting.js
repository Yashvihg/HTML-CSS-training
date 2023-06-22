let largeArray = [];
onmessage = function (msgFromMainThread) {
  console.log(msgFromMainThread.data);
  for (let i = 0; i < 10000; i++) {
    largeArray[i] = [];
    for (let j = 0; j < 10000; j++) {
      largeArray[i][j] = Math.random();
    }
  }
  postMessage(largeArray[3000][3000]);
};
