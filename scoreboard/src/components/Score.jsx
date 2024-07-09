import { useState } from "react";

const Score = () =>{

    const [point, setPoint] = useState(0);

    const updatePointsby1 = event =>{
        setPoint(point+1);
    }

    const updatePointsby2 = event =>{
        setPoint(point+2);
    }

    const updatePointsby3 = event =>{
        setPoint(point+3);
    }


    return (
        
        <div>
            
            <div className="mt-3 text-center">
                <div className="bg-black h-[7rem] w-[9rem] content-center">
                    <div className="text-white text-7xl">
                        <h1 className="">
                            {point}
                        </h1>
                    </div>
                </div>        
            </div>

    
            <div>
                <div className="font-sans text-[15px] text-gray-600 flex mt-3 content-center justify-between">
                    <button className="border-2 border-gray-600 rounded-md py-1 px-2" onClick={updatePointsby1}>+1</button>
                    <button className="border-2 border-gray-600 rounded-md py-1 px-2" onClick={updatePointsby2}>+2</button>
                    <button className="border-2 border-gray-600 rounded-md py-1 px-2" onClick={updatePointsby3}>+3</button>
                </div>
            </div>
        </div>
    )
}

export default Score;   