import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import {router} from "next/client";

export default function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            await createUserWithEmailAndPassword(auth, email, password).then(()=>{
                setSuccess("Account created successfully! You can now log in.");
                setEmail("");
                setPassword("");
                router.push("/");
            })

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSignUp} className={"flex flex-col items-center justify-center px-40 py-60 border rounded-md"}>
            <h3 className={"text-2xl mb-8"}>Sign Up</h3>
            <input
                type="email"
                placeholder="Email"
                value={email}
                className={"w-full border p-4"}
                onChange={(e) => setEmail(e.target.value)}
            /><br/>
            <input
                type="password"
                placeholder="Password"
                value={password}
                className={"w-full border p-4"}
                onChange={(e) => setPassword(e.target.value)}
            /><br/>
            <button className={"border px-4 py-2 cursor-pointer rounded-2xl bg-amber-500 text-white"} type="submit">Sign Up</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
    );
}
