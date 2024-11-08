export default function NavBar({ onBackClick, selectedMood}) {
    return (
        <>
            <div className="navbar center-container mt-4 bg-slate-100/5 py-2 my-2 rounded-[15px] shadow-xl ">
            <div className="navbar-start">
                <button onClick={onBackClick} className="text-3xl btn btn-ghost btn-circle">
                ⛩️ 
                </button>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">

                <h1>{selectedMood ? selectedMood : 'Mood2Anime'}</h1>


                </a>
            </div>
            <div className="navbar-end">
                <button onClick={onBackClick} className="btn btn-ghost btn-circle">
                    <svg height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#ffffff"></path> </g></svg>
                </button>
                
            </div>
            </div>
        </>
    )
}
