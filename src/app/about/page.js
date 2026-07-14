export default function About(){
    return (
        <div className="m-2">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-3 gap-2 ">
                <div className="bg-green-200 col-span-2 aspect-[2/1]">
                    WHO AM I
                </div>
                <div className="bg-orange-200 aspect-square">
                    PHOTO
                </div>
                <div className="bg-gray-200 aspect-square">
                    EDUCATION
                </div>
                <div className="bg-red-200 aspect-square">
                    AWS CERTIFIED
                </div>
                <div className="bg-yellow-200 aspect-square">
                    DRUM CORPS INTERNATIONAL
                </div>
                <div className="bg-indigo-200 aspect-square">
                    PERCUSSION INSTRUCTOR
                </div>
                <div className="bg-blue-400 col-span-2 aspect-[2/1]">
                    CURRENTLY LOOKING FOR
                </div>
            </div>
        </div>
    )
}