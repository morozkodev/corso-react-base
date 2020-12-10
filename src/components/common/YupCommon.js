import { setLocale } from 'yup';

setLocale({
	mixed: {
		required: 'Campo obbligatorio'
	},
	string: {
		email: 'Email non valida',
		min: 'Valore troppo corto (Minimo ${min} caratteri)',
		max: 'Valore troppo lungo (Massimo ${max} caratteri)'
	}
});
