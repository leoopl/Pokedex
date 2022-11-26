import { useState } from 'react';
import style from './index.module.css';
import Search from './Header/Search';
import Itens from './Itens';

export default function HomePage() {
	const [search, setSearch] = useState('');
	const [ordered, setOrdered] = useState(true);
	return (
		<section className={style.hug}>
			<div className={style.head}>
				<div className={style.pokeContainer}>
					<img src="/Pokeball.svg" alt="pokebola" className={style.pokeball} />
				</div>
				<h1 className={style.title}>Pokédex</h1>
				<button type="button" className={style.sort} onClick={() => setOrdered(!ordered)}>
					<img
						alt="sort"
						src={
							ordered
								? '/text-sort-ascending-svgrepo-com.svg'
								: '/sort-amount-down-alt-solid-svgrepo-com.svg'
						}
					/>
				</button>
			</div>
			<Search search={search} setSearch={setSearch} />
			<Itens search={search} ordered={ordered} />
		</section>
	);
}
