import styles from '@/styles/home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<ul>
				<li>
					<a href="/modal">Modal</a>
				</li>

				<li>
					<a href="/modal-de-confirmacao">Modal de confirmação</a>
				</li>

				<li>
					<a href="/lista">Lista</a>
				</li>

				<li>
					<a href="/formulario">Formulário</a>
				</li>

				<li>
					<a href="/context-api">Context API</a>
				</li>

				<li>
					<a href="/pagina-estatica">Pagina estática</a>
				</li>

				<li>
					<a href="/ciclo-de-vida">Ciclo de vida de componente</a>
				</li>
			</ul>
		</div>
	);
}
