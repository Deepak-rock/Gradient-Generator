// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientColor});
`
export const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 1100px;
`
export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 36px;
  font-family: 'roboto';
  font-weight: bold;
  text-align: center;
  color: #ededed;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`
export const CustomPara = styled.p`
  font-size: 18px;
  text-align: center;
  color: #ededed;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const DirectionList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  list-style-type: none;
`
export const PickColor = styled.p`
  font-size: 18px;
  text-align: center;
  color: #ededed;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const PickColorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 20px 0 50px 0;
  @media screen and (min-width: 768px) {
    gap: 150px;
  }
`
export const FromColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FromLabel = styled.label`
  font-size: 18px;
  font-family: 'roboto';
  color: #ededed;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const FromColor = styled.input`
  height: 100px;
  width: 150px;
  border: none;
  outline: none;
  background: none;
`
export const ToColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ToLabel = styled.label`
  font-size: 18px;
  font-family: 'roboto';
  color: #ededed;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const ToColor = styled.input`
  height: 100px;
  width: 150px;
  border: none;
  outline: none;
  background: none;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px 30px;
  cursor: pointer;
  color: #1e293b;
  font-size: 18px;
  font-family: 'roboto';
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
