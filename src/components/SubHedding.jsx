import Flex from "../components/Flex"

const SubHedding = ({text,className}) => {
  return (
      <Flex className={`gap-16px items-center ${className}`}>
          <div className="w-20px h-40px rounded-4px bg-view"></div>
        <p className="text-view font-semibold text-16px font-poping">{text}</p>
      </Flex>
  )
}

export default SubHedding