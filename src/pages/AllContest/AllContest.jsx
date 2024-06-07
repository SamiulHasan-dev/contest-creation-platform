import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const AllContest = () => {
    const axiosPublic = useAxiosPublic();
    const { data: contests = [] } = useQuery({
        queryKey: ['contests'],
        queryFn: async () => {
            const res = await axiosPublic.get('/contests');
            return res.data;
        }
    })

    return (
        <div>
            <h2 className="  font-bold my-9 text-3xl text-center w-full ">All Contest</h2>
            <div className="card shrink-0 w-full"></div>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        contests.map(item=> <div key={item._id} className="card bg-base-100 shadow-xl">
                            <figure><img className="h-64 w-72 p-4" src={item.contestImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.contestName}</h2>
                                <div className="flex justify-between">
                                <p>Participation Count: {item.participantCount}</p>
                                <p>Deadline: {item.contestDeadLine}</p>
                                </div>
                                <div className="">
                                <p>Description: {item.contestDescription}</p>
                                </div>
                                <div className="card-actions">
                                    <Link className="w-full" to={`/postDetails/${item._id}`}><button className="btn w-full bg-[#118acb] text-white">View Details</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default AllContest;