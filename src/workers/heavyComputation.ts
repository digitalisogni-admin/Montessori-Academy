// This is a mock Web Worker demonstrating offloading an expensive task
// like sorting a massive dataset or grading an essay locally without blocking the UI.

self.onmessage = (e: MessageEvent) => {
  const { type, data } = e.data;

  if (type === 'START_HEAVY_TASK') {
    // Simulate a very heavy computation
    console.log('Worker started heavy task with data:', data);

    // Blocking loop to mock heavy CPU usage
    let result = 0;
    for (let i = 0; i < 500000000; i++) {
      result += Math.sqrt(i);
    }

    // Post the result back to the main thread
    self.postMessage({ type: 'TASK_COMPLETE', result, message: 'Heavy computation finished in worker.' });
  }
};
