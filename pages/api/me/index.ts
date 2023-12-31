export default function(req, res) {
    const miNombre:string = "Samay";
    console.log("Soy la api", miNombre)
    res.send(miNombre)
}