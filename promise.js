Promise.all, Promise.allSettled, Promise.race, and Promise.any 👇

🔹 1. Promise.all()
📌 What it does:
Waits for all promises to resolve
If any promise rejects, it immediately rejects

✅ Use when:
You need all results, and failure of one means failure of all.
  
Example:
Promise.all([
  Promise.resolve(10),
  Promise.resolve(20),
  Promise.resolve(30)
])
.then(result => console.log(result))
.catch(err => console.log(err));

Output:
[10, 20, 30]

❌ If one fails:

Promise.all([
  Promise.resolve(10),
  Promise.reject("Error"),
  Promise.resolve(30)
])

➡ Rejects with "Error"

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
🔹 2. Promise.allSettled()
📌 What it does:

Waits for all promises to finish
Returns results even if some fail
Never rejects

✅ Use when:
You want status of all promises, success or failure.

Example:
Promise.allSettled([
  Promise.resolve(10),
  Promise.reject("Error"),
  Promise.resolve(30)
])
.then(result => console.log(result));

Output:
[
  { status: "fulfilled", value: 10 },
  { status: "rejected", reason: "Error" },
  { status: "fulfilled", value: 30 }
]

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
🔹 3. Promise.race()
📌 What it does:
Returns the first settled promise
Can be resolve or reject

✅ Use when:
You want the fastest response.

Example:
Promise.race([
  new Promise(res => setTimeout(() => res("Fast"), 100)),
  new Promise(res => setTimeout(() => res("Slow"), 500))
])
.then(result => console.log(result));

Output:
Fast

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
🔹 4. Promise.any()
📌 What it does:

Returns the first fulfilled promise
Ignores rejected promises
Rejects only if all promises fail

✅ Use when:
You need at least one successful result.

Example:
Promise.any([
  Promise.reject("Error 1"),
  Promise.resolve("Success"),
  Promise.reject("Error 2")
])
.then(result => console.log(result))
.catch(err => console.log(err));

Output:
Success


❌ If all fail:

Promise.any([
  Promise.reject("A"),
  Promise.reject("B")
])

➡ Rejects with AggregateError
