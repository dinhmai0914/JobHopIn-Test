import { SearchBox, RecentPosts} from '@/components/home'
import { Page } from '@/models/common'
import { Container } from '@/styled Component/Container'


const Home: Page = () => {
	
	return (
		<Container>
			<SearchBox />
			<RecentPosts  />
		</Container>
	)
}

export default Home
