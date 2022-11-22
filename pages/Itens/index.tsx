import { PokemonClient } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import Item from './Item';
import style from './Itens.module.css';
import Pokemon from '../../utils/ApiType';
import Link from 'next/link';

interface Props {
	search: string;
}

export default function Itens({ search }: Props) {
	const [endData, setEndData] = useState<Pokemon[]>([]);

	function testSearch(title: string) {
		const regex = new RegExp(search, 'i');
		return regex.test(title);
	}

	useEffect(() => {
		(async () => {
			const api = new PokemonClient();
			for (let id = 1; id <= 151; id++) {
				await api
					.getPokemonById(id)
					.then(data => setEndData(oldData => [...oldData, data]))
					.catch(error => console.error(error));
			}
		})();
	}, []);

	useEffect(() => {
		const newData = endData.filter(item => testSearch(item.name));
		setEndData(newData);
	}, [search]);

	return (
		<section className={style.container}>
			<div className={style.row}>
				{endData?.map(currentData => (
					<Link
						style={{ textDecoration: 'none' }}
						href={{ pathname: '/pokemon/[slug]', query: { slug: currentData.id } }}
					>
						<Item key={currentData.id} {...currentData} />
					</Link>
				))}
			</div>
		</section>
	);
}
