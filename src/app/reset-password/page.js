import ResetPassword from '@/components/Auth/ResetPassword';

export const metadata = {
	title: 'Resetowanie hasła | DropHub',
	description:
		'Zresetuj swoje hasło do konta w DropHub. Bezpieczny proces odzyskiwania dostępu do konta.',
};

export default function ResetPasswordPage() {
	return <ResetPassword />;
}
