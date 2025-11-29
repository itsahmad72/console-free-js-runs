
'use client'
import { useState } from "react";
import { SERIALIZE_OUTPUT } from "./helpers";

export default function Playground() {
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");

    const runCode = () => {
        try {
            const result = code == '' ? code : eval(code);
            setOutput(SERIALIZE_OUTPUT(result));
        } catch (err: any) {
            setOutput(`Error: ${err.message}`);
        }
    };

    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            <div>
                Console Free JS Runs.
                <textarea
                    className="w-full text-blue-900/80 mt-2 h-100 p-2 rounded bg-secondary font-mono"
                    value={code}
                    placeholder="Enter Input here"
                    onChange={(e) => setCode(e.target.value)}
                />
                <button
                    className="px-4 btn push mt-2 w-full py-2 text-white rounded"
                    onClick={runCode}
                >
                    One-Click Run
                </button>
            </div>
            <div>
                Output
                <div className={`${output?.startsWith('Error:') ? 'text-red-600':'text-white/80'} p-2 font-bold mt-2 bg-[#1d1e23] h-100 rounded font-mono`}>
                    {output}
                </div>
            </div>
        </div>
    );
}
