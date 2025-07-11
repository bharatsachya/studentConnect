import LoginBox from "../components/LoginBox";
import {useForm} from "react-hook-form"

export default function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="flex flex-col justify-align text-center">
                    <LoginBox/>
                </div>
            </div>
        </div>
    )
}