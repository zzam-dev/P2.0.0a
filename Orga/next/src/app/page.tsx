import { MainNavBar } from '@/components/NavBar';
import { MainWrapper } from '@/components/wrappers';
import LoginPage from '@/logic/Formhandling';

const Main = () => {
	return (
		<MainWrapper>
			<MainNavBar />
			<LoginPage />
		</MainWrapper>
	);
};

export default Main;
