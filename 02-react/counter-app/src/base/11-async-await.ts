
export const getImagen: () => Promise<string> = async() => {

    try {

        const apiKey = 'ellosIXkWQTUkPvCR5qalQYT1ct1rs1f';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
    }
    
    
    
}


