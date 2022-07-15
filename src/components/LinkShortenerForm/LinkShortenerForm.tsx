import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { SHORT_LINK_MUTATION } from '../../GraphQL/Mutations';
import { useDispatch } from 'react-redux';
import { addLink } from '../../features/myLinks';
import './link-shortener-form.scss';

const LinkShortenerForm: React.FC = () => {
	const [shorten_url, { error, data, loading }] = useMutation(SHORT_LINK_MUTATION);
	const [url, setUrl] = useState<string>('');
	const [errorText, setErrorText] = useState<string>('');
	const dispatch = useDispatch();

	useEffect(() => {
		if (data) {
			dispatch(addLink(data.shorten_url.short_url));
			setErrorText('');
		}
		if (error) {
			if (error.message === 'Validation failed for the field [shorten_url].') {
				setErrorText('Это не ссылка!');
			} else {
				setErrorText('Ошибка!');
			}
		}
	}, [data, loading]);

	const handleShortener = (): void => {
		shorten_url({
			variables: {
				url: url,
			},
		});
	};

	return (
		<form
			className="shortener-form box"
			onSubmit={(e) => {
				e.preventDefault();
				handleShortener();
			}}
		>
			<h3 className="shortener-form__title">Ведите ссылку</h3>
			<div className="shortener-form__input-container">
				<input
					type="text"
					name="link"
					required
					value={url}
					className="shortener-form__input-field"
					onInput={(e: React.ChangeEvent<HTMLInputElement>): void => setUrl(e.target.value)}
				/>
				<button type="submit" className="button">
					Сократить
				</button>
			</div>
			<div className="shortener-form__error error-text">{errorText}</div>
		</form>
	);
};

export default LinkShortenerForm;
