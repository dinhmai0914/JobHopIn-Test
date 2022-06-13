import  React from 'react'
import { useState } from "react";
import { Title, Title_p, Title_sm } from '@/styled Component/RecentPost/Title'
import { Container, Job_item_img, Job_item_info, Job_item_info_botton, Job_item_info_top,  Table } from '@/styled Component/RecentPost/Row'
import { Img } from '@/styled Component/searchBox/Img'
import { Button } from '@/styled Component/RecentPost/Button'
import { Post } from '@/models/post'

export function RecentPosts() {
	const postList: Post[] = [
		{
			id: '1',
			img: 'https://cdn.jobhopin.com/avatars/cfd51417-b609-4467-8334-96cb103085dc.jpg',
			title: 'Trưởng Phòng Hành Chính Nhân Sự' ,
			companyName: 'FPT Online' ,
			Manpower: '501 - 1000',
			Location: 'Ho Chi Minh, Viet Nam',
			Salary:'Thoả thuận',
			Time:'7 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/truong-phong-hanh-chinh-nhan-su-fpt-online-ovnh-vi',
		},
		{
			id: '2',
			img: 'https://cdn.jobhopin.com/avatars/a6377659-c0ac-4b0f-8ff4-60f7cef3b321.jpg',
			title: 'Chuyên Viên Tư Vấn Bất Động Sản' ,
			companyName: 'SG Investment' ,
			Manpower: '11 - 50',
			Location: '27 Nguyễn Cửu Vân',
			Salary:'8 triệu - 15 triệu',
			Time:'2 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/chuyen-vien-tu-van-bat-dong-san-sg-investment-jtulc-vi',
		},
		{
			id: '3',
			img: 'https://cdn.jobhopin.com/avatars/1669e459-e21c-4992-9bf2-99b84b15c37c.png',
			title: 'Network Engineer' ,
			companyName: 'Advance Vision Technology' ,
			Manpower: '11 - 50',
			Location: 'Lầu 8, 594-596 Cộng Hòa, Phường 13, Quận Tân Bình',
			Salary:'Thoả thuận',
			Time:'18 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/network-engineer-advance-vision-technology-avtech-diwl-vi',
		},
		{
			id: '4',
			img: 'https://cdn.jobhopin.com/avatars/f1cd6a3c-bd02-47f6-96f0-4ff23b75d1c9.jpg',
			title: 'Back-End Developer (.NET)' ,
			companyName: 'Kyanon Digital' ,
			Manpower: '51 - 200',
			Location: '294 Trường Sa, Phường 2, Phú Nhuận, Thành phố Hồ Chí Minh, Việt Nam',
			Salary:'1,000 USD - 1,500 USD',
			Time:'22 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/back-end-developer-net-kyanon-digital-sezq-vi',
		},
		{
			id: '5',
			img: 'https://cdn.jobhopin.com/avatars/f1cd6a3c-bd02-47f6-96f0-4ff23b75d1c9.jpg',
			title: 'Chuyên viên Tuyển dụng' ,
			companyName: 'FPT Online' ,
			Manpower: '501 - 1000',
			Location: 'Ha Noi',
			Salary:'Thoả thuận',
			Time:'17 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/chuyen-vien-tuyen-dung-fpt-online-wywnb-vi',
		},
		{
			id: '6',
			img: 'https://cdn.jobhopin.com/avatars/9b749bff-7aa0-4897-8a9f-13d7525e895f.png',
			title: 'Senior Frontend/ Backend Developer (Remote)' ,
			companyName: 'Bigtree Technology and Consulting Vietnam Co., Ltd.' ,
			Manpower: '11 - 50',
			Location: '444 Hoàng Hoa Thám',
			Salary:'Thoả thuận',
			Time:'20 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/senior-frontend-backend-developer-remote-bigtree-technology-and-consulting-vietnam-co-ltd-yumf-vi',
		},
		{
			id: '7',
			img: 'https://cdn.jobhopin.com/avatars/cfae7496-5ea3-49c8-9c40-a826f64cf81b.png',
			title: 'Relationship Manager – Priority Banking' ,
			companyName: 'United Overseas Bank (Vietnam) Limited' ,
			Manpower: '501 - 1000',
			Location: 'Ho Chi Minh, Viet Nam',
			Salary:'1,000 USD - 2,000 USD',
			Time:'27 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/relationship-manager-priority-banking-united-overseas-bank-vietnam-limited-yxsl-vi',
		},
		{
			id: '8',
			img: 'https://cdn.jobhopin.com/avatars/cfae7496-5ea3-49c8-9c40-a826f64cf81b.png',
			title: 'Bancassurance Product Manager' ,
			companyName: 'United Overseas Bank (Vietnam) Limited' ,
			Manpower: '501 - 1000',
			Location: 'Ho Chi Minh, Viet Nam',
			Salary:'Thoả thuận',
			Time:'27 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/bancassurance-product-manager-united-overseas-bank-vietnam-limited-fmpt-vi',
		},
		{
			id: '9',
			img: 'https://cdn.jobhopin.com/avatars/f1cd6a3c-bd02-47f6-96f0-4ff23b75d1c9.jpg',
			title: 'Project Coordinator' ,
			companyName: 'Kyanon Digital' ,
			Manpower: '51 - 200',
			Location: '294 Trường Sa, Phường 2, Phú Nhuận, Thành phố Hồ Chí Minh, Việt Nam',
			Salary:'1,000 USD - 1,200 USD',
			Time:'29 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/project-coordinator-kyanon-digital-vjxe-vi',
		},
		{
			id: '10',
			img: 'https://cdn.jobhopin.com/avatars/a14bfc1d-b223-4c65-ab2e-1a4ab8f4fbe0.png',
			title: 'Cards Product Owner' ,
			companyName: 'Home Credit' ,
			Manpower: '201 - 500',
			Location: 'Ho Chi Minh, Viet Nam',
			Salary:'Thoả thuận',
			Time:'13 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/cards-product-owner-home-credit-nira-vi',
		},
		{
			id: '11',
			img: 'https://cdn.jobhopin.com/avatars/473e4dba-394a-46e3-98bb-75de273ce048.png',
			title: 'Android Developer' ,
			companyName: 'DXC Vietnam' ,
			Manpower: '201 - 500',
			Location: 'Ho Chi Minh, Viet Nam',
			Salary:'Thoả thuận',
			Time:'11 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/dxc-vietnam-ofa-vi',
		},
		{
			id: '12',
			img: 'https://cdn.jobhopin.com/avatars/a6377659-c0ac-4b0f-8ff4-60f7cef3b321.jpg',
			title: 'Ui/Ux Designer' ,
			companyName: 'JobHopin’s Client' ,
			Manpower: '5001 - 10000',
			Location: '7/28 Thành Thái, phường 14,',
			Salary:'Thoả thuận',
			Time:'158 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/ui-ux-designer-jobhopin-s-client-ssxb-vi',
		},
		{
			id: '13',
			img: 'https://cdn.jobhopin.com/avatars/1669e459-e21c-4992-9bf2-99b84b15c37c.png',
			title: 'Business Analyst' ,
			companyName: 'Kyanon Digital' ,
			Manpower: '51 - 200',
			Location: '294 Trường Sa, Phường 2, Phú Nhuận, Thành phố Hồ Chí Minh, Việt Nam',
			Salary:'1,500 USD - 2,000 USD',			
			Time:'29 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/business-analyst-kyanon-digital-yeu-vi',
		},
		{
			id: '14',
			img: 'https://assets.jobhopin.com/imgs/fpto/default-ework.png',
			title: 'Financial Operations (FinOps) Manager' ,
			companyName: 'JobHopin’s Client' ,
			Manpower: '501 - 1000',
			Location: 'Ho Chi Minh',
			Salary:'Thoả thuận',
			Time:'114 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/financial-operations-finops-manager-jobhopin-s-client-gqoa-vi',
		},
		{
			id: '15',
			img: 'https://cdn.jobhopin.com/avatars/a683cfda-691d-4eaf-9fc7-94c34a031a46.png',
			title: 'Fullstack Developer (Java/Angular/Mysql)' ,
			companyName: 'Ngân Hàng Quân Đội (MB)e' ,
			Manpower: '501 - 1000',
			Location: 'Ha Noi, Viet Nam',
			Salary:'1,000 USD - 2,000 USD',
			Time:'9 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/fullstack-developer-java-angular-mysql-ngan-hang-quan-doi-mb-ybjv-vi',
		},
		{
			id: '16',
			img: 'https://cdn.jobhopin.com/avatars/5b21f110-6399-4fa7-bc08-2dbf751a231b.png',
			title: 'Event Executive Intern' ,
			companyName: 'JobHopin' ,
			Manpower: '11 - 50',
			Location: 'District 1, Ho Chi Minh City',
			Salary:'Thoả thuận',
			Time:'11 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/event-executive-intern-jobhopin-nwoc-vi',
		},
		{
			id: '17',
			img: 'https://cdn.jobhopin.com/avatars/5b21f110-6399-4fa7-bc08-2dbf751a231b.png',
			title: 'Business Analyst' ,
			companyName: 'JobHopin' ,
			Manpower: '51 - 200',
			Location: '2 Đường Tôn Đức Thắng, Bến Nghé, Quận 1, Hồ Chí Minh, Vietnam',
			Salary:'Thoả thuận',
			Time:'4 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/business-analyst-jobhopin-ew7-vi',
		},
		{
			id: '18',
			img: 'https://cdn.jobhopin.com/avatars/10c72b4a-7529-42e9-9250-48e49babc385.jpg',
			title: 'Business Analyst (Project Manager/Dev)' ,
			companyName: 'Công ty TNHH Lampart' ,
			Manpower: '51 - 200',
			Location: 'Ho Chi Minh, Viet Nam',
			Salary:'Thoả thuận',
			Time:'5 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/business-analyst-project-manager-dev-cong-ty-tnhh-lampart-zgvaq-vi',
		},
		{
			id: '19',
			img: '	https://cdn.jobhopin.com/avatars/cfae7496-5ea3-49c8-9c40-a826f64cf81b.png',
			title: 'Lending SME Relationship Manager' ,
			companyName: 'United Overseas Bank (Vietnam) Limited' ,
			Manpower: '501 - 1000',
			Location: '12 Ton Dan, Ward 13, District 4, HCMC',
			Salary:'Thoả thuận',
			Time:'16 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/lending-sme-relationship-manager-united-overseas-bank-vietnam-limited-ajhu-vi',
		},
		{
			id: '20',
			img: '	https://cdn.jobhopin.com/avatars/5b21f110-6399-4fa7-bc08-2dbf751a231b.png',
			title: 'Customer Success Specialist' ,
			companyName: 'JobHopin' ,
			Manpower: '51 - 200',
			Location: 'Vinhomes Ba Son, 02 Ton Duc Thang, W. Ben Nghe, D. 1, HCMC',
			Salary:'Thoả thuận',
			Time:'15 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/customer-success-specialist-jobhopin-o08-vi',
		},
		{
			id: '21',
			img: 'https://cdn.jobhopin.com/avatars/5b21f110-6399-4fa7-bc08-2dbf751a231b.png',
			title: 'Social Content Specialist' ,
			companyName: 'JobHopin' ,
			Manpower: '201 - 500',
			Location: 'Vinhomes Ba Son, 02 Ton Duc Thang, W. Ben Nghe, D. 1, HCMC',
			Salary:'Thoả thuận',
			Time:'5 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/social-content-specialist-jobhopin-bhg-vi',
		},
		{
			id: '22',
			img: 'https://cdn.jobhopin.com/avatars/5b21f110-6399-4fa7-bc08-2dbf751a231b.png',
			title: 'Business Manager (Based in Ho Chi Minh/Ha Noi)' ,
			companyName: 'JobHopin' ,
			Manpower: '51 - 200',
			Location: 'District 1, Ho Chi Minh City, Vietnam',
			Salary:'Thoả thuận',
			Time:'9 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/business-manager-based-in-ho-chi-minh-ha-noi-jobhopin-ez1-vi',
		},
		{
			id: '23',
			img: 'https://cdn.jobhopin.com/avatars/cfae7496-5ea3-49c8-9c40-a826f64cf81b.png',
			title: 'Sale Manager - Priority Banking' ,
			companyName: 'United Overseas Bank (Vietnam) Limited' ,
			Manpower: '501 - 1000',
			Location: 'Ho Chi Minh, Viet Nam',
			Salary:'Thoả thuận',
			Time:'158 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/sale-manager-priority-banking-united-overseas-bank-vietnam-limited-ytqa-vi',
		},
		{
			id: '24',
			img: 'https://cdn.jobhopin.com/avatars/1669e459-e21c-4992-9bf2-99b84b15c37c.png',
			title: 'Mid-Level Devops Engineer (Linux, Cloud)' ,
			companyName: 'Beowulf Blockchain - DeFiato - Quickom' ,
			Manpower: '51 - 200',
			Location: '294 Trường Sa, Phường 2, Phú Nhuận, Thành phố Hồ Chí Minh, Việt Nam',
			Salary:'1,500 USD - 2,000 USD',			
			Time:'29 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/mid-level-devops-engineer-linux-cloud-beowulf-blockchain-defiato-quickom-ggrx-vi',
		},
		{
			id: '25',
			img: 'https://assets.jobhopin.com/imgs/fpto/default-ework.png',
			title: 'Drupal Developer (All Level)' ,
			companyName: 'Kyanon Digital' ,
			Manpower: '51 - 200',
			Location: 'Ho Chi Minh',
			Salary:'Thoả thuận',
			Time:'114 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/drupal-developer-all-level-kyanon-digital-rgyw-vi',
		},
		{
			id: '26',
			img: 'https://cdn.jobhopin.com/avatars/a683cfda-691d-4eaf-9fc7-94c34a031a46.png',
			title: 'United Overseas Bank (Vietnam) Limited' ,
			companyName: 'Ngân Hàng Quân Đội (MB)e' ,
			Manpower: '501 - 1000',
			Location: 'Ha Noi, Viet Nam',
			Salary:'1,000 USD - 2,000 USD',
			Time:'9 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/digital-performance-analytics-united-overseas-bank-vietnam-limited-zfoa-vi',
		},
		{
			id: '27',
			img: 'https://cdn.jobhopin.com/avatars/5b21f110-6399-4fa7-bc08-2dbf751a231b.png',
			title: 'Account Specialist/Sales Consultant (Bunny Racer)' ,
			companyName: 'JobHopin' ,
			Manpower: '11 - 50',
			Location: 'District 1, Ho Chi Minh City',
			Salary:'Thoả thuận',
			Time:'11 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/account-specialist-sales-consultant-bunny-racer-jobhopin-deac-vi',
		},
		{
			id: '28',
			img: 'https://cdn.jobhopin.com/avatars/5b21f110-6399-4fa7-bc08-2dbf751a231b.png',
			title: 'Relationship Manager – Auto Loan' ,
			companyName: 'United Overseas Bank (Vietnam) Limited' ,
			Manpower: '51 - 200',
			Location: '2 Đường Tôn Đức Thắng, Bến Nghé, Quận 1, Hồ Chí Minh, Vietnam',
			Salary:'Thoả thuận',
			Time:'4 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/relationship-manager-auto-loan-united-overseas-bank-vietnam-limited-yxll-vi',
		},
		{
			id: '29',
			img: 'https://cdn.jobhopin.com/avatars/10c72b4a-7529-42e9-9250-48e49babc385.jpg',
			title: 'PHP Developer (Laravel, MySQL)' ,
			companyName: 'STYL Solutions' ,
			Manpower: '51 - 200',
			Location: 'Ho Chi Minh, Viet Nam',
			Salary:'Thoả thuận',
			Time:'5 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/php-developer-laravel-mysql-styl-solutions-phesl-vi',
		},
		{
			id: '30',
			img: 'https://cdn.jobhopin.com/avatars/cfae7496-5ea3-49c8-9c40-a826f64cf81b.png',
			title: 'Chuyên Viên It' ,
			companyName: 'Công ty Cổ phần Dịch vụ Quản lý Bất động sản Nhà Tôi' ,
			Manpower: '501 - 1000',
			Location: '25 - 27 B4 Street, An Loi Dong Ward, Thu Duc City, Ho Chi Minh city',
			Salary:'Thoả thuận',
			Time:'16 ngày trước',
			description:
				'https://ework.vnexpress.net/timviec/danhsach/chuyen-vien-it-cong-ty-co-phan-dich-vu-quan-ly-bat-dong-san-nha-toi-qpsp-vi',
		}
	]
	const [current, setcurrent] = useState(8);
	 function loadMore (){
		setcurrent((prev => prev + 4))
	}	
	
	return (
		<div>
		<Title>Việc làm hấp dẫn</Title>
		<Title_sm>Công việc hấp dẫn, lương cạnh tranh dành cho bạn!</Title_sm>
		<Container>
		{postList.slice(0,current).map((item, index)=>{
			return (
				<Table key={index}>
					<Job_item_img src={item.img} /> 
					<Job_item_info>
						<Job_item_info_top>
							<a style={{fontWeight:700}} href={item.description}>{item.title}</a> 
							<p style={{color: "#717171", fontSize:13}}>{item.companyName} | <img style={{marginBottom:-5, marginRight:3, marginLeft:5}}  src="https://assets.jobhopin.com/icons/fpto/icon-account.svg" /> <span style={{fontSize:15, fontWeight:500}}>{item.Manpower}</span> </p>
							<div style={{display:"flex", marginTop: -15}}><img src="https://assets.jobhopin.com/icons/fpto/icon-money.svg" /> <p style={{marginRight:10, color:"#2387bf", fontSize: 13, fontWeight:500, marginTop:18, marginLeft:5}}>{item.Salary}</p>  <p style={{color:"#717171", marginRight:8, marginTop:15}}>|</p>  <img style={{marginRight: 5}} src="https://assets.jobhopin.com/icons/fpto/icon-location.svg" /> <Title_p>{item.Location}</Title_p> </div>
							</Job_item_info_top>
						<Job_item_info_botton>
						<Img style={{width:12, height: 12, marginTop: 10, marginLeft: 0, marginRight:5}}  src="https://assets.jobhopin.com/icons/fpto/icon-time.svg" />
							 <Title_sm>{item.Time}</Title_sm>
						</Job_item_info_botton>
					</Job_item_info>
			</Table>)
			})}
		
		</Container>
		<Button onClick={loadMore} >Xem thêm</Button>
	  </div>
	)
}
