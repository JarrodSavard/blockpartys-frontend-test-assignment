import './App.css';
import { gql, useQuery } from '@apollo/client';
import { Card } from './components/Card/Card';

import CollectionInfo from './components/CollectionInfo/CollectionInfo';

const GET_CONTRACT_TOKENS = gql`
	query {
		contract(id: "0x8ae7cd5bd5072011f57dc00b6f094df545efd1ad") {
			name
			id
			tokens {
				tokens {
					tokenID
					name
					image {
						url
					}
				}
			}
		}
	}
`;

function App() {
	const { loading, error, data } = useQuery(GET_CONTRACT_TOKENS);

	if (loading) return <p></p>;
	if (error) return <p>Error :(</p>;

	return (
		<div className="wrapper">
			{console.log(data.contract)}
			<CollectionInfo collectionName={data?.contract.name} collectionAddress={data?.contract.id} />

			<div className="card-container">
				{[...data.contract.tokens.tokens]
					.sort((a, b) => parseInt(a.tokenID) - parseInt(b.tokenID))
					.slice(0, 4)
					.map((token) => (
						<Card key={token.tokenID} id={token.tokenID} tokenName={token.name} imageUrl={token.image.url} />
					))}
			</div>
		</div>
	);
}

export default App;
