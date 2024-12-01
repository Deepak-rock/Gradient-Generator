// Style your elements here
import styled from 'styled-components'

export const DirectionItem = styled.li`
  padding: 10px;
`
export const CustomButton = styled.button`
  color: ${props => (props.isActive ? '#334155' : '#1e293b')}
  background-color: #ffffff;
  border: none;
  outline: none;
  width: 200px;
  height: 65px;
  opacity: ${props => (props.isActive ? '1' : '0.5')};
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  font-family; 'roboto';
`
