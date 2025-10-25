import React, {FC, FormEvent, useState} from "react";
import {useRouter} from "next/router";

const LoginPage:FC = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("form submitted")
        router.push("/search")
    }
    return (
        <div className={"flex justify-center flex-col border rounded-sm py-10 px-40"}>
            <div className={"my-4 text-2xl font-bold flex justify-center"}>TM</div>
           <form onSubmit={handleSubmit} className={"flex flex-col items-center gap-4 px-4"}>
               <input type="text" className="border border-gray-200 p-2 w-full" placeholder="User Name"  />
               <input type="text" className="border border-gray-200 p-2 w-full" placeholder="Password" />
               <button className="border rounded-md px-4 py-2 bg-amber-500 cursor-pointer" type="submit">Submit</button>
           </form>
        </div>
    )
}
export default LoginPage;