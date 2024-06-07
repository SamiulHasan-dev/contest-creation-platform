import { Link, useLoaderData } from "react-router-dom";


const ContestDetails = () => {
    const contests = useLoaderData();
    console.log(contests);


    return (
        <div className="max-w-5xl mx-auto my-14">
            <h2 className="text-center font-bold text-3xl mt-5 mb-14">Details Contest</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="flex items-center flex-col md:flex-row">
                <figure><img src={contests.contestImage} className="rounded-lg"  alt="Album" /></figure>
                <div>
                <div className="card-body space-y-4">
                    <h2 className="card-title font-extrabold">{contests.contestName}</h2>
                    <p><span className="font-bold text-base">Contest Type: </span> {contests.contestType}</p>
                    <p><span className="font-bold text-base">Contest DeadLine :</span> {contests.contestDeadLine}</p>
                    <p><span className="font-bold text-base">Contest Prize:</span> ${contests.priceMoney}</p>

                    <div className="card-actions">
                        <p><span className="font-bold text-base underline">Contest Added By:</span> {contests.name} </p>
                        <p><span className="font-bold text-base underline">participantCount: </span> {contests.participantCount}</p>

                    </div>
                    <p><span className="font-bold text-base underline">Details:</span> {contests.contestDescription} </p>
                    <div className="text-center">
                        <Link /* to={`/recommendationForm/${contests._id}`} */><button className="btn bg-[#2d3142] text-white w-full" >REGISTRATION</button></Link>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ContestDetails;