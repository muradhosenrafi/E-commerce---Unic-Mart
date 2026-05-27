

const ListItem = ({className,text}) => {
  return (
<li className={`cursor-pointer  font-normal font-poping text-16px ${className}`}>{text}</li>
  )
}

export default ListItem