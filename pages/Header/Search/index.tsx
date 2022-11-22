import React from 'react';
import style from './Search.module.css';

interface Props {
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ search, setSearch }: Props) {
	return (
		<div className={style.searchContainer}>
			<input
				className={style.searchInput}
				placeholder="Procurar"
				value={search}
				onChange={e => setSearch(e.target.value)}
			></input>
		</div>
	);
}
