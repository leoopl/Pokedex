import router from 'next/router';
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
	// console.log(data.stats.map(currentStats => console.log(currentStats.base_stat)));
	return (
		<section style={{ background: getColor(data.types[0].type.name) }} className={style.container}>
			<div className={style.header}>
				<img
					alt="arrow left"
					className={style.arrow}
					src="/arrow-left.svg"
					onClick={() => router.push('/')}
				/>
				<h1 className={style.name}>{data.name}</h1>
				<p className={style.number}>#0{data.id}</p>
			</div>
			<section className={style.card}>
				<div className={style.type}>
					{data.types?.map(currentType => (
						<div
							key={currentType.slot}
							className={style.typeFrame}
							style={{ background: getColor(currentType.type.name) }}
						>
							<p>{currentType.type.name}</p>
						</div>
					))}
				</div>
				<div className={style.title}>
					<h1 style={{ color: getColor(data.types[0].type.name) }}> Sobre </h1>
				</div>
				<section className={style.about}>
					<div className={style.content}>
						<h3>Peso</h3>
						<h1>{data.weight / 10} kg</h1>
					</div>
					<div className={style.line} />
					<div className={style.content}>
						<h3>Altura</h3>
						<h1>{data.height / 10} m</h1>
					</div>
					<div className={style.line} />
					<div className={style.content}>
						<h3>Habilidades</h3>
						{data.abilities.map(currentAbility => (
							<h1 key={currentAbility.slot}>{currentAbility.ability.name}</h1>
						))}
					</div>
				</section>
				<div className={style.title}>
					<h1 style={{ color: getColor(data.types[0].type.name) }}> Status </h1>
				</div>
				<section className={style.stats}>
					<div className={style.statsName}>
						<ul>
							<li style={{ color: getColor(data.types[0].type.name) }}>HP</li>
							<li style={{ color: getColor(data.types[0].type.name) }}>ATK</li>
							<li style={{ color: getColor(data.types[0].type.name) }}>DEF</li>
							<li style={{ color: getColor(data.types[0].type.name) }}>SATK</li>
							<li style={{ color: getColor(data.types[0].type.name) }}>SDEF</li>
							<li style={{ color: getColor(data.types[0].type.name) }}>SPD</li>
						</ul>
					</div>
					<div className={style.secondLine} />
					<div className={style.statsName}>
						<ul>
							{data.stats.map(currentStats => {
								return <li>{currentStats.base_stat}</li>;
							})}
						</ul>
					</div>
				</section>
			</section>
			<img className={style.image} src={data.sprites.front_default} />
		</section>
	);
}
