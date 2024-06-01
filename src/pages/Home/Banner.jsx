

const Banner = () => {
    return (
        <div>
            <h1 className="text-4xl font-extrabold text-center mt-28 mb-14">Online Contests & Competitions</h1>
            <div className="flex flex-col md:flex-row items-center gap-6 my-9">
                <div className="flex-1 p-5 ">
                    <h3 className="text-3xl font-extrabold"><span className="text-[#1bc5bd]">Grow and reward your communities with online</span> competitions. Drive engagement, increase subscribers, build loyalty.</h3>
                </div>
                <div className="flex-1 p-5">
                    <img className="rounded-lg" src="https://static.drimify.com/wp-content/uploads/2023/02/online-contests-1-800x500.jpg?220823" alt="" />
                </div>
            </div>
            <label className="input input-bordered rounded-3xl flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
        </div>
    );
};

export default Banner;