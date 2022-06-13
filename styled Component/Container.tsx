import styled from 'styled-components'

const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;


export const Container = styled.div`
padding:0;
`