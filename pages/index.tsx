import { useState } from 'react';
import style from './index.module.css';
import Search from './Header/Search';
import Itens from './Itens';

export default function HomePage() {
	const [search, setSearch] = useState('');
	return (
		<section className={style.hug}>
			<div className={style.head}>
				<div className={style.pokeContainer}>
					<img src="/Pokeball.svg" alt="pokebola" className={style.pokeball} />
				</div>
				<h1 className={style.title}>Pokédex</h1>
				<button className={style.sort}></button>
			</div>
			<Search search={search} setSearch={setSearch} />
			<Itens search={search} />
		</section>
	);
}
