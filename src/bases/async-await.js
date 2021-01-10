const getImage = async() => {

    try {
        const apiKey = 'xF8HkDEQfBRXAT3AneRNrUawqyM5yvEa';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const { data } = await resp.json();

        const { url } = data.images.original;
        const imagen = document.createElement('img');
        imagen.src = url;
        document.body.append(imagen);
    } catch (error) {
        // manejo de error
        console.log(error)
    }

}

getImage();