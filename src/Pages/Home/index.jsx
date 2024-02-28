import Card from "../../Components/Card"
const restaurants = [
                    { foot: "Sea food restaurant", imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/29/ac/3d/c5/la-mejor-comida-de-mar.jpg", title: 'Comida Rápida', place: "Pesqueria jaramillo", price:"100.000" },
                    { foot: "Sea food restaurant", imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/29/ac/3d/c5/la-mejor-comida-de-mar.jpg", title: 'Comida Rápida', place: "Pesqueria jaramillo", price:"100.000"},
                    { foot: "Sea food restaurant", imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/29/ac/3d/c5/la-mejor-comida-de-mar.jpg", title: 'Comida Rápida', place: "Pesqueria jaramillo", price:"100.000"}
                ]
function Home() {
    return(
        <div className="mt-10">
            {restaurants.map(element => (
                <Card foot={element.foot} imageUrl={element.imageUrl} title={element.title} place={element.place} price={element.price} />
            ))}
        </div>
    )
}

export default Home