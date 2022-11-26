import { PokemonClient } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import Item from './Item';
import style from './Itens.module.css';
import Pokemon from '../../utils/ApiType';
import Link from 'next/link';

interface Props {
	search: string;
	ordered: boolean;
}

export default function Itens({ search, ordered }: Props) {
	const [endData, setEndData] = useState<Pokemon[]>([]);
	const [filterData, setfilterData] = useState<Pokemon[]>([]);

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
					.then(data => {
						setEndData(oldData => [...oldData, data]);
						setfilterData(oldData => [...oldData, data]);
					})
					.catch(error => console.error(error));
			}
		})();
	}, []);

	function order(newData: Pokemon[]) {
		if (ordered === true) {
			return newData.sort((a, b) => (a.id > b.id ? 1 : -1));
		} else {
			return newData.sort((a, b) => (a.name > b.name ? 1 : -1));
		}
	}

	useEffect(() => {
		const newData = endData.filter(item => testSearch(item.name));
		setfilterData(order(newData));
	}, [search, ordered]);

	return (
		<section className={style.container}>
			<div className={style.row}>
				{filterData?.map(currentData => (
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
