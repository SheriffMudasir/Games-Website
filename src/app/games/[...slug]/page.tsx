import { games } from "@/data/games";
import { FaCalendarAlt, FaGamepad, FaStar } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa6";



const GamesPage = async ({ params }: { params: { slug: string[] } }) => {

    const { slug } = await params;
    const [category, gameSlug] = slug;

    const game = games.find((game) => game.slug === gameSlug && game.category === category)

    if (!game) {
        return <h1>Game not found</h1>
    }

    return <div className="max-w-7xl mx-auto p-6">
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
            <img className="w-full h-full object-cover " src={game.image} alt={game.title} />
            <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center hover:opacity-30   transition ">
                <h1 className="text-5xl font-bold text-white  text-center">{game.title}</h1>
            </div>
        </div>
        <div className="mt-8 space-y-6">
            <p className="text-lg text-gray-400 leading-relaxed">{game.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
                <div className="flex items-center bg-gray-800 p-4 rounded-lg">
                    <FaStar className="text-yellow-500 mr-2" />
                    <span>Rating: {game.rating}</span>
                </div>
                <div className="flex items-center bg-gray-800 p-4 rounded-lg">
                    <FaCalendarAlt className="mr-2" />
                    <span>Realease Date: {game.releaseDate}</span>
                </div>
                <div className="flex items-center bg-gray-800 p-4 rounded-lg">
                    <FaGamepad className="mr-2" />
                    <span>Developer: {game.developer}</span>
                </div>
                <div className="flex items-center bg-gray-800 p-4 rounded-lg">
                    <FaDesktop className="mr-2" />
                    <span>Platform: {game.platforms.join(", ")}</span>
                </div>

            </div>
        </div>
    </div>





}

export default GamesPage