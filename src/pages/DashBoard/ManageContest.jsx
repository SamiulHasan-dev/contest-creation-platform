import { useQuery } from "@tanstack/react-query";
import { FaRegCommentDots, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageContest = () => {
    const axiosSecure = useAxiosSecure();
    const { data: contests = [], refetch } = useQuery({
        queryKey: ['contests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/contests');
            return res.data;
        }
    });

    const [selectedContest, setSelectedContest] = useState(null);

    const handleComment = async(event) => {
        event.preventDefault();
        if (!selectedContest) return;

        const form = event.target;
        const adminComment = form.adminComment.value;
        const newComment = { adminComment };

        try {
            const menuRes = await axiosSecure.patch(`/adminComment/${selectedContest._id}`, newComment);
            if (menuRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Contest Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
            }
        } catch (error) {
            console.error('Failed to update contest:', error);
            Swal.fire({
                position: "center",
                icon: "error",
                title: 'Failed to update contest',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }


    const handleConfirm = async(contest) =>{

        const status = 'confirm';
        const newStatus = { status };

        try {
            const menuRes = await axiosSecure.patch(`/status/${contest._id}`, newStatus);
            if (menuRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Contest confirmed Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
            }
        } catch (error) {
            console.error('Failed to update contest:', error);
            Swal.fire({
                position: "center",
                icon: "error",
                title: 'Failed to update contest',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    const handleDeleteContest = contest => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/contests/${contest._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h2 className="text-4xl font-extrabold my-2">Manage Contest {contests.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Contest Name</th>
                                <th>Type</th>
                                <th>Comment</th>
                                <th>Confirm</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contests.map((contest, index) => (
                                    <tr key={contest._id}>
                                        <th>{index + 1}</th>
                                        <td>{contest.contestName}</td>
                                        <td>{contest.contestType}</td>
                                        <td>
                                            <button
                                                className="btn btn-accent"
                                                onClick={() => {
                                                    setSelectedContest(contest);
                                                    document.getElementById('my_modal_5').showModal();
                                                }}
                                            >
                                                <FaRegCommentDots className="text-xl" />
                                            </button>
                                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box">
                                                    <h3 className="font-bold text-lg">Comment Here</h3>
                                                    <form onSubmit={handleComment}>
                                                        <input
                                                            className="input input-bordered mt-2 w-full"
                                                            placeholder="Type Here"
                                                            type="text"
                                                            name="adminComment"
                                                            required
                                                        />
                                                        <input className="btn mt-2 btn-accent text-white" type="submit" value="Submit" />
                                                    </form>
                                                    <div className="modal-action">
                                                        <form method="dialog">
                                                            <button className="btn">Close</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </td>

                                        <td>
                                            {
                                                contest.status === 'confirm' ? "Confirm" : 
                                                <button className="btn" onClick={()=>handleConfirm(contest)}>pending</button>
                                            }
                                            
                                        </td>

                                        <td>
                                            <button
                                                onClick={() => handleDeleteContest(contest)}
                                                className="btn btn-error btn-md"
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageContest;
