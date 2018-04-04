const fetchHelloDataFromAPI = () => {
    fetch('http://localhost:3000/test/helloclient', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then( (response) => {
        console.log("Fetch response:", response)
        return response.text();
    })
    .then( (text) => {
        console.log(text);
    });
}