export default function LoginBox(){
    return <>
        <form action="get">
                <video src="../assets/video.mp4">
                    <source src="../assets/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="flex flex-col justify-align text-center">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <input type="text" placeholder="Username" className="mb-2 p-2 border rounded" />
                    <input type="password" placeholder="Password" className="mb-4 p-2 border rounded" />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-slate-500">Login</button>
                </div>
        </form>
    </>
}