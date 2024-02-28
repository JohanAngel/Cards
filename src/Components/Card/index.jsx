const Card = ({foot, imageUrl, title, place, price}) =>{
    return (
        <div className="flex flex-col cursor-pointer w-60 h-64 rounded-lg gap-2 bg-gray-200 mb-10">
            
            <div className="w-full h-10">
                <span className="negrilla font-light text-black-100 text-lg">{place}</span>
            </div>
            
            <div>
                <figure>
                    <img  className="" src={imageUrl} alt={title} />
                </figure>
            </div>
           
            <div className="w-full h-10 ">
                <span className="text-lg font-medium">COP{price}</span>
            </div>
        </div>
    )
}

export default Card