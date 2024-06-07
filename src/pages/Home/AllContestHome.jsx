import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";


const AllContestHome = () => {

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
            <label className="input input-bordered rounded-3xl flex items-center my-8 gap-2 w-1/2 mx-auto">
                <input type="text" className="grow" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 ">
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

export default AllContestHome;