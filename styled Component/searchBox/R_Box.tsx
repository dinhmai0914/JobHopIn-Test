import styled from 'styled-components'

export const SCRBox = ({className, children, ...restProps})=>(
<a className={className}> {children}</a>
)

export const R_Box = styled(SCRBox)`
width: 600px
`