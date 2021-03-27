export interface IPrimeraApp {
    saludo: string;
    subtitulo: string;
}


const PrimeraAPP = ({ saludo, subtitulo }: IPrimeraApp) => {

    return (
        <>
            <h1>{saludo}!!!</h1>
            <p>{subtitulo}</p>
        </>
    );

}


export default PrimeraAPP;