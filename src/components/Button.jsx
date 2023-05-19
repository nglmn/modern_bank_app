
const Button = ({ styles }) => {
    return (
        <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-black outline-none rounded-xl ${styles}`} >
            Get Started
        </button >
    )
}

export default Button