//Adding SPA,SSG and ISR

'use client';
import { ReactNode, useState } from 'react';

import { Popup } from '@/components/wrappers';
import { MainForm, FieldConfigs } from '@/components/forms';

const LoginPage = (): ReactNode => {
	const [sstate, setState] = useState(true);
	const Cfigs =
		sstate ?
			FieldConfigs.login.fields
		:	FieldConfigs.register.fields;

	return (
		<Popup>
			<MainForm
				className='
      w-full
      flex
      flex-col
      justify-center
      gap-6
      '
				subhandler='hand'
				fields={Cfigs}
				state={sstate}
				setState={setState}
			></MainForm>
		</Popup>
	);
};
export default LoginPage;
