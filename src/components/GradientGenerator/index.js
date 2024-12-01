import {Component} from 'react'
import {
  AppContainer,
  ResponsiveContainer,
  GradientGeneratorContainer,
  Heading,
  CustomPara,
  DirectionList,
  PickColor,
  PickColorContainer,
  FromColorContainer,
  FromLabel,
  FromColor,
  ToColorContainer,
  ToColor,
  ToLabel,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    fromColor: '#8ae323',
    toColor: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    gradientColor: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  onClickGenerateColor = () => {
    const {fromColor, toColor, activeDirection} = this.state
    this.setState({
      gradientColor: `to ${activeDirection}, ${fromColor} ,${toColor}`,
    })
  }

  onChangeDirection = direction => {
    this.setState({activeDirection: direction})
  }

  render() {
    const {fromColor, toColor, gradientColor, activeDirection} = this.state
    return (
      <AppContainer gradientColor={gradientColor}>
        <ResponsiveContainer>
          <GradientGeneratorContainer>
            <Heading>Generate a CSS Color Gradient</Heading>
            <CustomPara>Choose Direction</CustomPara>
            <DirectionList>
              {gradientDirectionsList.map(eachDirection => (
                <GradientDirectionItem
                  key={eachDirection.directionId}
                  directionDetails={eachDirection}
                  directionChange={this.onChangeDirection}
                  isActive={eachDirection.value === activeDirection}
                />
              ))}
            </DirectionList>
            <PickColor>Pick the Color</PickColor>
            <PickColorContainer>
              <FromColorContainer>
                <FromLabel>{fromColor}</FromLabel>
                <FromColor
                  type="color"
                  value={fromColor}
                  onChange={this.onChangeFromColor}
                />
              </FromColorContainer>
              <ToColorContainer>
                <ToLabel>{toColor}</ToLabel>
                <ToColor
                  type="color"
                  value={toColor}
                  onChange={this.onChangeToColor}
                />
              </ToColorContainer>
            </PickColorContainer>
            <GenerateButton type="button" onClick={this.onClickGenerateColor}>
              Generate
            </GenerateButton>
          </GradientGeneratorContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default GradientGenerator
