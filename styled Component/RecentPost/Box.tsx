import styled from 'styled-components'

export const BoxSC = ({className, children, ...restProps})=>(
<a className={className}> {children}</a>
)

export const Box = styled(BoxSC)`


`