import React from 'react';
import LinkList from './components/LinkList/LinkList';
import LinkShortenerForm from './components/LinkShortenerForm/LinkShortenerForm';
import MyLinks from './components/MyLinks/MyLinks';
import Echo from 'laravel-echo';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { updateLink } from './features/myLinks';
import { updateAllLinks } from './features/allLinks';

const link = new HttpLink({ uri: 'http://test-task.profilancegroup-tech.com/graphql' });

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});

const App: React.FC = () => {
	const dispatch = useDispatch();
	window.io = require('socket.io-client');
	const echo = new Echo({
		broadcaster: 'socket.io',
		host: 'http://test-task.profilancegroup-tech.com:6002',
	});

	echo.channel('btti_database_short_urls').listen('.new_click', (e: any) => {
		dispatch(updateLink(e)); // обновление Мои ссылки
		dispatch(updateAllLinks(e)); // обновление Список ссылок
	});

	return (
		<ApolloProvider client={client}>
			<header>
				<h1 className="logo">Сокращатель</h1>
			</header>
			<div className="content-container">
				<div>
					<LinkShortenerForm />
					<MyLinks />
				</div>
				<LinkList />
			</div>
		</ApolloProvider>
	);
};

export default App;
