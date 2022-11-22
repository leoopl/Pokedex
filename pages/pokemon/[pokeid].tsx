import { useRouter } from 'next/router';
import { PokemonClient } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import style from './pokeid.module.css';
import Pokemon from '../../utils/ApiType';

export default function poke() {
	const router = useRouter();
	const id = router.query;

	// console.log(id.pokeid);
	// const numberID = Number(id.pokeid);
	// console.log(typeof numberID);

	// const [endData, setEndData] = useState<Pokemon>();
	// useEffect(() => {
	// 	(async () => {
	// 		const api = new PokemonClient();
	// 		await api
	// 			.getPokemonById(numberID)
	// 			.then(data => setEndData(data))
	// 			.catch(error => console.error(error));
	// 	})();
	// }, []);

	return (
		<section className={style.container}>
			<div className={style.header}>
				<div className={style.arrow} />
				<h1 className={style.name}>Bulbasaur</h1>
				<p className={style.number}>#001</p>
			</div>
			<section className={style.card}>
				<div className={style.type}></div>
			</section>
			<img
				className={style.image}
				src="https://www.clipartmax.com/png/middle/96-968115_bulbasaur-png.png"
			/>
		</section>
	);
}
