import Pokemon from '../../../utils/ApiType';
import style from './Item.module.css';
import { getColor } from '../../../utils/getColor';

export default function Item(props: Pokemon) {
	return (
		//<div className={style.item}>
		<div className={style.item} style={{ borderColor: getColor(props.types[0].type.name) }}>
			<div className={style.header}>
				<p style={{ color: getColor(props.types[0].type.name) }}>#0{props.id}</p>
			</div>
			<img className={style.itemImg} src={props.sprites.front_default} />
			<div className={style.footer} style={{ background: getColor(props.types[0].type.name) }}>
				<p>{props.name}</p>
			</div>
			{/* <script>
				{(document.getElementById('footer').style.background = getColor(props.types[0].type.name))}
			</script> */}
		</div>
		//</div>
	);
}
