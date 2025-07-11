import { useForm } from "react-hook-form";
export default function LoginBox(){
    const {register, handleSubmit, formState: {errors}} = useForm();
    const fn = (data: any) => {
        console.log(data);
        // Handle login logic here
    }
    return <>
        <form onSubmit={handleSubmit(fn)}>
                <div className="flex flex-col justify-align text-center">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <input type="text" placeholder="Username" {...register} className="mb-2 p-2 border rounded" />
                    <input type="password" placeholder="Password" className="mb-4 p-2 border rounded" />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-slate-500">Login</button>
                </div>
        </form>
    </>
}