console.log("OK")

const endpoint = "https://reqres.in/api/users"
fetch(endpoint, {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({
        email: "aaa@gmail.com",
        firstName: "hehehe33333333",
    }),
})
    .then((result) => result.json())
    .then((data) => console.log(data)) 