import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  font-size: ${(props) => (props.fontSize ? +'px' : '14px')};
  line-heigth: 22px;
`
