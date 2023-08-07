/* 
  Async iteration and generators
  ------------------------------

  Async iteration allow us to iterate over data that comes asynchronously, 
  on-demand.

  Like for example when we download something chunk-by-chunk over a network.

  Async generators make it even more convenient. 

  Recall iterators
  ----------------

  The ideea is that when we have an object, and we want to iterate over it, 
  with for...of we need to implement [Symbol.iterator]() method into the 
  object. 

  Async iterables
  ---------------

  Asynchronous iteration is needed obviously when values come asynchronously,
  like after setTimeout or another kind of delay. 

  To make an object iterable asynchronously: (*)
  1. Use Symbol.asyncIterator instead of Symbol.iterator
  2. The next() should return a promise(to be fulfilled with the next value)
     - The async keyword handles it, we can simply make async next()
  3. To iterate over such an object, we should use a
      for await(let item of iterable) loop
     - Note the await word  
*/

// *

let range = {
  from: 1,
  to: 5,

  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,

      async next() {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (this.current <= this.last) {
          return {
            done: false,
            value: this.current++,
          };
        } else {
          return { done: true };
        }
      },
    };
  },
};

(async () => {
  for await (let value of range) {
    console.log(value);
  }
})();

/* 
  The spread syntax doesn't work asynchronously, because spread operator
  expects a Symbol.iterator to work with. 

  Async generators(finally)
  -------------------------

  In regular generators we can't use await, all values must come synchro-
  nously, as required by for...of construct. 

  For most practical applications, when we'd like to make an object that
  asynchronously generates a sequence of values, we can use asynchronous
  generator. 

  The syntax is simple:  (*)
  - prepend function* with async
  - use 'for await() {}' to iterate over it

  In an async generator, to get the value(promise), we should:
    result = await generator.next()
*/

// *

async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    yield i;
  }
}

(async () => {
  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    console.log(value);
  }
})();
