import { PokemonClient } from 'pokenode-ts';
import { getColor } from '../../utils/getColor';
import style from './pokeid.module.css';

export async function getServerSideProps(context) {
	const id = context.query;
	console.log(id);

	const api = new PokemonClient();
	const data = await api.getPokemonById(+id.pokeid);

	return {
		props: { data },
	};
}

export default function poke({ data }) {
	return (
		<section style={{ background: getColor(data.types[0].type.name) }} className={style.container}>
			<div className={style.header}>
				<div className={style.arrow} />
				<h1 className={style.name}>{data.name}</h1>
				<p className={style.number}>#0{data.id}</p>
			</div>
			<section className={style.card}>
				<div className={style.type}></div>
			</section>
			<img className={style.image} src={data.sprites.front_default} />
		</section>
	);
}
