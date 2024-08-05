
import CardConteiner from "./card-conteiner/card-conteiner"
import { FlipWords } from "./ui/flip-words"

const words = ["Talento IT", "Coaching", "Contrato"]

export default function Hero() {
	return (
		<div className="relative mx-auto flex max-w-7xl justify-center gap-10 pt-16">
			<div className="mt-40 flex h-[40rem] flex-col justify-start gap-8 px-4">
				<h1 className="text-4xl font-extrabold leading-[50px]">
					Encuentra con nosotros tu <br />
					 proximo <FlipWords words={words} />
				</h1>
				<h2 className="text-sm font-semibold text-gray-700">
				Soluciones Integrales para la Gestión de Talento.
				</h2>
			</div>
			<CardConteiner />
		</div> 
	)
}
