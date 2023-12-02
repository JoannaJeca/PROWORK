import img from "../../assets/WhatsApp Image 2023-11-15 at 10.25.57_45d28857.jpg"
import { FcGoogle } from "react-icons/fc";
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import * as yup from "yup"

const Login = () => {
    const schema = yup.object({
        email: yup.string().email().required("must be filled"),
        password: yup.string().required("mustbe filled")
    })

    const {handleSubmit, register, formState: {errors}} = useForm({resolver: yupResolver(schema)})

    const onHandleSubmit = handleSubmit((data: any) =>{
        console.log(data)
    })

  return (
    <div>
      <div className="w-full h-[100vh] items-center justify-center flex">
        <form className=" rounded-lg shadow py-5 px-4 flex flex-col justify-center items-center shadow-green-400 w-[400px] min-h-[300px]" onSubmit={onHandleSubmit} >
            <div className="h-[100px]">
                <img className="h-full" src={img} />
            </div>

            <div className="text-[30px] w-full font-[400]">Log in</div>

            <div className="mt-2 w-full">
                <div>Email</div>
                <input className="w-full pl-4 outline-green-400 rounded-md h-[50px] border border-green-200" type="email" placeholder="Enter your email" 
                {...register("email")}
                />
                <div className="flex justify-end text-red-400">{errors.email?.message}</div>
            </div>

            <div className="mt-2 w-full">
                <div>Password</div>
                <input className="w-full pl-4 outline-green-400 rounded-md h-[50px] border border-green-200" type="passowrd" placeholder="Enter your password"
                {...register("password")}
                />
                <div className="flex justify-end text-red-400">{errors.password?.message}</div>
            </div>

            <button className="w-full h-[50px] mt-3 bg-green-600 rounded-md border-none text-white" type="submit">
                Log in
            </button>

            <div className="w-full text-[15px] mt-2">
                Forgot password
            </div>

            <div className="text-[12px] mt-1">
            By continuing with Google, Apple, or Email, you agree to Todoist's <span className="text-green-600">Terms</span> of Service and <span className="text-green-600">Privacy Policy</span>.
            </div>

            <div className="flex mt-4 items-center justify-between w-full">
                <hr className="w-40" />
                <div>or</div>
                <hr className="w-40" />
            </div>

            <div className="w-full rounded-md h-[45px] border flex items-center justify-center">
                <div className="text-[20px] mr-2">
                    <FcGoogle/>
                </div>
                <div className="font-[600]">Continue with Google</div>
            </div>

            <div></div>
        </form>
      </div>
    </div>
  )
}

export default Login
