export interface IToastMessage {
	id: string;
	message: string;
	type: 'success' | 'error';
	duration?: number;
}
