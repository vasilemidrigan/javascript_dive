/* 
    Fetch: Download progress
    ------------------------

    The fetch method allow to track download progress. 

    The upload progress though, can't be tracked with fetch, but it can with 
    XMLHttpRequest.

    Unlike response.json() or response.text(), response.body gives full control
    over the reading process, so we can count how much is consumed at any moment.


*/

// *

async function getData() {
  // 1. start the fetch and obtain a reader
  let response = await fetch(
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100"
  );

  const reader = response.body.getReader();

  // 2. get total length
  const contentLength = +response.headers.get("Content-Length");

  // 3. read the data
  let receivedLength = 0;
  let chunks = [];
  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    chunks.push(value);
    receivedLength += value.length;

    console.log(`Received ${receivedLength} of ${contentLength}`);
  }

  // 4. concatenate chunks into single Uint8Array
  let chunksAll = new Uint8Array(receivedLength);
  let position = 0;
}

getData();
