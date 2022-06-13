import * as React from 'react'

import { SearchBoxNav } from '@/styled Component/searchBox/SearchBoxNav'
import { L_Box } from '@/styled Component/searchBox/L_Box'
import { R_Box } from '@/styled Component/searchBox/R_Box'
import { Input } from '@/styled Component/searchBox/Input'
import { Button } from '@/styled Component/Button'
import { Span } from '@/styled Component/searchBox/smallTitle'
import { Img } from '@/styled Component/searchBox/Img'


export function SearchBox() {

	return (
		<SearchBoxNav >
			<L_Box>
				<div style={{fontSize:'30px', fontWeight:"bold", position:'absolute', top:'55px'}} >
				 Bạn muốn tìm việc hợp?
				</div>
				<Img src="https://assets.jobhopin.com/imgs/fpto/bg-search-logo.png" alt="123" />
				
			</L_Box>
			<R_Box>
			<div>
			<Input  type="search"  className='input' placeholder='Nhập nội dung tại đây...'>
			</Input>
			<Button>Tìm việc thông minh</Button>
			</div>
			<div>
			<Span style={{color: "#fff"}}>Ngành nghề tìm kiếm nhiều nhất:</Span>
			<Span >IT Phần mềm</Span>
			<Span >Bán lẻ</Span>
			<Span >Quảng cáo tiếp thị</Span>
			<Span >Kỹ thuật</Span>
			<Span >Bán hàng</Span>
			<Span >Tiếp thị</Span>
			</div>
			</R_Box>
			
		</SearchBoxNav>
	)
}

