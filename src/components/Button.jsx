export default function Button({ onClick ,disabled, className, text}) {
    return (
        <>
            <button type="button" onClick={onClick} disabled={disabled} className={`${className}  btn btn-primary`} >
                <p className="text-white lg:text-base md:text-md text-sm font-bold uppercase">
                    {text}
                </p>
            </button>
        </>
    )
}