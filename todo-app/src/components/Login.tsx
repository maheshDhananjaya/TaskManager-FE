import React, {FC, FormEvent, useState} from "react";
import {useRouter} from "next/router";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/lib/firebase";
import Link from "next/link";

const LoginPage: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password).then(() => {
                router.push("/search")
            });

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={"flex justify-center flex-col border rounded-sm py-10 px-40"}>
            <div className={"my-4 text-2xl font-bold flex justify-center"}>TM</div>
            <form onSubmit={handleSubmit} className={"flex flex-col items-center gap-4 px-4"}>
                <input type="text" className="border border-gray-200 p-2 w-full" placeholder="User Email" value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" className="border border-gray-200 p-2 w-full" placeholder="Password"
                       value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="border rounded-md px-4 py-2 bg-amber-500 cursor-pointer" type="submit">Submit
                </button>
            </form>
            <div className={"flex flex-row justify-between"}>
                <Link href="/sign-up" className={""}>
                <span className={"text-md text-red-500 underline"}>sing up</span>
                </Link>
                <Link href="/forget-password">
                <span className={"text-red-500 text-md underline"}>forget password?</span>
                </Link>
            </div>
        </div>
    )
}
export default LoginPage;