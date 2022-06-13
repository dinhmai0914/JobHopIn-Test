import styled from 'styled-components'

export const RowSC = ({className, children, ...restProps})=>(
<a className={className}> {children}</a>
)

export const Container = styled(RowSC)`
  display: inline-grid;
  grid-template-columns: auto auto;
  margin-left: 65px;
  margin-right:40px;
  margin-top: 20px;
  min-width: 1155px;
  gap: 25px;
`

export const Table = styled(RowSC)`
  display: flex;
  border: 1px solid #e4e6eb;
  border-radius: 6px;
`

export const Job_item_img = styled.img`
border: 1px solid #e4e6eb;
    box-sizing: border-box;
    border-radius: 6px;
    overflow: hidden;
    width: 72px;
    height: 72px;
    margin: 15px;
   
`

export const Job_item_info = styled(RowSC)`
display: grid;
grid-template-columns: auto;
padding: 10px;

`
export const Job_item_info_top = styled(RowSC)`
border-bottom: 1px solid #e4e6eb;
`
export const Job_item_info_botton = styled(RowSC)`
  display: flex;
  height: 20px;

`