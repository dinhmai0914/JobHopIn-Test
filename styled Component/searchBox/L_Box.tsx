import styled from 'styled-components'

export const SCLBox = ({className, children, ...restProps})=>(
<a className={className}> {children}</a>
)

export const L_Box = styled(SCLBox)`
width: 400px
`