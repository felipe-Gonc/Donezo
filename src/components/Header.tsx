export const Header =()=>{
    return (
        <div className="bg-blue-300 w-52 flex p-3 h-full flex-col items-center gap-6 rounded-2xl">
            <h2
                className="font-bold text-3xl"
            >Donezo</h2>

            <div>
                <button className="bg-blue-400 border-2 border-blue-500 rounded-lg px-3 py-2">ADD</button>
            </div>
        </div>
    )
}