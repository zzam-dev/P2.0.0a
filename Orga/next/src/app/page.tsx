import { MainNavBar } from '@/components/NavBar';
import { MainWrapper } from '@/components/wrappers';
import LoginPage from '@/logic/Formhandling';
import validator from '@/logic/FormValidation';

const Main = () => {
	const tester = validator('email', '');
	console.log(tester);

	return (
		<MainWrapper>
			<MainNavBar />
			<LoginPage />
		</MainWrapper>
	);
};

export default Main;
