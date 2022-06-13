import styled from 'styled-components'

export const Nav = ({className, children, ...restProps})=>(
<a className={className}> {children}</a>
)
const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;
export const SearchBoxNav = styled(Nav)`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
padding: 24px 64px 24px 96px;
color: #fff;
background-color: #1a658f;
position: relative;
border-radius: 8px;
margin: 24px 65px 48px;

`