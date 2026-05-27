


const Button = ({text,className}) => {
  return (
    <div>
        <button className={`bg-view cursor-pointer text-16px font-medium font-poping py-16px px-48px text-secondary rounded-4px ${className}`}>{text}</button>
    </div>
  )
}

export default Button