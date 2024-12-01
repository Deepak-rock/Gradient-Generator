// Write your code here
import {DirectionItem, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, directionChange, isActive} = props
  const {displayText, value} = directionDetails

  const onClickDirection = () => {
    directionChange(value)
  }

  return (
    <DirectionItem>
      <CustomButton
        type="button"
        onClick={onClickDirection}
        isActive={isActive}
      >
        {displayText}
      </CustomButton>
    </DirectionItem>
  )
}
export default GradientDirectionItem
